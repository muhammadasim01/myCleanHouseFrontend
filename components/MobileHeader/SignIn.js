import PrimaryButton from "./PrimaryButton";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import SecondryButton from "./SecondryButton";
import { useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import auth from "../../firebase";
function SignIn() {
  const [password, setPassword] = useState(false);
  const Googleprovider = new GoogleAuthProvider();
  const Facebookprovider = new FacebookAuthProvider();

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(!password);
  };

  const SignInWithGoogle = () => {
    signInWithPopup(auth, Googleprovider)
      .then(({ user }) => {
        console.log(user);
      })
      .catch((error) => alert(error.message));
  };

  const SignInWithFacebook = () => {
    signInWithPopup(auth, Facebookprovider)
      .then(({ user }) => {
        // The signed-in user info.
        console.log("The user Data is:", user);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(user);
        console.log("The Credentails=", credential);
        const accessToken = credential.accessToken;
        console.log("The Access Token=", accessToken);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log("The Error Code=", errorCode);
        const errorMessage = error.message;
        console.log("The Error Message=", errorMessage);
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log("The Credentails=", credential);

        // ...
      });
  };
  return (
    <div className="flex flex-col justify-between items-center h-[800px]">
      <PrimaryButton
        action={SignInWithGoogle}
        logo={<FcGoogle />}
        Title="Continue with Google"
        customCode="bg-[#4285F4]"
        bgColor="bg-lightColor"
      />
      <PrimaryButton
        action={SignInWithFacebook}
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
        <p className="text-left font-subHeading text-2xl font-bold mx-2 my-2">
          Email
        </p>
        <div className="w-[300px] flex bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-2 border-secondaryColor border-opacity-70 rounded-md mx-2 my-2">
          <input
            type="email"
            name="lastName"
            className="w-[300px] decoration-0 outline-none border-none bg-secondaryColor bg-opacity-10"
          />
        </div>
        <p className="text-left font-subHeading text-2xl font-bold mx-2 my-2">
          Password
        </p>
        <div className="w-[300px] flex bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-2 border-secondaryColor border-opacity-70 rounded-md mx-2 my-2">
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
        <p className="font-text text-base font-normal mx-2 mt-5">
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
