import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function SignInSignUp() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  console.log("The State1 is", isSignIn);
  console.log("The State2 is", isSignUp);
  return (
    <div className="flex flex-col h-auto border-2 justify-between items-center">
      <h2 className="font-heading text-3xl font-bold py-8 px-5">
        Sign In or Sign Up
      </h2>
      <div className="border-2 w-48 flex justify-between px-2 py-1 mb-5 bg-accentColor rounded-full">
        <button
          onClick={() => setIsSignIn(!false)}
          className="font-text text-lightColor text-base font-semibold"
        >
          Sign In
        </button>
        <button
          onClick={() => setIsSignUp(!false) && setIsSignIn(false)}
          className="font-text text-lightColor text-base font-semibold"
        >
          Sign Up
        </button>
      </div>
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
}

export default SignInSignUp;
