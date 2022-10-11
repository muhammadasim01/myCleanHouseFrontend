import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { color } from "../styles/global.css";
import logo from "../public/assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center font-lg absolute w-[100vw] m-6">
        <figure>
          <Image src={logo} />
        </figure>
        <div className="w-[75rem] flex justify-evenly items-center text-lightColor">
          <Link href="/">Our Guarantee</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Book A Cleaner</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">Contact Us</Link>
          <PrimaryButton
            text="Login"
            bgColor={"bg-accentColor"}
            textColor={"text-primaryColor"}
          />
          <PrimaryButton
            text="Register"
            bgColor={"bg-primaryColor"}
            textColor={"text-lightColor"}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
