import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
function AboutCard() {
  return (
    <div className="h-[310px] w-[270px] flex flex-col justify-center items-center my-8 shadow-[-10px_1px_20px_10px_rgba(0,0,0,0.1)] rounded-sm sm:mx-5">
      <div className="bg-secondaryColor h-[200px] w-[200px] rounded-full mt-2"></div>
      <h3 className="font-subHeading  text-lg font-bold pt-1">Team Member</h3>
      <p className="font-text text-sm font-semibold">Designation</p>
      <p className="flex py-2 px-4 justify-between text-lg w-[120px]">
        <FaFacebookF />
        <AiOutlineTwitter />
        <AiOutlineInstagram />
      </p>
    </div>
  );
}

export default AboutCard;
