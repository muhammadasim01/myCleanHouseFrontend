import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import contactImage from "../public/assets/contact-cleaner.png";
function ContactCleaner() {
  return (
    <div className=" bg-primaryColor flex flex-col items-center justify-center p-5 sm:flex-row sm:h-[450px] md:[550px]">
      <div className="sm:h-[430px] sm:flex sm:flex-col  sm:justify-center sm:items-center sm:w-[50%] md:my-40 lg:px-14">
        <h2 className="text-center font text-base font-bold text-lightColor p-3 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          How to contact your cleaner
        </h2>
        <p className="text-sm font-normal text-center leading-5 text-lightColor sm:text-center md:px-10 lg:text-base">
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
          />
        </div>
      </div>
      <div className="pt-10 sm:w-[50%] lg:flex lg:items-center lg:justify-center lg:p-20 xl:p-30">
        <Image src={contactImage} />
      </div>
    </div>
  );
}

export default ContactCleaner;
