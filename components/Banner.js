import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import BannerMain from "../public/assets/BannerMain.png";
import { BiSearch } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
const Banner = () => {
  return (
    <>
      <div className="bg-[url('../public/assets/banner.png')] items-center justify-center h-[616px]  sm:h-[780px] w-[100vw] md:h-[700px] bg-center md:bg-center lg:bg-cover xl:bg:contain 2xl:bg:contain xl-h-[500px] 2xl:h-[800px]">
        <div className="flex flex-row items-center justify-center pt-[9rem] md:pt-[15rem] lg:pt-[10rem] xl:pt-[7rem]">
          <div className="flex flex-col">
            <span className="flex self-start px-7 pb-5">
              <AiTwotoneStar className="text-[#FFCE31] h-5 w-5" />
              <AiTwotoneStar className="text-[#FFCE31] h-5 w-5" />
              <AiTwotoneStar className="text-[#FFCE31] h-5 w-5" />
              <AiTwotoneStar className="text-[#FFCE31] h-5 w-5" />
              <AiTwotoneStar className="text-[#FFCE31] h-5 w-5" />
            </span>
            <h1
              className="font-heading text-lightColor text-3xl font-bold px-7"
              z
            >
              Book a local cleaner in your area
            </h1>
            <p className="text-lightColor font-text text-lg font-medium py-5 px-7">
              Rated 5 star cleaners. Pay and book online. GPS tracking when your
              cleaner is on route.{" "}
            </p>
            <form className="flex items-center justify-center w-full pl-7 sm:w-[600px]">
              <input
                type="email"
                placeholder="Enter your postcode"
                className="h-10 p-5 w-full my-4 rounded-md  "
              />
              <button>
                <BiSearch className="h-6 w-6 text-secondaryColor relative right-10 " />
              </button>
            </form>
          </div>
          <div className="hidden lg:block lg:pr-[2rem] ">
            <Image src={BannerMain}></Image>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
