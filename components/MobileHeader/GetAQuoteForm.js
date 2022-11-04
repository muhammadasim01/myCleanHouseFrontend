import { useState } from "react";
import Flag1 from "../../public/assets/USA_Flag.png";
import Flag2 from "../../public/assets/CANADA_Flag.png";
import Test from "./test";
import Test2 from "./Test2";
import Test3 from "./Test3";
import Image from "next/image";
function GetAQuoteForm() {
  const [toggle, setToggle] = useState({
    bookingInfo: true,
    date: false,
    address: false,
    payment: false,
  });
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
    console.log("Your date is");
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
    <div className="border-2 border-primaryColor px-2 h-auto">
      <div className="text-right">
        <select>
          <option value="usa">USA </option>
          <option value="canada">CANADA</option>
        </select>
      </div>
      <div>
        <h2>Get Your Quote</h2>
        <div className="flex bg-lightColor h-10  border-2 border-secondaryColor justify-between items-center">
          <button
            onClick={bookingInfo}
            className="font-text text-xs font-bold text-darkColor"
          >
            Your Booking Info
          </button>
          <button
            onClick={date}
            className="font-text text-xs font-bold text-darkColor"
          >
            Date/Time
          </button>
          <button
            onClick={address}
            className="font-text text-xs font-bold text-darkColor"
          >
            Address
          </button>
          <button
            onClick={payment}
            className="font-text text-xs font-bold text-darkColor"
          >
            Payment
          </button>
        </div>
      </div>
      {toggle.bookingInfo && <Test />}
      {toggle.date && <Test2 />}
      {toggle.address && <Test3 />}
    </div>
  );
}

export default GetAQuoteForm;
