import PrimaryButton from "./PrimaryButton";
import phoneImage from "../public/assets/Mobile-app.png";
import Image from "next/image";
function MobileAppSection() {
  return (
    <div className=" border-primaryColor flex flex-col-reverse items-center justify-center sm:flex sm:flex-row md:px-10">
      <div className=" border-black pb-0 sm:w-[50%] lg:flex lg:items-center lg:justify-center sm:pt-10 sm:pl-5 sm:pr-5">
        <Image src={phoneImage} height={450} width={350} />
      </div>
      <div className=" border-secondaryColor py-0  sm:flex sm:flex-col  sm:justify-center md:items-center sm:w-[50%]">
        <h2 className="text-center text-xl font-bold text-darkColor p-3 md:text-lg sm:text-left lg:text-xl xl:text-2xl 2xl:text-3xl">
          How to contact your cleaner
        </h2>
        <p className="text-sm font-normal text-center leading-5 px-4 text-darkColor sm:text-left md:text-left md:px-10 lg:px-28 lg:text-base">
          If you have any special requests or need to make a last-minute
          addition, you can send your cleaner a message, call or video directly
          through the app. Keeping your phone numbers private and secure as you
          can use our app to contact your cleaner.{" "}
        </p>
        <div className="text-center p-5">
          <PrimaryButton
            text="Contact Now"
            bgColor={"bg-lightColor"}
            textColor={"text-secondaryColor"}
            border={"border-2"}
          />
        </div>
      </div>
    </div>
  );
}

export default MobileAppSection;
