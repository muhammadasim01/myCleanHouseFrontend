import { useState } from "react";
import { GiUsaFlag } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Flag1 from "../../public/assets/USA_Flag.png";
import Flag2 from "../../public/assets/CANADA_Flag.png";
import Image from "next/image";
import GetAQuoteForm1 from "./GetAQuoteForm1";
import GetAQuoteForm2 from "./GetAQuoteForm2";
import GetAQuoteForm3 from "./GetAQuoteForm3";
import GetAQuoteForm4 from "./GetAQuoteForm4";
function GetAQuoteForm() {
  const [toggle, setToggle] = useState({
    bookingInfo: true,
    date: false,
    address: false,
    payment: false,
  });
  const [showDropDown, setShowDropDown] = useState(false);
  const [isCanada, setIsCanada] = useState(false);
  const bookingInfo = () => {
    console.log("Your booking information");
    setToggle({
      bookingInfo: true,
      date: false,
      address: false,
      payment: false,
    });
  };
  const date = () => {
    setToggle({
      bookingInfo: false,
      date: true,
      address: false,
      payment: false,
    });
  };
  const address = () => {
    setToggle({
      bookingInfo: false,
      date: false,
      address: true,
      payment: false,
    });
  };
  const payment = () => {
    setToggle({
      bookingInfo: false,
      date: false,
      address: false,
      payment: true,
    });
  };
  return (
    <div className="border-2 h-auto">
      <div className=" absolute right-0">
        <div className="h-[80px] w-[70px] text-right ">
          <div
            className="w-[70px] text-center rounded-lg flex justify-center items-center cursor-pointer"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            {isCanada ? (
              <>
                <Image src={Flag1} width="20" height="15" /> <span>$0</span>
              </>
            ) : (
              <>
                <Image src={Flag2} width="20" height="15" /> <span>$0</span>
              </>
            )}
            <MdKeyboardArrowDown />
          </div>

          {showDropDown && (
            <div className=" absolute  w-[70px] z-10">
              <div
                className="text-darkColor bg-secondaryColor bg-opacity-10  block text-center rounded-lg cursor-pointer"
                onClick={() => {
                  setIsCanada(true);
                  setShowDropDown(false);
                }}
              >
                <Image src={Flag1} width="20" height="15" /> $0
              </div>

              <div
                className="text-darkColor  block text-center rounded-lg cursor-pointer"
                onClick={() => {
                  setIsCanada(false);
                  setShowDropDown(false);
                }}
              >
                <Image src={Flag2} width="20" height="15" /> $0
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full mt-11">
        <h2 className="font-heading  text-3xl font-bold py-2 px-4">
          Get Your Quote
        </h2>
        <div className="flex h-10  border-2 border-secondaryColor px-1 items-center bg-secondaryColor bg-opacity-10 rounded-lg ">
          <button
            onClick={bookingInfo}
            className="font-text text-[10px] font-extrabold text-darkColor flex items-center w-[34%]"
          >
            <p
              className={`h-2 w-2 border-2 border-secondaryColor ${
                toggle.bookingInfo && "bg-secondaryColor"
              } rounded-full mx-[3px]`}
            ></p>
            Your Booking Info
          </button>
          <button
            onClick={date}
            className="font-text text-[10px] font-bold text-darkColor flex items-center w[22%]"
          >
            <p
              className={`h-2 w-2 border-2 border-secondaryColor ${
                toggle.date && "bg-secondaryColor"
              } rounded-full mx-1`}
            ></p>
            Date/Time
          </button>
          <button
            onClick={address}
            className="font-text text-[10px] font-bold text-darkColor flex items-center w-[22%]"
          >
            <p
              className={`h-2 w-2 border-2 border-secondaryColor ${
                toggle.address && "bg-secondaryColor"
              }  rounded-full mx-1`}
            ></p>
            Address
          </button>
          <button
            onClick={payment}
            className="font-text text-[10px] font-bold text-darkColor flex items-center w-[22%]"
          >
            <p
              className={`h-2 w-2 border-2 border-secondaryColor ${
                toggle.payment && "bg-secondaryColor"
              } rounded-full mx-1`}
            ></p>
            Payment
          </button>
        </div>
      </div>
      {toggle.bookingInfo && <GetAQuoteForm1 />}
      {toggle.date && <GetAQuoteForm2 />}
      {toggle.address && <GetAQuoteForm3 />}
      {toggle.payment && <GetAQuoteForm4 />}
    </div>
  );
}

export default GetAQuoteForm;
