import PrimaryButton from "./PrimaryButton";

function Subscription() {
  return (
    <div className="flex flex-col items-center justify-center bg-darkColor p-5 py-10">
      <h2 className="text-lightColor text-[23px] lg:text-[30px] font-heading font-bold">
        Subscribe to our newsletter{" "}
      </h2>
      <p className="text-center font-text text-base font-normal py-3 px-3 md:w-[781px] text-lightColor">
        Want to stay updated on My Clean House latest news, offers, and
        promotions? Subscribe to our newsletter! You can opt out of receiving
        future communications from us at any time by unsubscribing from
        promotional emails.
      </p>
      <form className="flex flex-col py-2 items-center w-full sm:w-[600px] md:flex-row lg:w-[800px]">
        <input
          type="email"
          placeholder="Enter Your email"
          className="h-10 p-5 w-full my-4 rounded-md md:py-5 md:ml-20"
        />
        <PrimaryButton
          customCode={"md:relative md:right-24 md:h-[34px] lg:right-28"}
          text="Subscribe"
          bgColor={"bg-secondaryColor"}
          textColor={"text-lightColor"}
        />
      </form>
    </div>
  );
}

export default Subscription;
