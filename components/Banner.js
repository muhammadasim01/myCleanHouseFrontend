import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import BannerMain from "../public/assets/BannerMain.png";
const Banner = () => {
  return (
    <div className="bg-[url('../public/assets/banner.png')] h-[825px] w-[100vw] bg-cover">
      <section className="text-lightColor relative top-[10rem] left-[16rem] flex items-center">
        <div className="left">
          <h1 className="text-[4rem] font-medium">
            Book a local cleaner in your area
          </h1>
          <p className="text-[2rem] w-[39rem]">
            Rated 5 star cleaners. Pay and book online. GPS tracking when your
            cleaner is on route.
          </p>
          <input
            type="text"
            placeholder="Enter your postcode"
            className="w-[607px] h-[47.44px] rounded-md"
          />
          <PrimaryButton
            text="search"
            bgColor={"bg-secondaryColor"}
            height={"h-[48.48px]"}
            custom={"relative right-[8.3rem]"}
          />
        </div>
        <div className="right">
          <figure>
            <Image src={BannerMain}></Image>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Banner;
