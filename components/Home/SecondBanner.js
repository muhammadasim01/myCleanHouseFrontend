import Image from "next/image";
import Banner from "../../public/assets/Banner-2.png";
function SecondBanner() {
  return (
    <div className="py-10">
      <div className="text-center p-5">
        <h2 className="text-black text-4xl font-bold">
          House Cleaning Services that Save You Time and Money!
        </h2>
        <p className="text-center text-xl font-normal leading-6 mt-5 lg:px-20">
          At My Clean House, we understand that your time is valuable. That's
          why we offer a house cleaning service that is convenient, reliable,
          and affordable. We specialize in providing top-quality house cleaners
          to busy families and individuals who don't have the time or energy to
          clean their homes themselves.
        </p>
      </div>
      <span className="flex items-center justify-center w-full px-5 border-b-2 border-b-primaryColor">
        <Image src={Banner} />
      </span>
    </div>
  );
}

export default SecondBanner;
