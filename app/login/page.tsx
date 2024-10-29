"use client";

import { FormButton } from "@/components/form-btn";
import { FormInput } from "@/components/form-input";
import { SocialLogin } from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

const LoginPage = () => {
  const [state, action] = useFormState(handleForm, {
    potato: 1,
  } as any);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password</h2>
      </div>

      <form className="flex flex-col gap-3" action={action}>
        <FormInput
          required
          name="email"
          type="email"
          errors={[]}
          placeholder="Email"
        />
        <FormInput
          required
          type="password"
          name="password"
          errors={state?.errors ?? []}
          placeholder="Password"
        />
        <FormButton text="Log in" />
      </form>

      <SocialLogin />
    </div>
  );
};

export default LoginPage;
