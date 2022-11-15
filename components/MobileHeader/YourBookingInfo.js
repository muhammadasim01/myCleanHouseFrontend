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
  const [extraRoom, setExtraRoom] = useState(1);
  const [extraRoomTask, setExtraRoomTask] = useState(1);
  const [kitchen, setKitchen] = useState(1);
  const [kitchenExtraTask, setKitchenExtraTask] = useState(1);
  const [needIroning, setNeedIroning] = useState(true);
  const [addedOnTop, setAddedOnTop] = useState(true);
  const [ironPieces, setIronPieces] = useState(1);
  const [isOrganizingneeded, setIsOrganizingneeded] = useState(true);
  const [extraTime, setExtraTime] = useState(30);
  const [applianceCleaning, setApplianceCleaning] = useState(true);
  const [extraHours, setExtraHours] = useState(2.5);
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
      <div className="my-4">
        <p>Size of property (sq ft)</p>
        <select className="border-2 border-secondaryColor w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md">
          <option value="1 Week ago">101 - 500</option>
        </select>
      </div>
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
      <h3 className="font-subHeading text-2xl font-bold py-3">Extra rooms</h3>
      <p className="font-text text-lg font-normal leading-5">
        How many{" "}
        <span className="font-subHeading font-bold">
          extra rooms including: dining rooms, office rooms, sun rooms, laundry
          rooms, gym rooms and any other rooms{" "}
        </span>{" "}
        need cleaning? (including the basement area)
      </p>
      <div className="h-10 border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 flex justify-between px-3 my-5 rounded-md">
        <button
          onClick={() => extraRoom !== 0 && setExtraRoom(extraRoom - 1)}
          className="border-r-[2px] border-secondaryColor border-opacity-70 rounded-md pr-3 flex justify-between items-center"
        >
          -
        </button>
        <p className="self-center">{extraRoom}- Extra Room</p>
        <button
          onClick={() => setExtraRoom(extraRoom + 1)}
          className="border-l-[2px] border-secondaryColor border-opacity-70 rounded-md pl-3 flex justify-between items-center"
        >
          +
        </button>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Please describe what are the{" "}
          <span className="font-subHeading font-bold">extra rooms </span> you
          want cleaned:
        </p>
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Do <span className="font-subHeading font-bold">NOT CLEAN </span>{" "}
          items/areas in these rooms:{" "}
        </p>
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Extra room tasks
      </h3>
      <p className="font-text text-lg font-normal leading-5">
        Extra tasks required to be added to your{" "}
        <span className="font-subHeading font-bold">REGULAR CLEANING</span>.
        Click all the boxes that apply and we will estimate how much time extra
        you may need.
      </p>
      <div className="h-10 border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 flex justify-between px-3 my-5 rounded-md">
        <button
          onClick={() =>
            extraRoomTask !== 0 && setExtraRoomTask(extraRoomTask - 1)
          }
          className="border-r-[2px] border-secondaryColor border-opacity-70 rounded-md pr-3 flex justify-between items-center"
        >
          -
        </button>
        <p className="self-center">{extraRoomTask}- Extra Room</p>
        <button
          onClick={() => setExtraRoomTask(extraRoomTask + 1)}
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
      <h3 className="font-subHeading text-2xl font-bold py-3">Kitchen</h3>
      <p className="font-text text-lg font-normal leading-5 py-3">
        How many <span className="font-subHeading font-bold"> kitchens </span>{" "}
        need cleaning?
      </p>
      <div className="h-10 border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 flex justify-between px-3 my-5 rounded-md">
        <button
          onClick={() => kitchen !== 0 && setKitchen(kitchen - 1)}
          className="border-r-[2px] border-secondaryColor border-opacity-70 rounded-md pr-3 flex justify-between items-center"
        >
          -
        </button>
        <p className="self-center">{kitchen}-Kitchen</p>
        <button
          onClick={() => setKitchen(kitchen + 1)}
          className="border-l-[2px] border-secondaryColor border-opacity-70 rounded-md pl-3 flex justify-between items-center"
        >
          +
        </button>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Priority and notes to clean in the{" "}
          <span className="font-subHeading font-bold">kitchen</span> area:
        </p>
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Do <span className="font-subHeading font-bold">NOT CLEAN</span>{" "}
          items/areas in the kitchen:
        </p>
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Kitchen extra tasks
      </h3>
      <p className="font-text text-lg font-normal leading-5">
        Extra tasks required to be added to your{" "}
        <span className="font-subHeading font-bold">REGULAR CLEANING</span>.
        Click all the boxes that apply and we will estimate how much time extra
        you may need.
      </p>
      <p className="font-text text-lg font-normal leading-5 py-3">
        Click how many{" "}
        <span className="font-subHeading font-bold">kitchens</span> need extra
        tasks.
      </p>
      <div className="h-10 border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 flex justify-between px-3 my-5 rounded-md">
        <button
          onClick={() =>
            kitchenExtraTask !== 0 && setKitchenExtraTask(kitchenExtraTask - 1)
          }
          className="border-r-[2px] border-secondaryColor border-opacity-70 rounded-md pr-3 flex justify-between items-center"
        >
          -
        </button>
        <p className="self-center">{kitchenExtraTask}- Kitchen</p>
        <button
          onClick={() => setKitchenExtraTask(kitchenExtraTask + 1)}
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
            Wash Dishes By Hand
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Empty Dishwasher
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Load Dishwasher
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Range Hood
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Stove Cleaning Inside (Self Clean Oven)
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Stove Cleaning Inside (Non-Self Clean Oven)
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Quick Clean Inside Fridge
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Inside Fridge
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Top Of Fridge & Sides
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Kitchen Small Appliances
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Kitchen Cabinets
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Outside Of Kitchen Cabinets
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
            Clean Light Fixtures
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
            Clean Top Of Doors
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
            Deep Clean Switches
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
            Clean Inside Windows
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
            Deep Clean Window Sills
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
      <p className="font-text text-lg font-normal leading-6 py-3">
        Do you require any{" "}
        <span className="font-subHeading font-bold">laundry</span> to be done?
      </p>
      <p className="font-text text-sm font-normal">
        If you require ironing service only, there is a 2.5 hour minimum
        required
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              needIroning ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !needIroning && setNeedIroning(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !needIroning ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => needIroning && setNeedIroning(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="font-text text-lg font-normal leading-6">
        Do you require this service to be{" "}
        <span className="font-subHeading font-bold">added ontop</span> of your
        CLEANING SERVICE?
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              addedOnTop ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !addedOnTop && setAddedOnTop(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !addedOnTop ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => addedOnTop && setAddedOnTop(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="fon-text text-base font-normal leading-6 text-darkColor">
        How many loads of{" "}
        <span className="font-subHeading font-bold">laundry</span> do you need
        done?
      </p>
      <p className="font-text text-sm font-normal text-darkColor py-2">
        (Make sure to have the laundry ready and colours separated into baskets.
        Leave baskets in laundry room with a note attached 'Please wash'. Each
        load on average takes 1 hour to wash and 1 hour to dry.)
      </p>
      <div className="my-4">
        <select className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md">
          <option value="2x a week">1 Load</option>
          <option value="3x a week">2 Load</option>
          <option value="3x a week">3 Load</option>
        </select>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Please leave detailed laundry instructions in the text box below:
        </p>
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <p className="fon-text text-base font-normal leading-6 text-darkColor py-2">
        Do you require any{" "}
        <span className="font-subHeading font-bold">ironing </span> to be done?
      </p>
      <p className="font-text text-sm font-normal">
        If you require ironing service only, there is a 2.5 hour minimum
        required
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              needIroning ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !needIroning && setNeedIroning(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !needIroning ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => needIroning && setNeedIroning(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="font-text text-lg font-normal leading-6">
        Do you require this service to be{" "}
        <span className="font-subHeading font-bold">added ontop</span> of your
        CLEANING SERVICE?
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              addedOnTop ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !addedOnTop && setAddedOnTop(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !addedOnTop ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => addedOnTop && setAddedOnTop(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="fon-text text-base font-normal leading-6 text-darkColor">
        How pieces do you need{" "}
        <span className="font-subHeading font-bold">ironed</span>?
      </p>
      <p className="font-text text-sm font-normal text-darkColor py-2">
        (Make sure to have the ironing placed in a basket next to the ironing
        board and have the iron unplugged on the ironing board. Please attach
        note on the basket 'Please iron'. Each regular piece on average takes 5
        minutes to iron. Extra time needed for larger pieces)
      </p>
      <div className="h-10 border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 flex justify-between px-3 my-5 rounded-md">
        <button
          onClick={() => ironPieces !== 0 && setIronPieces(ironPieces - 1)}
          className="border-r-[2px] border-secondaryColor border-opacity-70 rounded-md pr-3 flex justify-between items-center"
        >
          -
        </button>
        <p className="self-center">{ironPieces}- Piece</p>
        <button
          onClick={() => setIronPieces(ironPieces + 1)}
          className="border-l-[2px] border-secondaryColor border-opacity-70 rounded-md pl-3 flex justify-between items-center"
        >
          +
        </button>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Please leave detailed ironing instructions in the text box below:
        </p>
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <p className="font-text text-lg font-normal leading-6">
        Do you require any{" "}
        <span className="font-subHeading font-bold">organizing</span> to be
        done?
      </p>
      <p className="font-text text-sm font-normal leading-5 py-3">
        If you require organizing service only, there is a 2.5 hour minimum
        required
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              isOrganizingneeded
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => !isOrganizingneeded && setIsOrganizingneeded(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !isOrganizingneeded
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => isOrganizingneeded && setIsOrganizingneeded(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="font-text text-lg font-normal leading-6">
        Do you require this service to be{" "}
        <span className="font-subHeading font-bold">added ontop</span> of your
        CLEANING SERVICE?
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              addedOnTop ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !addedOnTop && setAddedOnTop(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !addedOnTop ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => addedOnTop && setAddedOnTop(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="font-text text-base font-normal text-darkColor leading-6">
        If so how much extra time do you require?
      </p>
      <div className="h-10 border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 flex justify-between px-3 my-5 rounded-md">
        <button
          onClick={() => extraTime !== 0 && setExtraTime(extraTime - 1)}
          className="border-r-[2px] border-secondaryColor border-opacity-70 rounded-md pr-3 flex justify-between items-center"
        >
          -
        </button>
        <p className="self-center">{extraTime}- Minutes</p>
        <button
          onClick={() => setExtraTime(extraTime + 1)}
          className="border-l-[2px] border-secondaryColor border-opacity-70 rounded-md pl-3 flex justify-between items-center"
        >
          +
        </button>
      </div>
      <p className="font-text text-lg font-normal leading-6 text-darkColor">
        Do you require{" "}
        <span className="font-subHeading font-bold">appliance cleaning </span>{" "}
        only?
      </p>
      <p className="font-text text-sm font-normal leading-5 py-3">
        This service means you want for example your fridge or stove to be
        cleaned only. No other cleaning is needed.
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              applianceCleaning
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => !applianceCleaning && setApplianceCleaning(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !applianceCleaning
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => applianceCleaning && setApplianceCleaning(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="font-text text-base font-normal text-darkColor leading-5">
        If so, how much extra time do you require?
      </p>
      <p className="font-text text-base font-normal text-darkColor leading-5 py-3">
        There is a 2.5 hour minimum requirement for appliance cleaning only
        service
      </p>
      <div className="h-10 border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 flex justify-between px-3 my-5 rounded-md">
        <button
          onClick={() => extraHours !== 0 && setExtraHours(extraHours - 0.5)}
          className="border-r-[2px] border-secondaryColor border-opacity-70 rounded-md pr-3 flex justify-between items-center"
        >
          -
        </button>
        <p className="self-center">{extraHours}- Hours</p>
        <button
          onClick={() => setExtraHours(extraHours + 0.5)}
          className="border-l-[2px] border-secondaryColor border-opacity-70 rounded-md pl-3 flex justify-between items-center"
        >
          +
        </button>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal leading-6 py-2">
          Explain what appliances you want cleaned?
        </p>
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-md"
        />
      </div>
      <p className="font-text text-base font-normal leading-6 py-2">
        If you want the stove cleaned, is the stove self cleaning or non self
        cleaning? (Click the button below that applies)
      </p>
      <div className="flex flex-wrap justify-between">
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Stove Cleaning Inside (Self Clean Oven)
          </p>
        </div>
        <div
          className="border-2 border-secondaryColor border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Stove Cleaning Inside (Non-Self Clean Oven)
          </p>
        </div>
      </div>
      <h3 className="font-heading text-2xl font-bold leading-6 text-darkColor py-3">
        Your Time Estimate
      </h3>
      <p className="font-text text-xl font-normal leading-6 text-darkColor py-3">
        We recommend selecting{" "}
        <span className="font-subHeading font-bold">______hours</span>
      </p>
      <p className="font-text text-sm font-normal">
        (Our minimum service is 2.5 hours)
      </p>
      <div>
        <div className="bg-secondaryColor h-5 w-10">2.5</div>
      </div>
    </div>
  );
}

export default YourBookingInfo;
