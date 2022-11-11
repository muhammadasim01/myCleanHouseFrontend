import Image from "next/image";
import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import galleryIcon from "../../public/assets/Gallery_Icon.png";
import LargeButton from "./LargeButton";
function CleanerProfile() {
  const [iscatFriendly, setIsCatFriendly] = useState(true);
  const [isdogFriendly, setIsDogFriendly] = useState(true);
  const [isenglishSpeak, setIsEnglishSpeak] = useState(true);
  const [isenglishRead, setIsEnglishRead] = useState(true);
  return (
    <div className="border-2 border-secondaryColor p-4">
      <h2 className="font-subHeading  text-xl font-bold text-left">
        Cleaner Profile
      </h2>
      <p className="font-text text-lg font-normal leading-6 py-5">
        Make your online profile. What should customers know about you?
      </p>
      <h3 className="font-subHeading text-2xl text-darkColor font-bold">
        Write an impressive headline.
      </h3>
      <div className="my-2">
        <p className="font-text text-xs font-normal leading-5 py-2">
          Make your headline short, descriptive and honest.
        </p>
        <input
          type="text"
          className="border-2 h-10 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <p className="font-text text-[8px] font-normal text-end">
        60 max characters
      </p>
      <p className="font-text text-lg font-normal">Examples:</p>
      <p className="font-text text-sm font-normal">
        {" "}
        “I have an eye for detail, experienced & punctual!”
      </p>
      <p className="font-text text-sm font-normal">
        {" "}
        “Exceptional cleaner with 5 years experience”
      </p>
      <h3 className="font-subHeading text-xl text-darkColor font-bold py-5">
        Your cleaning experience and introduction.
      </h3>
      <p className="font-text text-lg font-normal leading-6">
        Write in the box below your introduction, cleaning experience, skills,
        training, cleaning services you can offer and why you like to clean.{" "}
      </p>
      <p className="font-text text-[12px] font-normal pt-2">
        Check for spelling and grammar, don't add any personal information{" "}
      </p>
      <div className="my-2">
        <p className="font-text text-xs font-normal leading-5 pb-2">
          like phone numbers, email addresses, website links etc.
        </p>
        <input
          type="text"
          className="border-2 h-20 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <p className="font-text text-[8px] font-normal text-end">
        200 max characters
      </p>
      <p className="font-text text-lg font-normal">Examples:</p>
      <p className="font-text text-sm font-normal">
        " Hi, my name is Jen! I have 2 years experience cleaning homes and
        condos. I can do regular or deep cleaning. I love to clean as I find it
        relaxing. ..."
      </p>
      <h3 className="font-subHeading text-xl text-darkColor font-bold py-5">
        Your schedule.
      </h3>
      <p className="font-text text-lg font-normal leading-6">
        Write in the box below your availability as customers like to know if
        you are available on a regular basis. Explain the days and times you are
        available.
      </p>
      <div className="my-2">
        <input
          type="text"
          className="border-2 h-20 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <p className="font-text text-[8px] font-normal text-end">
        2000 max characters
      </p>
      <p className="font-text text-lg font-normal">Examples:</p>
      <p className="font-text text-sm font-normal">
        {" "}
        "I am available every week on these days 8am-6pm: Monday, Wednesday,
        Friday and Sundays"
      </p>
      <h3 className="font-subHeading text-xl text-darkColor font-bold py-5">
        Availability
      </h3>
      <p className="font-text text-lg font-normal leading-6">
        What is your availability? Please click the boxes that apply.
      </p>
      <div className="py-5  flex justify-between flex-wrap">
        <button className="border-2 my-3 flex items-center justify-center border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg w-[135px] h-[45px]">
          Full time
        </button>
        <button className="border-2 my-3 flex items-center justify-center border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg w-[135px] h-[45px]">
          Part time
        </button>
        <button className="border-2 flex items-center justify-center border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg w-[135px] h-[45px]">
          Occasional
        </button>
        <button className="border-2 flex items-center justify-center border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg w-[135px] h-[45px]">
          On Call
        </button>
      </div>
      <h3 className="font-subHeading text-xl text-darkColor font-bold py-5">
        Shifts
      </h3>
      <p className="font-text text-lg font-normal leading-6">
        What shifts are you able to work? Please click the boxes that apply.
      </p>
      <div className="py-5  flex justify-between flex-wrap">
        <button className="border-2 my-3 flex items-center justify-center border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg w-[135px] h-[45px]">
          Weekdays
        </button>
        <button className="border-2 my-3 flex items-center justify-center border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg w-[135px] h-[45px]">
          Weeknights
        </button>
        <button className="border-2 flex items-center justify-center border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg w-[135px] h-[45px]">
          Weekends
        </button>
        <button className="border-2 flex items-center justify-center border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg w-[135px] h-[45px]">
          Flexible/Anytime
        </button>
      </div>
      <h3 className="font-subHeading text-xl text-darkColor font-bold py-5">
        What cleaning services you can offer?
      </h3>
      <p className="font-text text-lg font-normal leading-6">
        (The more services you can offer, the more you will be booked for jobs.
        Please click only if you have more than 3 months experience for each
        service. Click <span className="text-secondaryColor">here</span> for a
        description of the services)
      </p>
      <p className="font-text text-sm font-normal pt-5">
        Select all that apply
      </p>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Regular Cleaning</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Deep Cleaning</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">
          Post Construction Cleaning{" "}
        </label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">
          Move In / Out Cleaning{" "}
        </label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Appliance Cleaning</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Laundry</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Ironing</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Organizing</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Wash Dishes</label>
      </div>
      <h3 className="font-subHeading text-xl text-darkColor font-bold py-5">
        What kind of properties are you able to clean?
      </h3>
      <p className="font-text text-sm font-normal">Select all that apply</p>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Houses</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Apartments</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Condos</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Bungalows</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Townhouses</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Duplexes</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Holiday Rentals</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Offices</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Commercial </label>
      </div>
      <div className="my-4">
        <p className="font-subHeading text-2xl text-darkColor font-bold leading-6 py-5">
          Are you able to work in a house with cats?
        </p>
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              iscatFriendly ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !iscatFriendly && setIsCatFriendly(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !iscatFriendly
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => iscatFriendly && setIsCatFriendly(false)}
          >
            No
          </button>
        </div>
      </div>
      <div className="my-4">
        <p className="font-subHeading text-2xl text-darkColor font-bold leading-6 py-5">
          Are you able to work in a house with dogs?
        </p>
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              isdogFriendly ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !isdogFriendly && setIsDogFriendly(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !isdogFriendly
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => isdogFriendly && setIsDogFriendly(false)}
          >
            No
          </button>
        </div>
      </div>
      <div className="my-4">
        <p className="font-subHeading text-2xl text-darkColor font-bold leading-6 py-5">
          Can you speak English?
        </p>
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              isenglishSpeak
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => !isenglishSpeak && setIsEnglishSpeak(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !isenglishSpeak
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => isenglishSpeak && setIsEnglishSpeak(false)}
          >
            No
          </button>
        </div>
      </div>
      <div className="my-4">
        <p className="font-subHeading text-2xl text-darkColor font-bold leading-6 py-5">
          Can you read English?
        </p>
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              isenglishRead ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !isenglishRead && setIsEnglishRead(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !isenglishRead
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => isenglishRead && setIsEnglishRead(false)}
          >
            No
          </button>
        </div>
      </div>
      <div className="my-2">
        <p className="font-subHeading text-xl text-darkColor font-bold leading-6 py-5">
          What is your nationality?
        </p>
        <input
          type="text"
          className="border-2 h-10 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <div className="my-2">
        <p className="font-subHeading text-xl text-darkColor font-bold leading-6 py-5">
          What other languages can you speak?
        </p>
        <input
          type="text"
          className="border-2 h-20 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <div className="my-2">
        <p className="font-subHeading text-xl text-darkColor font-bold leading-6 py-5">
          What other languages can you write?
        </p>
        <input
          type="text"
          className="border-2 h-20 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <div className="my-2">
        <p className="font-subHeading text-xl text-darkColor font-bold leading-6 py-5">
          Will you be getting to your cleaning jobs by car or transit?
        </p>
        <div className="flex items-center justify-between flex-wrap">
          <div className="border-2 h-10 flex items-center justify-center border-secondaryColor border-opacity-70 w-[130px] py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md">
            <p>Car</p>
          </div>
          <div className="border-2 h-10 flex items-center justify-center border-secondaryColor border-opacity-70 w-[130px] py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md">
            <p>Transit</p>
          </div>
        </div>
      </div>
      <p className="font-subHeading text-xl text-darkColor font-bold leading-6 py-5">
        What are your rates per hour?
      </p>
      <p className="font-text text-lg font-normal leading-6">
        Your rates can be changed at any time. We suggest determining your
        amount you want to earn by increasing it by 25%. Example: if you want to
        earn $20 per hour, add 25% extra to $25 per hour. This will cover our
        fees.{" "}
      </p>
      <div className="my-2">
        <p className="font-subHeading text-lg text-darkColor font-bold leading-6 py-5">
          For regular cleaning, laundry, ironing, organizing
        </p>
        <div className="flex items-center relative">
          <p className="absolute left-3">$</p>
          <input
            type="number"
            className="border-2 h-10 border-secondaryColor border-opacity-70 w-full pl-8 py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
          <p className="absolute right-3">/hour</p>
        </div>
      </div>
      <div className="my-2">
        <p className="font-subHeading text-lg text-darkColor font-bold leading-6 py-5">
          For deep cleaning, post construction cleaning, move in/out cleaning,
          appliance cleaning
        </p>
        <div className="flex items-center relative">
          <p className="absolute left-3">$</p>
          <input
            type="number"
            className="border-2 h-10 border-secondaryColor border-opacity-70 w-full pl-8 py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
          <p className="absolute right-3">/hour</p>
        </div>
      </div>
      <div className="my-2">
        <p className="font-subHeading text-lg text-darkColor font-bold leading-6 py-5">
          Your rates must meet minimum wage. Not sure what your state/province
          minimum wage is? Click the box below for rates in your area.
        </p>
      </div>
      <div className="my-2 flex">
        <button className="border-2 border-secondaryColor border-opacity-70 w-full py-2 rounded-full bg-secondaryColor bg-opacity-10">
          <p className="font-subHeading  text-xl font-bold">
            Minimum Wage Rates
          </p>
        </button>
      </div>
      <h3 className="font-subHeading text-2xl text-darkColor font-bold py-5">
        Your Availability
      </h3>
      <p className="font-text text-lg font-medium leading-6">
        <span className="font-subHeading font-bold">
          What days of the week are you available?
        </span>{" "}
        You can edit your dates at any time by going to your calendar.
      </p>
      <p className="font-text text-sm font-normal pt-5">
        Click all the boxes that apply.
      </p>
      <div className="py-4 flex justify-evenly items-center">
        <div className="h-[35px] w-[35px] flex items-center justify-center border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg">
          <p className="font-text text-sm font-bold">Sun</p>
        </div>
        <div className="h-[35px] w-[35px] flex items-center justify-center border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg">
          <p className="font-text text-sm font-bold">Mon</p>
        </div>
        <div className="h-[35px] w-[35px] flex items-center justify-center border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg">
          <p className="font-text text-sm font-bold">Tue</p>
        </div>
        <div className="h-[35px] w-[35px] flex items-center justify-center border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg">
          <p className="font-text text-sm font-bold">Wed</p>
        </div>
        <div className="h-[35px] w-[35px] flex items-center justify-center border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg">
          <p className="font-text text-sm font-bold">Thu</p>
        </div>
        <div className="h-[35px] w-[35px] flex items-center justify-center border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg">
          <p className="font-text text-sm font-bold">Fri</p>
        </div>
        <div className="h-[35px] w-[35px] flex items-center justify-center border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg">
          <p className="font-text text-sm font-bold">Sat</p>
        </div>
      </div>
      <div className="my-2">
        <p className="font-text text-xl text-darkColor font-normal leading-6 py-2">
          Start Date
        </p>
        <input
          type="date"
          className="border-2 h-10 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <p className="font-subHeading text-lg font-bold leading-6 py-5">
        What times are you available?
      </p>
      <p className="font-text text-lg font-norml text-darkColor leading-6">
        Regular customers prefer to have a regular schedule each clean on the
        same days and at the same time. If you are wanting to work full time, we
        suggest starting as early as possible like 8am.{" "}
      </p>
      <p className="font-text text-sm font-normal leading-6 py-3">
        Click on the <span className="font-bold">boxes </span> when you can
        start and finish.(For the days you are available){" "}
      </p>
      <div className="flex">
        <div className="w-[50%] flex flex-col items-center">
          <p>AM</p>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            08:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            09:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            10:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            11:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            12:00
          </div>
        </div>
        <div className="w-[50%] flex items-center flex-col ">
          <p>PM</p>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            12:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            13:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            14:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            15:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            16:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            17:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            18:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            19:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            20:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            21:00
          </div>
          <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 px-10 my-3 rounded-lg">
            22:00
          </div>
        </div>
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Upload Your Photos
      </h3>
      <p className="font-text text-lg font-normal leading-6">
        This will be your profile photo. Use a well lit clear photo of you face
        without sunglasses. Center your face and smile.{" "}
      </p>
      <p className="font-text text-sm font-normal py-2">
        Your profile photo and gallery photos will be visible on your profile
        page.
      </p>
      <div className="flex items-center justify-between">
        <div className="h-[70px] w-[135px] bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-lg"></div>
        <div className="h-[70px] w-[135px] bg-secondaryColor bg-opacity-10 border-2 border-secondaryColor border-opacity-70 rounded-lg"></div>
      </div>
      <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg flex items-center  py-3 my-5 px-5">
        <div className="w-[20%] mt-3">
          <FaFileUpload className="text-4xl text-secondaryColor" />
        </div>
        <div className="w-[80%]">
          <p className="font text-sm font-normal pt-3">
            Upload images from computer (or drag image into box)
          </p>
        </div>
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Gallery Photos
      </h3>
      <p className="font-text text-lg font-normal leading-6">
        Add upto 5 photos of you showcasing your work.
      </p>
      <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg flex items-center  py-3 my-5 px-5">
        <div className="w-[20%] mt-3 mr-2">
          {/* <FaFileUpload className="text-4xl text-secondaryColor" /> */}
          <Image src={galleryIcon} />
        </div>
        <div className="w-[80%]">
          <p className="font text-sm font-normal pt-3">
            Upload image from computer (or drag image into box)
          </p>
        </div>
      </div>
      <LargeButton
        Text="Save & Continue"
        customCode="justify-center"
        color="text-lightColor"
        font="font-bold"
      />
    </div>
  );
}
export default CleanerProfile;
