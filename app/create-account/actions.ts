"use server";

import { z } from "zod";

const usernameSchema = z.string().min(5).max(10);

export const createAccount = async (prevState: any, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
    confirmPassword: formData.get("confirmPassword"),
  };

  usernameSchema.parse(data.username);
};
