import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
import logo from "../../public/assets/logo.png";
function TopBar() {
  return (
    <div className="w-[100%] h-[90px] flex sm:hidden">
      <div className="w-[80%] flex  ">
        <figure className="bg-primaryColor rounded-md h-[53.94px] w-[53.94px] mt-5 mb-5 ml-5 pt-3">
          <Image src={logo} />
        </figure>
        <div className="flex flex-col items-start p-2 mt-3">
          <h2 className="font-subHeading text-sm">My Clean House App</h2>
          <span className="flex text-primaryColor">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </span>
          <p className="font-text text-sm">3,900+ Reviews</p>
        </div>
      </div>
      <div className="w-[20%] self-center mr-3">
        <button className="flex items-center justify-center font-text font-normal text-lightColor bg-primaryColor px-3 py-1 rounded-full">
          open
        </button>
      </div>
    </div>
  );
}

export default TopBar;
