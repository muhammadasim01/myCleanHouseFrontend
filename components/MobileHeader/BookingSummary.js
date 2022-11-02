import { useState } from "react";
import { BiGift } from "react-icons/bi";
import { GrFormNext } from "react-icons/gr";
function BookingSummary() {
  const [toggle, setToggle] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
  });
  const handlefirst = () => {
    setToggle({ first: true, second: false, third: false, fourth: false });
  };
  const handlesecond = () => {
    setToggle({ first: false, second: true, third: false, fourth: false });
  };
  const handlethird = () => {
    setToggle({ first: false, second: false, third: true, fourth: false });
  };
  const handlefourth = () => {
    setToggle({ first: false, second: false, third: false, fourth: true });
  };
  return (
    <div className="px-2 py-6">
      <h1 className="font-heading text-3xl font-bold">Booking Summary</h1>
      <div className="border-b-2 w-full py-4 text-[#A9A9A9]"></div>
      <div className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-lg font-normal text-darkColor">
          First Clean
        </div>
        <div className="w-[50%] font-text text-lg font-bold text-right text-darkColor leading-6 mt-2">
          08:30 - 09:00 Tue 28 Oct
        </div>
      </div>
      <div className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-lg font-normal text-darkColor">
          How Often
        </div>
        <div className="w-[50%] font-text text-lg font-bold text-right text-darkColor leading-6">
          Weekly Service
        </div>
      </div>
      <div className="w-full flex items-center justify-between py-2">
        <div className="w-[70%] font-text text-lg font-normal text-darkColor">
          Hours of cleaning
        </div>
        <div className="w-[30%] font-text text-lg font-bold text-right text-darkColor leading-6">
          04.00 Hours
        </div>
      </div>
      <div className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-lg font-normal text-darkColor">
          Extra Tasks
        </div>
        <div className="w-[50%] font-text text-lg font-bold text-right text-darkColor leading-6">
          0.00 Hours
        </div>
      </div>
      <div className="border-b-2 w-full py-4 text-[#A9A9A9]"></div>
      <div className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-lg font-normal text-darkColor">
          04.00 Hours at $17.00/hour
        </div>
        <div className="w-[50%] font-text text-lg font-bold text-right text-darkColor leading-6">
          $68.00
        </div>
      </div>
      <div className="border-b-2 w-full py-4 text-[#A9A9A9]"></div>
      <div className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-lg font-normal text-darkColor">
          Tax
        </div>
        <div className="w-[50%] font-text text-lg font-bold text-right text-darkColor leading-6">
          $12.00
        </div>
      </div>
      <div className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-sm font-normal text-darkColor">
          *tax based on your area/country
        </div>
        <div className="w-[50%] font-text text-sm font-bold text-right text-darkColor leading-6">
          hst 13%
        </div>
      </div>
      <div className="border-b-2 w-full py-4 text-[#A9A9A9]"></div>
      <div className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-lg font-extrabold text-secondaryColor">
          Price
        </div>
        <div className="w-[50%] font-text text-lg font-bold text-right text-darkColor leading-6">
          $80.00
        </div>
      </div>
      <div className="border-b-2 w-full py-2 text-[#A9A9A9]"></div>
      <div className="border-[1px] border-secondaryColor bg-[#6762f01a] py-2 my-5 rounded-lg flex items-center justify-center">
        <p className="font-text text-xl font-bold text-darkColor">
          Edit Booking
        </p>
      </div>
      <div className="border-b-2 w-full text-[#A9A9A9]"></div>
      <div className="w-full flex items-center justify-between py-2">
        <div className="w-[70%] font-text text-lg font-normal text-darkColor">
          Your cleaner's tip
        </div>
        <div className="w-[30%] font-text text-lg font-bold text-right text-darkColor leading-6">
          $
        </div>
      </div>
      <div className="my-4">
        <div className="w-full flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-16 py-1 rounded-full ${
              toggle.first
                ? "bg-secondaryColor text-lightColor"
                : "text-darkColor bg-[#6762f01a]"
            }`}
            onClick={handlefirst}
          >
            15%
          </button>
          <button
            className={`font-text text-base font-semibold w-16 py-1 rounded-full ${
              toggle.second
                ? "bg-secondaryColor text-lightColor"
                : "text-darkColor bg-[#6762f01a]"
            }`}
            onClick={handlesecond}
          >
            20%
          </button>
          <button
            className={`font-text text-base font-semibold w-16 py-1 rounded-full ${
              toggle.third
                ? "bg-secondaryColor text-lightColor"
                : "text-darkColor bg-[#6762f01a]"
            }`}
            onClick={handlethird}
          >
            25%
          </button>
          <button
            className={`font-text text-base font-semibold w-16 py-1 rounded-full ${
              toggle.fourth
                ? "bg-secondaryColor text-lightColor"
                : "text-darkColor bg-[#6762f01a]"
            }`}
            onClick={handlefourth}
          >
            Other
          </button>
        </div>
      </div>
      <p className="w-[100%] font-text text-sm py-4 font-normal text-darkColor">
        100% of your tip goes to the cleaner
      </p>
      <div className="border-b-2 w-full text-[#A9A9A9]"></div>
      <div className="h-10 flex my-3">
        <p>Total $</p>
        <p className="border-b-2  h-5 w-24 ml-2 border-secondaryColor"></p>
      </div>
      <div className="border-b-2 w-full text-[#A9A9A9]"></div>
      <div className="flex justify-between items-center py-3">
        <BiGift />
        <p>Send as a gift</p>
        <GrFormNext />
      </div>
      <div className="border-b-2 w-full text-[#A9A9A9]"></div>
    </div>
  );
}

export default BookingSummary;
