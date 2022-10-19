import Image from "next/image";
import logo from "../public/assets/Mobile-logo.png";
import twitter from "../public/assets/twitter.png";
import linkedin from "../public/assets/linkedin.png";
import instagram from "../public/assets/instagram.png";
import mastercard from "../public/assets/mastercard.png";
import visacard from "../public/assets/visacard.png";
import americancard from "../public/assets/americancard.png";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="relative bottom-0 left-0 right-0 w-[100%] flex flex-col items-start bg-primaryColor py-5 px-3">
        <div className="flex items-start flex-col sm:flex-row sm:items-center lg:w-full">
          <div className=" flex flex-col w-full  text-lightColor items-start md:self-start lg:pr-10">
            <Image src={logo} width={100} height={80} />
            <p className="text-lightColor font-text font-light w-full text-sm 2xl:w-[18rem] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
              lacinia pellentesque.
            </p>
          </div>
          <div className="flex flex-col text-lightColor md:self-start w-full items-start ">
            <h1 className="text-lg font-subHeading font-bold">Services</h1>
            <div className="flex flex-col">
              <span className="mt-2 font-light text-sm">
                <Link href="#">Kitchen Cleaning</Link>
              </span>
              <span className="mt-2 font-light">
                <Link href="#">Bathroom Cleaning</Link>
              </span>
              <span className="mt-2 font-light text-sm">
                <Link href="#">Living Area Cleaning</Link>
              </span>
              <span className="mt-2 font-light text-sm">
                <Link href="#">Bedroom Cleaning</Link>
              </span>
            </div>
          </div>
          <div className="flex flex-col text-lightColor md:self-start w-full ">
            <h1 className="text-lg font-subHeading font-bold">Explore</h1>
            <div className="flex flex-col">
              <span className="mt-2 font-light text-sm">
                <Link href="#">Our Guarantee</Link>
              </span>
              <span className="mt-2 font-light text-sm">
                <Link href="#">Book A Cleaner</Link>
              </span>
              <span className="mt-2 font-light text-sm">
                <Link href="#">How It Works</Link>
              </span>
              <span className="mt-2 font-light text-sm">
                <Link href="#">FAQs</Link>
              </span>
              <span className="mt-2 font-light text-sm">
                <Link href="#">News</Link>
              </span>
            </div>
          </div>
          <div className="flex flex-col text-lightColor w-full items-start ">
            <h1 className="text-lg font-subHeading font-bold">Contact US</h1>
            <div className="flex flex-col">
              <span className="mt-2 font-light text-sm">
                <Link href="#">United States</Link>
              </span>
              <span className="mt-2 font-light text-sm">
                <Link href="#">Email: info@mycleanhouse.com</Link>
              </span>
              <span className="mt-2 font-light text-sm">
                <Link href="#">Mobile: +1 918 8877665</Link>
              </span>
            </div>
            <div className="social mt-2 sm:mt-1">
              <p className="font-subHeading font-light text-sm md:mt-3">
                Follow us on social media
              </p>
              <div className="pt-2 flex justify-between sm:pt-1">
                <Link href="#">
                  <Image src={linkedin}></Image>
                </Link>
                <Link href="#">
                  <Image src={instagram}></Image>
                </Link>
                <Link href="#">
                  <Image src={twitter}></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-lightColor mt-5 font-bold w-full" />
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="bottom text-lightColor flex sm:w-[50%] sm:text-sm mt-5">
            <div className="cards flex items-center justify-between sm:justify-start h-8 w-[50%]">
              <span className="mx-2">
                <Image src={mastercard}></Image>
              </span>
              <span className="mx-2">
                <Image src={visacard}></Image>
              </span>
              <span className="mx-2">
                <Image src={americancard}></Image>
              </span>
            </div>
          </div>
          <div className="copyrigh font-text font-light sm:w-[50%] sm:text-right text-sm mt-3 text-lightColor">
            copyright 2022 my clean house
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
