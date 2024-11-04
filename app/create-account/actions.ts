"use server";

import { z } from "zod";

const formSchema = z.object({
  username: z
    .string({
      invalid_type_error: "Username must be a string!",
      required_error: "Where is my username?",
    })
    .min(3, "Way too short!!!")
    .max(10, "That is too looong!"),
  email: z.string().email(),
  password: z.string().min(10),
  confirmPassword: z.string().min(10),
});

export const createAccount = async (prevState: any, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
};
