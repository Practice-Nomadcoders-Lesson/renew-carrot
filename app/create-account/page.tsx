import { FormButton } from "@/components/form-btn";
import { FormInput } from "@/components/form-input";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const CreateAccountPage = () => {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>

      <form className="flex flex-col gap-3">
        <FormInput required type="text" errors={[]} placeholder="Username" />
        <FormInput required type="email" errors={[]} placeholder="Email" />
        <FormInput
          required
          type="password"
          errors={[]}
          placeholder="Password"
        />
        <FormInput
          required
          type="password"
          errors={[]}
          placeholder="Confirm Password"
        />
      </form>
      <FormButton loading={false} text="Create account" />
      <div className="h-px w-full bg-neutral-500" />

      <div>
        <Link
          href="/sms"
          className="primary-btn flex h-10 items-center justify-center gap-2"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
};

export default CreateAccountPage;
