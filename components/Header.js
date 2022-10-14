import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { color } from "../styles/global.css";
import logo from "../public/assets/logo.png";
import mobileLogo from "../public/assets/logo-mobile.png";
import Button from "./Button";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  let Links = [
    { name: "Our Guarantee", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Book A Cleaner", link: "/" },
    { name: "Blogs", link: "/" },
    { name: "Contact Us", link: "/" },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log("The State is", navbarOpen);
  return (
    <>
      <div className="absolute w-full flex justify-between px-2 py-3 ">
        <Image src={mobileLogo} className="z-50" />
        <button
          className="z-50  text-lightColor "
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <MdClose className="h-7 w-10 sm:hidden " />
          ) : (
            <HiMenu className="h-7 w-10 sm:hidden " />
          )}
        </button>
        <div className="hidden sm:block px-5 h-auto w-[80%] lg:w-[85%] sm:w-[60rem] lg-[70%] sm:text-xs text-lightColor sm:py-2">
          <ul className="w-full sm:flex sm:mx-4  sm:justify-between sm:items-center">
            <li className="font-text text-base font-medium sm:text-xs  md:text-sm md:font-medium lg:text-md">
              Our Guarantee
            </li>
            <li className="font-text text-base font-medium sm:text-xs  md:text-sm md:font-medium lg:text-lg ">
              About Us
            </li>
            <li className="font-text text-base font-medium sm:text-xs  md:text-sm md:font-medium lg:text-lg ">
              Book A Cleaner
            </li>
            <li className="font-text text-base font-medium sm:text-xs  md:text-sm md:font-medium lg:text-lg ">
              Blogs
            </li>
            <li className="font-text text-base font-medium sm:text-xs  md:text-sm md:font-medium lg:text-lg ">
              Contact Us
            </li>
            <PrimaryButton
              text="Login"
              bgColor={"bg-lightColor"}
              textColor={"text-primaryColor"}
              customCode={"sm:w-[5rem] sm:h-[2rem] lg:w-[6rem] lg:h-[2.3rem]"}
            />
            <PrimaryButton
              text="Register"
              bgColor={"bg-primaryColor"}
              textColor={"text-lightColor"}
              customCode={"sm:w-[5rem] sm:h-[2rem] lg:w-[6rem] lg:h-[2.3rem]"}
            />
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <div className="text-center sm:hidden bg-primaryColor absolute w-full ">
          <ul className=" h-52 py-3  flex flex-col justify-evenly items-center pt-[5rem]  font-heading text-xl font-normal text-lightColor">
            <li className="font-text text-base font-medium sm:text-xs">
              Our Guarantee
            </li>
            <li className="font-text text-base font-medium sm:text-xs">
              About Us
            </li>
            <li className="font-text text-base font-medium sm:text-xs">
              Profile
            </li>
            <li className="font-text text-base font-medium sm:text-xs">Chat</li>
          </ul>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </>
  );
};

export default Header;
{
  /* <nav className="absolute bg-primaryColor w-full h-14">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <Image src={logo} height={50} width={50} />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <AiOutlineClose className="text-lightColor" />
              ) : (
                <HiMenu className="text-lightColor" />
              )}
            </button>
          </div>
          <div
            className={
              "border-4 border-secondaryColor lg:flex flex-grow  items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex bg-secondaryColor flex-col px-5 lg:flex-row list-none border-2 border-primaryColor w-[39rem] justify-between  lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  <span className="ml-2 fab fa-facebook-square font-popins font-medium text-lg leading-lg text-lightColor opacity-75">
                    Our Guarantee
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  <span className="ml-2 fab fa-twitter text-lg font-popins font-medium leading-lg text-lightColor opacity-75">
                    About Us
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  <span className="ml-2 fab fa-pinterest text-lg font-popins font-medium leading-lg text-lightColor opacity-75">
                    Book A Cleaner
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  <span className="ml-2 fab fa-pinterest text-lg font-popins font-medium leading-lg text-lightColor opacity-75">
                    Blogs
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  <span className="ml-2 fab fa-pinterest text-lg font-popins font-medium leading-lg text-lightColor opacity-75">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
            <div className="pl-8">
              <PrimaryButton
                text="Login"
                bgColor={"bg-lightColor"}
                textColor={"text-primaryColor"}
              />
              <PrimaryButton
                text="Register"
                bgColor={"bg-primaryColor"}
                textColor={"text-lightColor"}
              />
            </div>
          </div>
        </div>
      </nav> */
}
