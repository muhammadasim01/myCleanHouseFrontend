import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import { color } from "../styles/global.css";
const Header = () => {
  return (
    <>
      <div className="flex justify-between px-[6rem] mx-[5rem] my-[1.2rem] items-center">
        <figure>logo</figure>
        <div className="w-[65rem] flex justify-evenly items-center">
          <Link href="/">Our Guarantee</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Book A Cleaner</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">Contact Us</Link>
          <PrimaryButton
            text="Login"
            bgColor={"bg-accentColor"}
            textColor={"text-lightColor"}
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
