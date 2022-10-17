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
      <footer className="flex flex-col items-start bg-primaryColor py-5 px-3">
        <div className="  flex items-start 2xl:justify-between border-4 border-secondaryColor  flex-col 2xl:flex-row xl:flex-row md:flex-row lg:flex-row 2xl:p-[2rem] xl:justify-between md:justify-between justify-between h-[44rem] md:h-[15rem]">
          <div className=" flex flex-col w-full border-4 border-darkColor  text-lightColor items-start md:self-start">
            <Image src={logo} />
            <p className="text-lightColor font-text font-light w-full text-sm 2xl:w-[18rem] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
              lacinia pellentesque.
            </p>
          </div>
          <div className="flex flex-col text-lightColor  justify-between md:self-start w-full items-start ">
            <h1 className="text-lg font-bold mb-1">services</h1>
            <div className="flex flex-col">
              <Link className="my-20" href="#">
                Kitchen Cleaning
              </Link>
              <Link href="#">Bathroom Cleaning</Link>
              <Link href="#">Living Area Cleaning</Link>
              <Link href="#">Bedroom Cleaning</Link>
            </div>
          </div>
          <div className="flex flex-col text-lightColor  justify-between md:self-start w-full ">
            <h1 className="text-lg font-bold mb-3">explore</h1>
            <div className="flex flex-col">
              <Link href="#">Our Guarantee</Link>
              <Link href="#">Book A Cleaner</Link>
              <Link href="#">How It Works</Link>
              <Link href="#">FAQs</Link>
              <Link href="#">News</Link>
            </div>
          </div>
          <div className="flex flex-col text-lightColor  justify-between md:self-start w-full items-start ">
            <h1 className="text-lg font-bold mb-3">contact us</h1>
            <div className="flex flex-col">
              <Link href="#">United States</Link>
              <Link href="#">Email: info@mycleanhouse.com</Link>
              <Link href="#">Mobile: +1 918 8877665</Link>
            </div>
            <div className="social">
              <p>Follow us on social media</p>
              <div>
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
        <hr className="text-lightColor mt-3" />
        <div className="bottom text-lightColor flex justify-between w-[100%] sm:text-sm mt-5">
          <div className="cards">
            <Image src={mastercard}></Image>
            <Image src={visacard}></Image>
            <Image src={americancard}></Image>
          </div>
          <div className="copyright">copyright 2022 my clean house</div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
