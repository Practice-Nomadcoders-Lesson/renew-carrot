"use server";

import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "Wrong phone format",
  );

const tokenSchema = z.coerce.number().min(100000).max(999999);

interface ActionState {
  token: boolean;
}

export const smsLogin = async (prevState: ActionState, formData: FormData) => {
  const phone = formData.get("phone");
  const token = formData.get("token");

  // prevState.token 이 false이면 초기값이 넘어온 것으로 이 action은 처음호출되었다는 의미입니다.
  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);
    if (!result.success) {
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      return {
        token: true,
      };
    }
  } else {
    const result = tokenSchema.safeParse(token);
    if (!result.success) {
      return {
        token: true,
        error: result.error.flatten(),
      };
    } else {
      // 로그인 성공
      redirect("/");
    }
  }
};
