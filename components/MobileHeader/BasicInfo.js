import { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import LargeButton from "./LargeButton";
function BasicInfo() {
  const [toggle, setToggle] = useState({
    basicInfo: true,
    backgroundCheck: false,
    uploadPhoto: false,
  });
  const basicInfo = () => {
    setToggle({
      basicInfo: true,
      backgroundCheck: false,
      uploadPhoto: false,
    });
  };
  const backgroundCheck = () => {
    setToggle({
      basicInfo: false,
      backgroundCheck: true,
      uploadPhoto: false,
    });
  };
  const uploadPhoto = () => {
    setToggle({
      basicInfo: false,
      backgroundCheck: false,
      uploadPhoto: true,
    });
  };
  return (
    <div className="border-2 border-secondaryColor p-4">
      <h2 className="font-subHeading  text-xl font-bold text-left">
        Your Application
      </h2>
      <p className="font-text text-lg font-bold leading-6 py-5">
        Complete the required EASY 3 steps to get approved!
      </p>
      <div className="flex items-center justify-center">
        <div className="border-2 border-secondaryColor border-opacity-50 rounded-md bg-secondaryColor bg-opacity-10 p-5 h-[104px] w-[190px]">
          <div className="flex justify-evenly items-center">
            <p className="font-text text-xl font-extrabold">1</p>
            <p>
              <GrLinkNext />
            </p>
            <p className="font-text text-xl font-extrabold">2</p>
            <p>
              <GrLinkNext />
            </p>
            <p className="font-text text-xl font-extrabold">3</p>
          </div>
          <p className="text-center font-text text-2xl font-bold py-2">
            easy steps!
          </p>
        </div>
      </div>
      <p className="font-text text-sm font-normal leading-5 py-5">
        To be approved, please complete all the form below. You will receive an
        email from us within 48 hours that you have been approved or that you
        need to complete additional steps and resubmit in order to be approved.
        Once you are approved or waiting for approval, you then can take our
        <span className="text-secondaryColor mx-2">
          Free Online Cleaning Course{" "}
        </span>{" "}
        to become certified! You will then be ready to work!
      </p>
      <div className="flex h-10  border-2 border-secondaryColor px-1 items-center bg-secondaryColor bg-opacity-10 rounded-lg ">
        <button
          onClick={basicInfo}
          className="font-text text-[10px] font-extrabold text-darkColor flex items-center w-[34%]"
        >
          <p
            className={`h-2 w-2 border-2 border-secondaryColor ${
              toggle.basicInfo && "bg-secondaryColor"
            } rounded-full mx-[3px]`}
          ></p>
          Basic Info
        </button>
        <button
          onClick={backgroundCheck}
          className="font-text text-[10px] font-bold text-darkColor flex items-center w[22%]"
        >
          <p
            className={`h-2 w-2 border-2 border-secondaryColor ${
              toggle.backgroundCheck && "bg-secondaryColor"
            } rounded-full mx-1`}
          ></p>
          Background Check
        </button>
        <button
          onClick={uploadPhoto}
          className="font-text text-[10px] font-bold text-darkColor flex items-center w-[22%]"
        >
          <p
            className={`h-2 w-2 border-2 border-secondaryColor ${
              toggle.uploadPhoto && "bg-secondaryColor"
            }  rounded-full mx-1`}
          ></p>
          Upload Photo ID
        </button>
      </div>
      {/* {toggle.basicInfo && <div>Basic Info</div>}
      {toggle.backgroundCheck && <div>Background Check</div>}
      {toggle.uploadPhoto && <div>Upload Photo</div>} */}
      <div className="my-4">
        <p className="font-text text-lg font-normal py-2">Address Line 1</p>
        <input
          type="text"
          //   placeholder="Address"
          className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <div className="my-4">
        <p className="font-text text-lg font-normal py-2">Address Line 2</p>
        <input
          type="text"
          className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <div className="my-4">
        <p className="font-text text-lg font-normal py-2">City</p>
        <input
          type="text"
          className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <div className="my-4">
        <p className="font-text text-lg font-normal py-2">
          {" "}
          State or province{" "}
        </p>
        <select className="border-2 border-secondaryColor border-opacity-70 w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md">
          <option value="2x a week"></option>
          <option value="3x a week">CANADA</option>
        </select>
      </div>
      <div className="my-4">
        <p className="font-text text-lg font-normal py-2">
          Zip / postal / postcode
        </p>
        <input
          type="number"
          className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <div className="my-4">
        <p className="font-text text-lg font-normal py-2">Mobile Number</p>
        <div className="flex justify-between">
          <select className="border-2 border-secondaryColor border-opacity-70 w-[40%] py-2 bg-secondaryColor bg-opacity-10 rounded-md">
            <option value="2x a week" className="font-text text-sm text-left">
              +1 (CA)
            </option>
            <option value="3x a week" className="font-text text-sm text-left">
              +2 (CA)
            </option>
            <option value="3x a week" className="font-text text-sm text-left">
              +3 (CA)
            </option>
            <option value="3x a week" className="font-text text-sm text-left">
              +4 (CA)
            </option>
          </select>
          <input
            type="number"
            className="border-2 border-secondaryColor border-opacity-70 w-[50%] py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
        </div>
      </div>
      <div className="my-2">
        <p className="font-text text-lg font-normal py-2">Email</p>
        <input
          type="email"
          className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
        <p className="font-text text-sm font-normal leading-5 py-3 text-darkColor">
          <span className="font-bold">Note: </span> We will email a confirmation
          link to your email address. Please check your junk folder in case you
          did not receive it.
        </p>
      </div>
      <h3 className="font-subHeading text-lg font-bold">Emergency Contact</h3>
      <p className="font-text text-sm font-medium leading-5 py-2">
        Who can we contact, other than you, in case of an{" "}
        <span className="font-bold">emergency</span>?
      </p>
      <div className="my-2">
        <p className="font-text text-base font-medium py-2">
          Emergency contact name
        </p>
        <input
          type="text"
          className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <div className="my-2">
        <p className="font-text text-base font-medium py-2">
          Emergency contact number
        </p>
        <input
          type="number"
          className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <div className="my-2">
        <p className="font-text text-sm font-medium leading-5 py-2">
          Please list all members of your household who are authorised to speak
          to us in case of an emergency.
        </p>
        <input
          type="number"
          className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <h3 className="font-subHeading text-lg font-bold">Age Verification</h3>
      <div className="my-2">
        <p className="font-text text-sm font-medium leading-5 py-2">
          We use this to conduct background checks when signing up to be a
          cleaner. We don't share or display this on your profile.
        </p>
      </div>
      <div className="my-4">
        <p className="font-text text-lg font-normal py-2">Month</p>
        <select className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md">
          <option value="2x a week">January</option>
          <option value="3x a week">February</option>
          <option value="3x a week">March</option>
          <option value="3x a week">Aprail</option>
        </select>
      </div>
      <div className="my-4">
        <p className="font-text text-lg font-normal py-2">Day</p>
        <select className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md">
          <option value="2x a week">01</option>
          <option value="3x a week">02</option>
          <option value="3x a week">03</option>
          <option value="3x a week">04</option>
          <option value="3x a week">05</option>
        </select>
      </div>
      <div className="my-4">
        <p className="font-text text-lg font-normal py-2">Year</p>
        <select className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md">
          <option value="2x a week">2022</option>
          <option value="3x a week">2021</option>
          <option value="3x a week">2022</option>
          <option value="3x a week">2023</option>
          <option value="3x a week">2024</option>
        </select>
      </div>
      <p className="font-text text-sm font-medium leading-5 py-2">
        <span className="font-bold"> Note: </span> You must be 18 years or older
        to sign up.
      </p>
      <h3 className="font-subHeading text-lg font-bold">Your Experience</h3>
      <div className="my-2">
        <p className="font-text text-sm font-medium leading-5 py-2">
          How much experience do you have in professional house cleaning?
        </p>
      </div>
      <div className="my-4">
        <select className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md">
          <option value="2x a week">No experience</option>
        </select>
      </div>
      <div className="my-2">
        <p className="font-text text-sm font-medium leading-5 py-2">
          What type of cleaning experience do you have?
        </p>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">House cleaning</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Hotel cleaning</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Office cleaning</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Hospital cleaning</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Commercial cleaning</label>
      </div>
      <div className="my-2 flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7 border-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
        />
        <label className="font-text text-base px-4">Other cleaning</label>
      </div>
      <div className="my-2">
        <p className="font-text text-sm font-medium leading-5 py-2">
          Please briefly describe your cleaning experience.
        </p>
        <input
          type="text"
          placeholder="e.g. 'I cleaned houses through an agency for 3 years'"
          className="border-2 h-20 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <p className="font-text text-xs font-normal text-end">
        2000 max characters
      </p>
      <h3 className="font-subHeading text-lg font-bold">Your Experience</h3>
      <div className="my-2">
        <p className="font-text text-sm font-semibold leading-5 py-2">
          Ask previous or current clients to give you a review. Your reviews
          will be published on your profile page if approved. You must submit at
          least 3 email addresses.
        </p>
      </div>
      <p className="font-text text-sm font-medium leading-5 py-2">
        You have sent 0 requests so far.
      </p>
      <div className="my-4">
        <p className="font-text text-lg font-normal py-2">
          Add email addresses
        </p>
        <input
          type="text"
          placeholder="email@domain.com"
          className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 my-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
        <input
          type="text"
          placeholder="email@domain.com"
          className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 my-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
        <input
          type="text"
          placeholder="email@domain.com"
          className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 my-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
        <input
          type="text"
          placeholder="email@domain.com"
          className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 my-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
        <p className="font-text text-center text-secondaryColor text-sm font-normal">
          + Enter more email addresses
        </p>
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

export default BasicInfo;
