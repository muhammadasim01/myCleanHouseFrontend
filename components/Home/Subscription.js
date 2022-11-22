import PrimaryButton from "./PrimaryButton";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useState } from "react";
function Subscription() {
  const [inputValue, setInputValue] = useState("");
  const subscriptionHandler = (e) => {
    e.preventDefault();
    console.log("The Email is:", inputValue);
    setInputValue("");
  };
  return (
    <div className="flex flex-col items-center justify-center bg-darkColor p-5 py-10 relative">
      <MdOutlineAlternateEmail className="text-accentColor opacity-40 text-8xl absolute top-0 right-0 md:right-10 xl:right-20" />
      <h2 className="text-center text-lightColor text-3xl font-subHeading font-medium leading-10">
        Subscribe to our newsletter{" "}
      </h2>
      <p className="text-center font-text text-lg font-normal leading-7 py-3 px-3 md:w-[781px] text-lightColor">
        Want to stay updated on My Clean House latest news, offers, and
        promotions? Subscribe to our newsletter! You can opt out of receiving
        future communications from us at any time by unsubscribing from
        promotional emails.
      </p>
      <form
        onSubmit={subscriptionHandler}
        className="flex flex-col py-2 items-center w-full sm:w-[600px] md:flex-row lg:w-[800px]"
      >
        <input
          type="email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Your email"
          className="h-10 p-5 w-full my-4 rounded-md md:py-5 md:ml-20"
        />
        <PrimaryButton
          customCode={"md:relative md:right-24 md:h-[34px] lg:right-28"}
          action={subscriptionHandler}
          text="Subscribe"
          bgColor={"bg-secondaryColor"}
          textColor={"text-lightColor"}
        />
      </form>
    </div>
  );
}

export default Subscription;
