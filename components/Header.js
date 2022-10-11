import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { color } from "../styles/global.css";
import logo from "../public/assets/logo.png";
import Button from "./Button";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
const Header = () => {
  let Links = [
    { name: "Our Guarantee", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Book A Cleaner", link: "/" },
    { name: "Blogs", link: "/" },
    { name: "Contact Us", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log("The Sate is", open);
  return (
    <>
      <nav className="absolute w-full flex flex-wrap items-center justify-between h-18 p-6 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <Image src={logo} height={65} width={65} />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <HiMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow  items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col px-5 lg:flex-row list-none border-2 border-primaryColor w-[39rem] justify-between  lg:ml-auto">
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
      </nav>
    </>
  );
};

export default Header;
