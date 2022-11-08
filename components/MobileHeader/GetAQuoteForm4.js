import Image from "next/image";
import { BsInfoCircle } from "react-icons/bs";
import GpayIcon from "../../public/assets/GPay_logo.png";
import materCard from "../../public/assets/mastercard.png";
import visaCard from "../../public/assets/visacard.png";
import americanCard from "../../public/assets/americancard.png";
import { FcGoogle } from "react-icons/fc";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsPaypal } from "react-icons/bs";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import LargeButton from "./LargeButton";
function GetAQuoteForm4() {
  return (
    <div className="border-2 border-secondaryColor p-4">
      <h2 className="font-subHeading  text-xl font-bold text-left">
        Contact Information
      </h2>
      <div className="flex py-2">
        <BsInfoCircle className="text-secondaryColor text-xl w-[15%]" />
        <p className="w-[85%] font-text text-sm font-normal px-2 leading-5">
          You will only be charged after your clean is completed. You can change
          or cancel this schedule at any time.
        </p>
      </div>
      <form>
        <div className="my-2">
          <p>Card number</p>
          <input
            type="number"
            // placeholder="Enter your Card Number"
            className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
        </div>
        <div className="flex items-center">
          <div className="mb-4 w-[45%] mx-2">
            <p>Expiry date</p>
            <input
              type="date"
              //   placeholder="MM/YY"
              className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
          <div className="mb-4 w-[45%] mx-2">
            <p>CVC</p>
            <input
              type="number"
              placeholder="123"
              className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
        </div>
        <h2 className="font-subHeading  text-xl font-bold text-left">
          Saved Payment Methods
        </h2>
        <div className="flex items-center py-3">
          <p className="border-[2px] border-secondaryColor rounded-md px-2 py-[1px] flex items-center justify-between w-[20%]">
            <FcGoogle />
            Pay
          </p>
          <p className="w-[80%] px-2 font-text text-base font-normal">
            Google Pay
          </p>
        </div>
        <div className="border-b-2 w-full text-[#A9A9A9]"></div>
        <div className="flex items-center py-3">
          <p className="px-2 w-[20%]">
            <BsFillCreditCardFill className="text-2xl text-secondaryColor" />
          </p>
          <p className="w-[80%] px-2 font-text text-base font-normal">
            Credit/Debit Card
          </p>
        </div>
        <div className="border-b-2 w-full text-[#A9A9A9]"></div>
        <div className="flex items-center py-3">
          <p className="px-2 w-[20%]">
            <BsPaypal className="text-2xl text-secondaryColor" />
          </p>
          <p className="w-[80%] px-2 font-text text-base font-normal">PayPal</p>
        </div>
        <div className="border-b-2 w-full text-[#A9A9A9]"></div>
        <div className="flex items-center py-3">
          <p className="w-[18%] border-[2px] border-secondaryColor rounded-md  py-[2px] flex items-center justify-center">
            {/* <BsPaypal className="text-2xl text-secondaryColor" /> */}
            <Image src={materCard} />
          </p>
          <p className="w-[82%] px-2 font-text text-base font-normal">
            Mastercard
          </p>
        </div>
        <div className="flex px-2">
          <div className="w-[15%] bg-lightColor flex justify-center pt-5">
            <RiCheckboxBlankLine className="h-8 w-8 text-[#E8EDF5] bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50 rounded-md" />
          </div>
          <div className="w-[85%]">
            <p className="font-text text-base font-normal my-4 px-3 leading-5">
              I accept the{" "}
              <span className="text-secondaryColor">terms and conditions</span>,
              have read the{" "}
              <span className="text-secondaryColor">privacy policy </span> and
              authorise to change my payment card in accordance with these
              terms.
            </p>
          </div>
        </div>
        <div className="h-[230px] border-2 border-secondaryColor bg-secondaryColor bg-opacity-10 rounded-md">
          <div className="py-2 px-2">
            <h2 className="font-subHeading text  font-bold">Security</h2>
          </div>
          <div>
            <div className="flex">
              <BsFillCreditCardFill className="w-[20%] text-2xl text-secondaryColor" />
              <p className="w-[80%] text-left px-4">
                We accept these cards only
              </p>
            </div>
            <div className="flex">
              <div className="w-[20%]"></div>
              <p className="w-[80%] text-left flex justify-evenly py-2">
                <Image src={materCard} />
                <Image src={visaCard} />
                <Image src={americanCard} />
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-[20%] px-4 py-2">
              <HiOutlineShoppingBag className="text-secondaryColor text-2xl" />
            </div>
            <div className="w-[80%] py-2 px-4">
              <p className="font-text text-sm text-left font-normal leading-5">
                My Clean House uses 256-bit SSL encryption and 3D secure
                authentication to protect your peronal information.
              </p>
            </div>
          </div>
        </div>
        <LargeButton
          Text="Complete"
          customCode="justify-center"
          color="text-lightColor"
          font="font-bold"
        />
      </form>
    </div>
  );
}

export default GetAQuoteForm4;
