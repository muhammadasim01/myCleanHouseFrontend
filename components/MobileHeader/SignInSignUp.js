import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function SignInSignUp() {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignInButton = () => {
    !isSignIn && setIsSignIn(true);
  };
  const handleSignUpButton = () => {
    isSignIn && setIsSignIn(false);
  };
  return (
    <div className="flex flex-col h-auto justify-between items-center">
      <h2 className="font-heading text-3xl font-bold py-8 px-5">
        Sign In or Sign Up
      </h2>
      <div className="w-48 flex justify-between  mb-5 bg-accentColor rounded-full">
        <button
          className={`font-text text-lightColor text-base font-semibold w-[50%] py-1 rounded-full ${
            isSignIn && "bg-darkColor"
          }`}
          onClick={handleSignInButton}
        >
          Sign In
        </button>
        <button
          className={`font-text text-lightColor text-base font-semibold w-[50%] py-1 rounded-full ${
            !isSignIn && "bg-darkColor"
          }`}
          onClick={handleSignUpButton}
        >
          Sign Up
        </button>
      </div>
      {isSignIn ? <SignIn /> : <SignUp />}
    </div>
  );
}

export default SignInSignUp;
