import Image from "next/image";
import VerifyEmailImage1 from "../../public/assets/VerifyEmail-1.png";
import VerifyEmailImage2 from "../../public/assets/VerifyEmail-2.png";
import SecondryButton from "./SecondryButton";
import TertiaryButton from "./TertiaryButton";
function VerifyEmail() {
  return (
    <div>
      <h2 className="text-center font-heading text-2xl font-bold py-8 px-5">
        Verify your email to secure your account
      </h2>
      <div className="flex h-52 w-full flex-col justify-center items-center bg-[url('../public/assets/VerifyEmail-1.png')] bg-no-repeat bg-center">
        {/* <Image src={VerifyEmailImage1} /> */}
        <Image src={VerifyEmailImage2} />
      </div>
      <p className="text-center font-text text-base mx-4  font-medium">
        We just sent you a verification code. Check your spam folder if you
        don't see it in your inbox.
      </p>
      <form>
        <p className="text-left font-subHeading text-2xl font-bold my-2 px-4">
          Verification Code
        </p>
        <input
          type="text"
          name="lastName"
          className="w-[300px] bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50  py-2 px-4 rounded-md mx-4"
        />
        <div className="flex flex-col items-center justify-center">
          <SecondryButton Title="Verify" />
          <TertiaryButton Title="Resend Code" />
        </div>
      </form>
      <div className="flex justify-between items-center px-5 py-5">
        <p className="font-text text-md font-bold">Change Email</p>
        <p className="font-text text-md font-bold">Skip for now</p>
      </div>
    </div>
  );
}

export default VerifyEmail;
