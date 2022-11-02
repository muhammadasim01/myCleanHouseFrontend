import { BsArrowLeftShort } from "react-icons/bs";
import LargeButton from "./LargeButton";
function SendAsAGift() {
  return (
    <div className="p-5">
      <div className="flex items-center">
        <BsArrowLeftShort className="text-2xl" />
        <p className="font-text  text-sm font-bold">Send as a gift</p>
      </div>
      <div className="border-b-2 w-full py-2 text-[#A9A9A9]"></div>
      <div className="py-5">
        <p className="font-text text-sm font-thin">Step 1/2</p>
      </div>
      <h3 className="font-text text-xl font-bold py-2">
        Personalize your gift
      </h3>
      <p className="font-text text-sm font-bold">Recipient name</p>
      <form className="py-3 h-[350px] flex flex-col justify-between items-center">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full bg-[#E8EDF5] border-[1px] border-secondaryColor py-2 px-2 rounded-md mx-2"
        />
        <div className="flex justify-between w-full">
          <p className="font-text text-base font-bold">Add a digital note</p>
          <p className="font-text text-sm font-normal">Optional</p>
        </div>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full bg-[#E8EDF5] border-[1px] border-secondaryColor py-2 px-2 rounded-md mx-2"
        />
        <input
          type="text"
          name="message"
          className="w-full bg-[#E8EDF5] h-44 border-[1px] border-secondaryColor py-2 px-2 rounded-md mx-2"
        />
      </form>
      <LargeButton Text="Continue" />
    </div>
  );
}

export default SendAsAGift;
