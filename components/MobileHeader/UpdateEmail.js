import Image from "next/image";
import VerifyEmailImage1 from "../../public/assets/UpdateEmail-1.png";
import VerifyEmailImage2 from "../../public/assets/UpdateEmail-2.png";
import SecondryButton from "./SecondryButton";
import TertiaryButton from "./TertiaryButton";
function UpdateEmail() {
  return (
    <div>
      <h2 className="text-center font-heading text-2xl font-bold py-8 px-5">
        Update your email address
      </h2>
      <div className="flex h-52 w-full flex-col justify-center items-center bg-[url('../public/assets/VerifyEmail-1.png')] bg-no-repeat bg-center">
        {/* <Image src={VerifyEmailImage1} /> */}
        <Image src={VerifyEmailImage2} />
      </div>
      <p className="font-text text-base mx-4 text-center font-medium leading-6 ">
        We will send a new verification link to this email. After verifying ,
        you will be able to log in to your account using your original password.
      </p>
      <form>
        <p className="text-left font-subHeading text-2xl font-bold my-2 px-4">
          Email Address
        </p>
        <input
          type="text"
          name="lastName"
          placeholder="Check your email for code"
          className="w-[300px]  bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50  py-2 px-4 rounded-md mx-4"
        />
        <div className="flex flex-col items-center justify-center pb-8">
          <SecondryButton Title="Save Email" />
          <TertiaryButton Title="Cancel" />
        </div>
      </form>
    </div>
  );
}

export default UpdateEmail;
