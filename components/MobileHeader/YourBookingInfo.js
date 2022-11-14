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
  const [extrabedroomcount, setExtrabedRoomCount] = useState(1);
  const [bathroomscount, setBathroomscount] = useState(1);
  const [livingroomcount, setLivingRoomCount] = useState(1);
  const [extralivingroomcount, setExtralivingRoomCount] = useState(1);
  return (
    <div>
      <h2 className="font-subHeading text-2xl font-bold text-darkColor my-7">
        Get your quote
      </h2>
      <p className="font-text text-base font-medium text-darkColor">
        What Type of <span className="font-bold">cleaning/services </span> do
        you need?
        <br /> Click the <span className="font-bold">Box</span> that applies.
      </p>
      <div className="flex flex-wrap justify-between my-5">
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center">Regular Cleaning</p>
        </div>
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center">Deep Cleaning</p>
        </div>
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center">Move In/Out Cleaning</p>
        </div>
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center">Post Renovation Cleaning</p>
        </div>
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center">Organizing Only </p>
        </div>
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center">Appliance Cleaning Only</p>
        </div>
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center">
            Laundry <br /> Only{" "}
          </p>
        </div>
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center">
            Ironing <br /> Only
          </p>
        </div>
      </div>
      <p className="font-text text-base font-medium text-darkColor">
        Not sure which <span className="font-bold">cleaning </span> service you
        need? Here in the table is our{" "}
        <span className="font-bold">cleaning checklists </span> for each of the
        services provided.{" "}
      </p>
      <LargeButton
        Text="Cleaning Checklist"
        color="text-lightColor"
        customCode="justify-center bg-secondaryColor"
        font="font-bold"
      />
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
          className="w-full h-24 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <p className="font-text text-base font-normal">
        What type of <span className="font-bold">property</span> needs cleaning?
      </p>
      <div className="flex flex-wrap justify-between">
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">House</p>
        </div>
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">House</p>
        </div>
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">House</p>
        </div>
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">House</p>
        </div>
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">House</p>
        </div>
        <div className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">House</p>
        </div>
      </div>
      <div className="my-4">
        <p>Others:</p>
        <input
          type="text"
          className="border-2 border-secondaryColor border-opacity-70 w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <div className="my-4">
        <p>How often do you need cleaning?</p>
        <select className="border-2 border-secondaryColor w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md">
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
        <select className="border-2 border-secondaryColor w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md">
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
        <div className="w-28 flex justify-between  mb-5 bg-secondaryColor bg-opacity-10 rounded-full">
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
          className="w-full h-24 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <p>
        How many levels of the property do you want cleaned? (Including if there
        is a basement level)
      </p>
      <div className="h-10 border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 flex justify-between px-3 my-5 rounded-md">
        <button
          onClick={() => levelcount !== 1 && setlevelCout(levelcount - 1)}
          className="border-r-[2px] border-secondaryColor border-opacity-70 rounded-md pr-3 flex justify-between items-center"
        >
          -
        </button>
        <p className="self-center">Level-{levelcount}</p>
        <button
          onClick={() => setlevelCout(levelcount + 1)}
          className="border-l-[2px] border-secondaryColor border-opacity-70 rounded-md pl-3 flex justify-between items-center"
        >
          +
        </button>
      </div>
      <p>How many bedrooms need cleaning?</p>
      <div className="h-10 border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 flex justify-between px-3 my-5 rounded-md">
        <button
          onClick={() =>
            bedroomcount !== 0 && setBedroomCount(bedroomcount - 1)
          }
          className="border-r-[2px] border-secondaryColor border-opacity-70 rounded-md pr-3 flex justify-between items-center"
        >
          -
        </button>
        <p className="self-center">{bedroomcount}-Bedroom</p>
        <button
          onClick={() => setBedroomCount(bedroomcount + 1)}
          className="border-l-[2px] border-secondaryColor border-opacity-70 rounded-md pl-3 flex justify-between items-center"
        >
          +
        </button>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          Priority to clean in the bedrooms areas:
        </p>
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          Do NOT CLEAN items/areas in the bedroom:
        </p>
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Bedroom extra tasks
      </h3>
      <p className="font-text text-lg font-normal leading-5">
        Extra tasks required to be added to your{" "}
        <span className="font-subHeading font-bold ">REGULAR CLEANING</span>.
        Click all the boxes that apply and we will estimate how much time extra
        you may need.
      </p>
      <p className="font-text text-lg font-normal leading-5 py-3">
        Click how many <span className="font-bold">bedrooms </span> to request
        extra tasks.
      </p>
      <div className="h-10 border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 flex justify-between px-3 my-5 rounded-md">
        <button
          onClick={() =>
            extrabedroomcount !== 0 && setBedroomCount(extrabedroomcount - 1)
          }
          className="border-r-[2px] border-secondaryColor border-opacity-70 rounded-md pr-3 flex justify-between items-center"
        >
          -
        </button>
        <p className="self-center">{extrabedroomcount}-Bedroom</p>
        <button
          onClick={() => setExtrabedRoomCount(extrabedroomcount + 1)}
          className="border-l-[2px] border-secondaryColor border-opacity-70 rounded-md pl-3 flex justify-between items-center"
        >
          +
        </button>
      </div>
      <p className="font-text text-base font-normal">Extra Tasks</p>
      <div className="flex flex-wrap justify-between">
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Change Bedsheets
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Furniture Polishing
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Move Furniture To Vacuum & Mop
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Vacuum & Mop Under Area Rugs
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Light Fixtures
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Ceiling Fan
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Top Of Doors
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Disinfecting Knobs
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Switches
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Wastebaskets
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Windows
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Window Tracks
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Window Sills
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Blinds
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Spot Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Baseboards
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Floor Washing
          </p>
        </div>
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">Bathrooms</h3>
      <p className="font-text text-lg font-normal leading-5 py-2">
        How many <span className="font-bold">bathrooms</span> need cleaning?
      </p>
      <div className="h-10 border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 flex justify-between px-3 my-5 rounded-md">
        <button
          onClick={() =>
            bathroomscount !== 0 && setBathroomscount(bathroomscount - 1)
          }
          className="border-r-[2px] border-secondaryColor border-opacity-70 rounded-md pr-3 flex justify-between items-center"
        >
          -
        </button>
        <p className="self-center">{bathroomscount}-bathroom</p>
        <button
          onClick={() => setBathroomscount(bathroomscount + 1)}
          className="border-l-[2px] border-secondaryColor border-opacity-70 rounded-md pl-3 flex justify-between items-center"
        >
          +
        </button>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          Priority to clean in the{" "}
          <span className="font-subHeading font-bold">bathroom </span> areas:
        </p>
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          Do <span className="font-subHeading font-bold">NOT CLEAN </span>{" "}
          items/areas in the bathroom:
        </p>
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Bathrooms extra tasks
      </h3>
      <p className="font-text text-lg font-normal leading-5">
        Extra tasks required to be added to your{" "}
        <span className="font-subHeading font-bold">REGULAR CLEANING</span>.
        Click all the boxes that apply and we will estimate how much time extra
        you may need.
      </p>
      <p className="font-text text-lg font-normal leading-5 py-3">
        Click how many{" "}
        <span className="font-subHeading font-bold">bathrooms</span> to request
        extra tasks.
      </p>
      <p className="font-text text-base font-normal">Extra Tasks</p>
      <div className="flex flex-wrap justify-between">
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Bathroom Cabinets
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Medicine Cabinet
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Bathroom Tile Grout
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Light Fixtures
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Ceiling Fan
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Top Of Doors
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Disinfecting Knobs
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Switches
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Wastebaskets
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Windows
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Window Tracks
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Window Sills
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Blinds
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Spot Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Floor Washing
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Baseboards
          </p>
        </div>
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Living Rooms/Family Rooms
      </h3>
      <p className="font-text text-lg font-normal leading-5 py-2">
        How many{" "}
        <span className="font-subHeading font-bold">
          {" "}
          living rooms/family rooms
        </span>{" "}
        need cleaning? (including the basement area)
      </p>
      <div className="h-10 border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 flex justify-between px-3 my-5 rounded-md">
        <button
          onClick={() =>
            livingroomcount !== 0 && setLivingRoomCount(livingroomcount - 1)
          }
          className="border-r-[2px] border-secondaryColor border-opacity-70 rounded-md pr-3 flex justify-between items-center"
        >
          -
        </button>
        <p className="self-center">{livingroomcount}-Living / Family Rooms</p>
        <button
          onClick={() => setLivingRoomCount(livingroomcount + 1)}
          className="border-l-[2px] border-secondaryColor border-opacity-70 rounded-md pl-3 flex justify-between items-center"
        >
          +
        </button>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Priority to clean in the{" "}
          <span className="font-subHeading font-bold">
            living room/family room{" "}
          </span>{" "}
          areas:
        </p>
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Do <span className="font-subHeading font-bold">NOT CLEAN </span>{" "}
          items/areas in the living room/family room:
        </p>
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Living room/family room extra tasks
      </h3>
      <p className="font-text text-lg font-normal leading-5">
        Extra tasks required to be added to your{" "}
        <span className="font-subHeading font-bold">REGULAR CLEANING</span>.
        Click all the boxes that apply and we will estimate how much time extra
        you may need.
      </p>
      <p className="font-text text-lg font-normal leading-5 py-3">
        Click how many{" "}
        <span className="font-subHeading font-bold">
          Living room/family room extra tasks
        </span>{" "}
        to request extra tasks.
      </p>
      <div className="h-10 border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 flex justify-between px-3 my-5 rounded-md">
        <button
          onClick={() =>
            extralivingroomcount !== 0 &&
            setExtralivingRoomCount(extralivingroomcount - 1)
          }
          className="border-r-[2px] border-secondaryColor border-opacity-70 rounded-md pr-3 flex justify-between items-center"
        >
          -
        </button>
        <p className="self-center">
          {extralivingroomcount}-Living / Family Rooms
        </p>
        <button
          onClick={() => setExtralivingRoomCount(extralivingroomcount + 1)}
          className="border-l-[2px] border-secondaryColor border-opacity-70 rounded-md pl-3 flex justify-between items-center"
        >
          +
        </button>
      </div>
      <p className="font-text text-base font-normal">Extra Tasks</p>
      <div className="flex flex-wrap justify-between">
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Furniture Polishing
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Move Furniture To Vacuum & Mop
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Vacuum & Mop Under Area Rugs
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Light Fixtures
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Ceiling Fan
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Top Of Doors
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Disinfecting Knobs
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Switches
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Wastebaskets
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Windows
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Window Tracks
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Window Sills
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Blinds
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Spot Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Floor Washing
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Baseboards
          </p>
        </div>
      </div>
    </div>
  );
}

export default YourBookingInfo;
