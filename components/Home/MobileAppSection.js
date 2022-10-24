import PrimaryButton from "./PrimaryButton";
import phoneImage from "../../public/assets/Mobile-app.png";
import Image from "next/image";
import PlayStoreIcon from "../../public/assets/playStore-icon.png";
import AppStoreIcon from "../../public/assets/appStore-icon.png";
function MobileAppSection() {
  return (
    <div className=" border-primaryColor flex flex-col-reverse items-center justify-center sm:flex sm:flex-row md:px-10">
      <div className="flex justify-center items-center pb-0 sm:w-[50%] lg:flex lg:items-center lg:justify-center">
        <Image src={phoneImage} height={450} width={350} />
      </div>
      <div className=" border-secondaryColor py-10  sm:flex sm:flex-col  sm:justify-center md:items-center sm:w-[50%]">
        <h2 className="text-center font-subHeading text-3xl font-bold text-darkColor p-3 md:text-lg sm:text-left lg:text-xl xl:text-2xl 2xl:text-3xl">
          Track your cleaner
        </h2>
        <p className="text-xl font-ligh font-normal text-center leading-6 px-4 text-darkColor sm:text-left md:text-left md:px-10 lg:px-28 lg:text-base">
          You can know when your cleaner is on route by using our GSP tracking
          system when the cleaner logs into the app. This way you will know when
          your cleaner will arrive and leave your premises.
        </p>
        <div className="flex flex-col items-center p-5">
          <button className="text-center mt-2 font-text text-sm font-bold text-secondaryColor bg-lightColor py-1 px-4 rounded-md border-2 border-secondaryColor">
            Download App
          </button>
          <div className="mt-5 flex justify-between w-44">
            <Image src={PlayStoreIcon} />
            <Image src={AppStoreIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAppSection;
