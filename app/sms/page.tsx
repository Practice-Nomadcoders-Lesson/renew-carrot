"use client";

import { useFormState } from "react-dom";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

import { smsLogin } from "./actions";

const SMSLoginPage = () => {
  const [state, dispatch] = useFormState(smsLogin, null);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>

      <form className="flex flex-col gap-3" action={dispatch}>
        <Input required type="text" name="phone" placeholder="Phone number" />
        <Input
          required
          type="number"
          name="token"
          min={100000}
          max={999999}
          placeholder="Verification code"
        />
        <Button text="Verify" />
      </form>
    </div>
  );
};

export default SMSLoginPage;
