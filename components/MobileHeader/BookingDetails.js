import { useState } from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { BsInfoCircle } from "react-icons/bs";
import LargeButton from "./LargeButton";
function BookingDetails() {
  const [toggle, setToggle] = useState(true);
  const handleChecking = () => {
    !toggle && setToggle(true);
  };
  const handleSavings = () => {
    toggle && setToggle(false);
  };
  return (
    <div className="border-2 border-secondaryColor p-4">
      <GrFormPreviousLink className="text-3xl" />
      <h2 className="font-subHeading  text-2xl font-bold py-2">
        Your Booking Details
      </h2>
      <p className="font-text text-lg font-normal leading-6">
        Enter your bank details to get paid 48 hours after every cleaning job.
      </p>
      <div className="flex py-3">
        <div
          onClick={handleChecking}
          className="flex items-center justify-between w-28"
        >
          <p
            className={`h-3 w-3 border-[3px] rounded-full border-secondaryColor ml-2 ${
              toggle && "bg-secondaryColor"
            }`}
          ></p>
          <p className="font-subHeading text-base font-bold">Checking</p>
        </div>
        <div
          onClick={handleSavings}
          className="flex items-center justify-between w-28 mx-2"
        >
          <p
            className={`h-3 w-3 border-[3px] rounded-full border-secondaryColor ml-4 ${
              !toggle && "bg-secondaryColor"
            }`}
          ></p>
          <p className="font-subHeading text-base font-bold">Savings</p>
        </div>
      </div>
      <form>
        <div className="my-3">
          <p className="font-subHeading text-lg font-bold my-1">Your Name</p>
          <input
            type="text"
            name="firstName"
            className="w-full bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50 py-2 px-2 rounded-md"
          />
        </div>
        <div className="my-3">
          <p className="font-subHeading text-lg font-bold my-1">
            Institution Number
          </p>
          <input
            type="number"
            className="w-full bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50 py-2 px-2 rounded-md"
          />
          <BsInfoCircle />
        </div>
        <div className="my-3">
          <p className="font-subHeading text-lg font-bold my-1">
            Transit Number
          </p>
          <input
            type="number"
            className="w-full bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50 py-2 px-2 rounded-md"
          />
        </div>
        <div className="my-3">
          <p className="font-subHeading text-lg font-bold my-1">
            Bank Account Number
          </p>
          <input
            type="number"
            className="w-full bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50 py-2 px-2 rounded-md"
          />
        </div>
        <div className="my-3">
          <p className="font-subHeading text-lg font-bold my-1">
            Re-enter Bank Account Number
          </p>
          <input
            type="number"
            className="w-full bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50 py-2 px-2 rounded-md"
          />
        </div>
        <div className="my-3">
          <p className="font-subHeading text-lg font-bold my-1">Bank Name</p>
          <input
            type="text"
            className="w-full bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50 py-2 px-2 rounded-md"
          />
        </div>
      </form>
      <LargeButton
        Text="Save & Continue"
        customCode="justify-center"
        color="text-lightColor"
        font="font-bold"
      />
    </div>
  );
}

export default BookingDetails;
