"use server";

import { z } from "zod";
import bcrypt from "bcrypt";

import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

// find a user with the email
const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  return Boolean(user);
};

const formSchema = z.object({
  email: z
    .string()
    .email()
    .toLowerCase()
    .refine(checkEmailExists, "An account with this email does not exists."),
  password: z
    .string({ required_error: "Password is required" })
    .min(PASSWORD_MIN_LENGTH)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export const login = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    // if the user is found, check password hash
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });

    //check password hash
    const ok = await bcrypt.compare(
      result.data.password,
      user!.password ?? "xxxx",
    );

    // log the user in
    if (ok) {
      const session = await getSession();
      session.id = user!.id;

      // redirect "/profile"
      redirect("/profile");
    } else {
      // 비밀번호가 틀렸다면
      // zod모양과 같은 형태로 에러를 리턴합니다.
      return {
        fieldErrors: {
          password: ["Wrong password."],
          email: [],
        },
      };
    }
  }
};
