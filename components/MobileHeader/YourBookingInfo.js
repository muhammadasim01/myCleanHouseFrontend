import { useState } from "react";
import LargeButton from "./LargeButton";

function YourBookingInfo() {
  const [toggle, setToggle] = useState(true);
  const handleYes = () => {
    !toggle && setToggle(true);
  };
  const handleNo = () => {
    toggle && setToggle(false);
  };
  const [levelcount, setlevelCout] = useState(1);
  const [bedroomcount, setBedroomCount] = useState(1);
  return (
    <div>
      <h2 className="font-subHeading text-2xl font-bold text-darkColor">
        Customise Your Clean
      </h2>
      <p className="font-text text-base font-medium text-darkColor">
        What Type of <span className="font-bold">cleaning/services </span> do
        you need?
        <br /> Click the <span className="font-bold">Box</span> that applies.
      </p>
      <div className="flex flex-wrap justify-between">
        <div className="border-2 border-secondaryColor flex justify-center items-center py-4 w-[45%] rounded-md bg-[#6762f01a] my-2">
          <p>Regular Cleaning</p>
        </div>
        <div className="border-2 border-secondaryColor flex justify-center items-center py-4 w-[45%] rounded-md bg-[#6762f01a] my-2">
          <p>Regular Cleaning</p>
        </div>
        <div className="border-2 border-secondaryColor flex justify-center items-center py-4 w-[45%] rounded-md bg-[#6762f01a] my-2">
          <p>Regular Cleaning</p>
        </div>
        <div className="border-2 border-secondaryColor flex justify-center items-center py-4 w-[45%] rounded-md bg-[#6762f01a] my-2">
          <p>Regular Cleaning</p>
        </div>
        <div className="border-2 border-secondaryColor flex justify-center items-center py-4 w-[45%] rounded-md bg-[#6762f01a] my-2">
          <p>Regular Cleaning</p>
        </div>
        <div className="border-2 border-secondaryColor flex justify-center items-center py-4 w-[45%] rounded-md bg-[#6762f01a] my-2">
          <p>Regular Cleaning</p>
        </div>
        <div className="border-2 border-secondaryColor flex justify-center items-center py-4 w-[45%] rounded-md bg-[#6762f01a] my-2">
          <p>Regular Cleaning</p>
        </div>
      </div>
      <p className="font-text text-base font-medium text-darkColor">
        Not sure which <span className="font-bold">cleaning </span> service you
        need? Here in the table is our cleaning checklists for each of the
        services provided.{" "}
      </p>
      <LargeButton Text="Cleaning Checklist" />
      <p className="font-text text-base leading-6">
        Let us know below if there is anything from the cleaning checklist from
        the service you requested that you{" "}
        <span className="font-bold">DO NOT NEED TO BE CLEANED</span> below.{" "}
      </p>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          I do not need these areas/items to be cleaned:
        </p>
        <input
          type="text"
          className="w-full h-24 bg-[#6762f01a] border-2 border-secondaryColor rounded-md"
        />
      </div>
      <p className="font-text text-base font-normal">
        What type of <span className="font-bold">property</span> needs cleaning?
      </p>
      <div className="flex flex-wrap justify-between">
        <div className="border-2 border-secondaryColor flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-[#6762f01a] my-2">
          <p className="font-text text-center text-md font-medium">House</p>
        </div>
        <div className="border-2 border-secondaryColor flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-[#6762f01a] my-2">
          <p className="font-text text-center text-md font-medium">House</p>
        </div>
        <div className="border-2 border-secondaryColor flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-[#6762f01a] my-2">
          <p className="font-text text-center text-md font-medium">House</p>
        </div>
        <div className="border-2 border-secondaryColor flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-[#6762f01a] my-2">
          <p className="font-text text-center text-md font-medium">House</p>
        </div>
        <div className="border-2 border-secondaryColor flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-[#6762f01a] my-2">
          <p className="font-text text-center text-md font-medium">House</p>
        </div>
        <div className="border-2 border-secondaryColor flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-[#6762f01a] my-2">
          <p className="font-text text-center text-md font-medium">House</p>
        </div>
      </div>
      <div className="my-4">
        <p>Others:</p>
        <input
          type="text"
          className="border-2 border-secondaryColor w-full py-2 bg-[#6762f01a] rounded-md"
        />
      </div>
      <div className="my-4">
        <p>How often do you need cleaning?</p>
        <select className="border-2 border-secondaryColor w-full py-2 bg-[#6762f01a] rounded-md">
          <option value="once a week">Once a Week</option>
          <option value="2x a week">2x a Week</option>
          <option value="3x a week">3x a Week</option>
          <option value="4x a week">4x a Week</option>
          <option value="5x a week">5x a Week</option>
          <option value="6x a week">6x a Week</option>
          <option value="7x a week">7x a Week</option>
          <option value="bi-weekly">Bi-Weekly</option>
          <option value="1x a month">1x a month</option>
          <option value="one time only">One Time Only</option>
        </select>
      </div>
      <div className="my-4">
        <p>When was your property cleaned last?</p>
        <select className="border-2 border-secondaryColor w-full py-2 bg-[#6762f01a] rounded-md">
          <option value="1 Week ago">1 Week ago</option>
          <option value="2 Weeks ago">2 Weeks ago</option>
          <option value="3 Weeks ago">3 Weeks ago</option>
          <option value="4 Weeks ago">4 Weeks ago</option>
          <option value="more than a month">More than a Month</option>
        </select>
      </div>
      {/* <div className="my-4">
        <p>Size of property (sq ft)</p>
        <select className="border-2 border-secondaryColor w-full py-2 bg-[#6762f01a] rounded-md">
          <label htmlFor="">101 - 500</label>
          <input type="radio" label="101-500" />
        </select>
      </div> */}
      <div className="my-4">
        <p>Do you want the WHOLE property to be cleaned?</p>
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              toggle ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={handleYes}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !toggle ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={handleNo}
          >
            No
          </button>
        </div>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          If no, explain the areas not to clean:
        </p>
        <input
          type="text"
          className="w-full h-24 bg-[#6762f01a] border-2 border-secondaryColor rounded-md"
        />
      </div>
      <p>
        How many levels of the property do you want cleaned? (Including if there
        is a basement level)
      </p>
      <div className="border-2 border-secondaryColor bg-[#6762f01a] flex justify-between px-3 my-5 py-2 rounded-md">
        <button onClick={() => setlevelCout(levelcount - 1)}>-</button>
        <p>Level-{levelcount}</p>
        <button onClick={() => setlevelCout(levelcount + 1)}>+</button>
      </div>
      <p>How many bedrooms need cleaning?</p>
      <div className="border-2 border-secondaryColor bg-[#6762f01a] flex justify-between px-3 my-5 py-2 rounded-md">
        <button onClick={() => setBedroomCount(bedroomcount - 1)}>-</button>
        <p>{bedroomcount}-Bedroom</p>
        <button onClick={() => setBedroomCount(bedroomcount + 1)}>+</button>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          Priority to clean in the bedrooms areas:
        </p>
        <input
          type="text"
          className="w-full h-20 bg-[#6762f01a] border-2 border-secondaryColor rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          Do NOT CLEAN items/areas in the bedroom:
        </p>
        <input
          type="text"
          className="w-full h-20 bg-[#6762f01a] border-2 border-secondaryColor rounded-md"
        />
      </div>
      <h3 className="font-text text-xl font-bold">Bedroom extra tasks</h3>
      <p className="text-lg leading-6">
        Extra tasks required to be added to your REGULAR CLEANING. Click all the
        boxes that apply and we will estimate how much time extra you may need.
      </p>
      <p className="text-lg leading-6">
        Click how many bedrooms to request extra tasks.
      </p>
    </div>
  );
}

export default YourBookingInfo;
