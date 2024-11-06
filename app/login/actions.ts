"use server";

export const login = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    errors: ["wrong password", "password too short"],
  };
};
