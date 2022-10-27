import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function SignInSignUp() {
  const [isSignIn, setIsSignIn] = useState(true);
  console.log("The State1 is", isSignIn);
  const handleSignInButton = () => {
    if (!isSignIn) {
      setIsSignIn(true);
    }
  };
  const handleSignUpButton = () => {
    if (isSignIn) {
      setIsSignIn(false);
    }
  };
  return (
    <div className="flex flex-col h-auto justify-between items-center">
      <h2 className="font-heading text-3xl font-bold py-8 px-5">
        Sign In or Sign Up
      </h2>
      <div className="w-48 flex justify-between  mb-5 bg-accentColor rounded-full">
        <button
          // onClick={() => setIsSignIn(!false)}
          className={`font-text text-lightColor text-base font-semibold w-[50%] py-1 rounded-full ${
            isSignIn && "bg-darkColor"
          }`}
          onClick={handleSignInButton}
        >
          Sign In
        </button>
        <button
          // onClick={() => setIsSignUp(!false) && setIsSignIn(false)}
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
