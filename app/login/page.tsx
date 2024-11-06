"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { SocialLogin } from "@/components/social-login";
import { useFormState } from "react-dom";
import { login } from "./actions";

const LoginPage = () => {
  const [state, action] = useFormState(login, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password</h2>
      </div>

      <form className="flex flex-col gap-3" action={action}>
        <Input
          required
          name="email"
          type="email"
          errors={state?.fieldErrors.email}
          placeholder="Email"
        />
        <Input
          required
          type="password"
          name="password"
          errors={state?.fieldErrors.password}
          placeholder="Password"
        />
        <Button text="Log in" />
      </form>

      <SocialLogin />
    </div>
  );
};

export default LoginPage;
