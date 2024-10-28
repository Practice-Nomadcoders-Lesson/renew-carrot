import { FormButton } from "@/components/form-btn";
import { FormInput } from "@/components/form-input";
import { SocialLogin } from "@/components/social-login";

const LoginPage = () => {
  const handleForm = async (formData: FormData) => {
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("logged in!");
  };

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password</h2>
      </div>

      <form className="flex flex-col gap-3" action={handleForm}>
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
          errors={[]}
          placeholder="Password"
        />
        <FormButton text="Log in" />
      </form>

      <SocialLogin />
    </div>
  );
};

export default LoginPage;
