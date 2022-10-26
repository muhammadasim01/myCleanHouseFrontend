import PrimaryButton from "./PrimaryButton";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import SecondryButton from "./SecondryButton";
function SignIn() {
  return (
    <div className="flex flex-col justify-between items-center h-[800px]">
      <PrimaryButton
        logo={<FcGoogle />}
        Title="Continue with Google"
        customCode="bg-[#4285F4]"
        bgColor="bg-lightColor"
      />
      <PrimaryButton
        logo={<BsFacebook />}
        Title="Continue with Facebook"
        customCode="bg-[#3B5998]"
      />
      <PrimaryButton
        logo={<BsApple />}
        Title="Continue with Apple"
        customCode="bg-[#000000]"
      />
      <p className="w-full flex items-center justify-center">
        <span className="border-b-2 w-14 mr-3 text-[#A9A9A9] "></span>
        <span className="mb-1 font-text text-sm font-light">
          or continue with email
        </span>
        <span className="border-b-2 w-14 ml-3 text-[#A9A9A9]"></span>{" "}
      </p>
      <form className="w-full flex flex-col justify-center px-4 pt-5">
        <p className="text-left font-subHeading text-2xl font-bold my-2">
          Email
        </p>
        <input type="email" className="bg-accentColor py-2 px-4 rounded-md" />
        <p className="text-left font-subHeading text-2xl font-bold my-2">
          Password
        </p>
        <input
          type="password"
          className="bg-accentColor py-2 px-4 rounded-md"
        />
        <p className="font-text text-base font-normal mt-5">
          Forgot your password?
        </p>
        <div className="flex items-center justify-center">
          <SecondryButton Title="Sign In" />
        </div>
      </form>
      <p className="text-center px-5 pb-5 font-text text-base font-semibold">
        By signing in, I agree to My Clean House{" "}
        <span className="text-primaryColor">Terms of Services </span> and{" "}
        <span className="text-primaryColor mr-2">Privacy</span>
        Policy, confirm that I am 18 years of age or older, and concent to
        receiving email communication.
      </p>
    </div>
  );
}

export default SignIn;
