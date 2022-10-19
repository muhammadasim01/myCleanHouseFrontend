import { AiFillPlayCircle } from "react-icons/ai";
function FaQCard({ Title, heading, text, Question1, Question2, Question3 }) {
  return (
    <div className="mx-4 border-primaryColor flex-wrap ">
      <div className="flex font-subHeading font-bold text-4xl w-full mt-20">
        <h2>{Title}</h2>
      </div>
      <div className="h-[500px] w-[280px] border-4 border-secondaryColor  p-5 my-5 shadow-[-10px_1px_20px_15px_rgba(0,0,0,0.1)] rounded-md sm:h-[450px] sm:w-[380px] md:w-[315px] lg:w-[580px] xl:w-[650px] sm:mx-4">
        <div className="bg-primaryColor border-2 bg-opacity-20 flex py-5 rounded-md">
          <div className="w-[20%]">
            {/* <AiFillPlayCircle className="h-10 w-10 relative top-3 left-3 text-primaryColor" /> */}
            <AiFillPlayCircle className="h-8 w-8 relative top-2 left-2 text-primaryColor" />
          </div>
          <div className="w-[80%] mt-3">
            <h3 className="font-subHeading text-base font-semibold pb-2 ">
              {heading}
            </h3>
            <p className="font-text text-sm font-normal px-5 line-clamp-3">
              {text}
            </p>
          </div>
        </div>
        <div className="flex items-center border-2 border-primaryColor my-5 pl-2 rounded-md">
          <div className="w-[20%]">
            <AiFillPlayCircle className="h-8 w-8  text-primaryColor" />
          </div>
          <div className="w-[80%] mt-3">
            <h3 className="font-subHeading text-base font-semibold">
              {Question1}
            </h3>
          </div>
        </div>
        <div className="flex items-center border-2 border-primaryColor my-5 p-2 rounded-md">
          <div className="w-[20%]">
            <AiFillPlayCircle className="h-8 w-8  text-primaryColor" />
          </div>
          <div className="w-[80%] mt-3">
            <h3 className="font-subHeading text-base font-semibold">
              {Question2}
            </h3>
          </div>
        </div>
        <div className="flex items-center border-2 border-primaryColor my-5 p-2 rounded-md">
          <div className="w-[20%]">
            <AiFillPlayCircle className="h-8 w-8  text-primaryColor" />
          </div>
          <div className="w-[80%] mt-3">
            <h3 className="font-subHeading text-base font-semibold">
              {Question3}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaQCard;
