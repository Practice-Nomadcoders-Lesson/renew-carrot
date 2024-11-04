import { FormButton } from "@/components/form-btn";
import { FormInput } from "@/components/form-input";

const SMSLoginPage = () => {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>

      <form className="flex flex-col gap-3">
        <FormInput
          required
          type="number"
          name="phoneNumber"
          errors={[]}
          placeholder="Phone number"
        />
        <FormInput
          required
          type="number"
          name="verificationCode"
          errors={[]}
          placeholder="Verification code"
        />
        <FormButton loading={false} text="Verify" />
      </form>
    </div>
  );
};

export default SMSLoginPage;