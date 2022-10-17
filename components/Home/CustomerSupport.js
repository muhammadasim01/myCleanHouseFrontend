import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import customersupportImage from "../../public/assets/customer-support.png";
function CustomerSupport() {
  return (
    <div className="flex flex-col px-5 my-10 items-center justify-center p-5 sm:flex-row sm:h-[450px] md:[550px]">
      <div className="sm:h-[430px] sm:flex sm:flex-col  sm:justify-center sm:items-center sm:w-[50%] md:my-40 lg:px-14">
        <h2 className="text-center text-lg font-bold text-darkColor p-3 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Customer Support
        </h2>
        <p className="text-sm font-medium text-center leading-5 text-darkColor sm:text-center sm:leading-4 md:px-10 lg:text-base">
          We are here to answer any of your questions or concerns. You contact
          our customer service team 7 days a week via our customer service form
          <span className="text-secondaryColor pl-1">here</span>.
        </p>
        <p className="text-sm pt-4 md:pt-2 font-medium text-center leading-5  text-darkColor sm:text-center sm:leading-4 md:px-10 lg:text-base">
          In order to further facilitate communication, the company has made it
          possible to contact your cleaner directly through your online account.
          You can contact your cleaner via text, our phone portal or video.
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
      <div className="pt-10 sm:w-[50%] lg:flex lg:items-center lg:justify-center lg:p-20 xl:p-30">
        <Image src={customersupportImage} />
      </div>
    </div>
  );
}

export default CustomerSupport;
