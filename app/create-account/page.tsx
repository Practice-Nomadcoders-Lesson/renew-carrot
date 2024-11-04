"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { SocialLogin } from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

const CreateAccountPage = () => {
  const [state, dispatch] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>

      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          required
          type="text"
          name="username"
          errors={state?.fieldErrors.username}
          placeholder="Username"
          minLength={3}
          maxLength={10}
        />
        <Input
          required
          type="email"
          name="email"
          errors={state?.fieldErrors.email}
          placeholder="Email"
        />
        <Input
          required
          type="password"
          name="password"
          errors={state?.fieldErrors.password}
          placeholder="Password"
          minLength={4}
        />
        <Input
          required
          type="password"
          name="confirmPassword"
          errors={state?.fieldErrors.confirmPassword}
          placeholder="Confirm Password"
          minLength={4}
        />
        <Button text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
};

export default CreateAccountPage;
