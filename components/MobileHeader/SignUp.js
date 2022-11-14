import { useState } from "react";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RiCheckboxBlankLine } from "react-icons/ri";
import PrimaryButton from "./PrimaryButton";
import SecondryButton from "./SecondryButton";
function SignUp() {
  const [password, setPassword] = useState(false);
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(!password);
  };
  return (
    <div className="flex flex-col h-[1300px] items-center justify-between">
      <form className="w-full">
        <div className="flex">
          <div>
            <p className="text-left font-subHeading text-2xl font-bold my-2 px-2">
              First Name
            </p>
            <input
              type="text"
              name="firstName"
              className="w-[140px] bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50  py-2 px-2 rounded-md mx-2"
            />
          </div>
          <div>
            <p className="text-left font-subHeading text-2xl font-bold my-2">
              Last Name
            </p>
            <input
              type="text"
              name="lastName"
              className="w-[140px] bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50  py-2 px-4 rounded-md mx-2"
            />
          </div>
        </div>
        <p className="text-left font-subHeading text-2xl font-bold my-2 px-2">
          Email
        </p>
        <input
          type="text"
          name="lastName"
          className="w-[300px]  bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50  py-2 px-4 rounded-md mx-2"
        />
        <div className="my-4 mx-2">
          <div className="flex justify-between">
            <div className="w-[40%]">
              <p className="text-left font-subHeading text-2xl font-bold my-2 px-2">
                Country
              </p>
              <div className="">
                <select className="border-2 border-secondaryColor border-opacity-70 py-2 bg-secondaryColor bg-opacity-10 rounded-md">
                  <option
                    value="2x a week"
                    className="font-text text-sm text-left"
                  >
                    +1 (CA)
                  </option>
                  <option
                    value="3x a week"
                    className="font-text text-sm text-left"
                  >
                    +2 (CA)
                  </option>
                  <option
                    value="3x a week"
                    className="font-text text-sm text-left"
                  >
                    +3 (CA)
                  </option>
                  <option
                    value="3x a week"
                    className="font-text text-sm text-left"
                  >
                    +4 (CA)
                  </option>
                </select>
              </div>
            </div>
            <div className="w-[55%]">
              <p className="text-left font-subHeading text-2xl font-bold my-2 px-2">
                Mobile
              </p>
              <input
                type="number"
                name=""
                id=""
                className="w-[160px] bg-secondaryColor bg-opacity-10 rounded-md border-2 border-secondaryColor border-opacity-70"
              />
            </div>
          </div>
        </div>
        <p className="text-left font-subHeading text-2xl font-bold my-2 mx-2">
          Password
        </p>
        <div className="w-[300px] flex bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-2 border-secondaryColor border-opacity-70 rounded-md mx-2">
          <input
            type={password ? "text" : "password"}
            name="lastName"
            className="w-[300px] decoration-0 outline-none border-none bg-secondaryColor bg-opacity-10"
          />
          <button
            onClick={handlePassword}
            className="font-subHeading text-lg font-bold mx-2"
          >
            Show
          </button>
        </div>
        <p className="text-left font-subHeading text-2xl font-bold my-2 mx-2">
          How did you hear about us? (Optional)
        </p>
        <input
          type="text"
          name="lastName"
          className="w-[300px] bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50 py-2 px-4 rounded-md mx-2"
        />
        <div className="flex px-2">
          <div className="w-[15%] bg-lightColor flex justify-center pt-5">
            {/* <input
              type="checkbox"
              className="h-7 w-7 mt-5 ml-2 accent-primaryColor"
            /> */}
            <input
              type="checkbox"
              className="h-10 w-10 border-2 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
            />
            {/* <RiCheckboxBlankLine className="h-10 w-10 text-[#E8EDF5] bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50 rounded-md" /> */}
          </div>
          <div className="w-[85%]">
            <p className="font-text text-base font-normal my-4 px-3">
              Yes, keep me updated with new features and promotions. I can
              opt-out at any time.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <SecondryButton Title="Sign Up" />
        </div>
      </form>
      <p className="w-full flex items-center justify-center">
        <span className="border-b-2 w-32 mr-3 text-[#A9A9A9]"></span>
        <span className="mb-1 font-text text-sm font-light">or</span>
        <span className="border-b-2 w-32 ml-3 text-[#A9A9A9]"></span>{" "}
      </p>
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
      <p className="font-text text-base font-normal my-4 px-3">
        By tapping “Sign Up” or “Continue with Google, Facebook, or Apple” you
        agree to My Clean House{" "}
        <span className="text-primaryColor">Terms & Services </span> and{" "}
        <span className="text-primaryColor">Privacy Policy</span>.
      </p>
      <div className="border-b-2 w-72 text-[#A9A9A9]"></div>
      <div className="text-center my-5">
        <p className="font-text text-base font-semibold mt-4 px-3">
          Already have a My Clean House account?
        </p>
        <button className="p-3 text-primaryColor font-subHeading text-xl font-light underline">
          Sign In Now
        </button>
      </div>
    </div>
  );
}

export default SignUp;
