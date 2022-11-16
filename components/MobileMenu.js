import { useState } from "react";
import logo2 from "../public/assets/logo-2.png";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
function MobileMenu() {
  return (
    <div className="text-center flex flex-col sm:hidden bg-darkColor bg-opacity-80 absolute w-[100%] z-40">
      <div className="self-start">
        <Image src={logo2} height={80} width={100} />
      </div>
      <form className="flex items-center justify-center w-full pl-7 sm:w-[600px]">
        <input
          type="email"
          placeholder="Enter your postcode/Zip code"
          className="h-10 p-5 w-full my-4 rounded-md  "
        />
        <button>
          <BiSearch className="h-6 w-6 text-secondaryColor relative right-8 " />
        </button>
      </form>
      <nav>
        <ul>
          <li className="text-lightColor text-start font-subHeading text-xl  font-bold py-3 ml-5">
            Sign In / Sign Up
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            Book A Cleaner
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            Inbox
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            Your Profile
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            Register As A Cleaner
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            Your Booking History
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            Settings
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            FAQ's
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            Our Blog
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            Log Out
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
