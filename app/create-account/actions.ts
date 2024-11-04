"use server";

import { z } from "zod";

const checkUsername = (username: string) => !username.includes("potato");
const checkPassword = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Where is my username?",
      })
      .min(3, "Way too short!!!")
      .max(10, "That is too looong!")
      .refine(checkUsername, "No potatoes allowed!"),
    email: z.string().email(),
    password: z.string().min(10),
    confirmPassword: z.string().min(10),
  })
  .refine(checkPassword, {
    message: "Both passwords should be the same!",
    path: ["confirmPassword"],
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
