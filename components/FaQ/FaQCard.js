import { AiFillPlayCircle } from "react-icons/ai";
function FaQCard({ Title, heading, text, Question1, Question2, Question3 }) {
  return (
    <div className="w-[300px] flex items-center justify-center flex-col sm:w-[320px] md:w-[45vw] lg:w-[50%]">
      <div className="flex items-center justify-center w-[280px] h-[75px] font-subHeading font-bold text-2xl mt-20 md:w-[90%] md:text-3xl lg:text-4xl">
        <h2>{Title}</h2>
      </div>
      <div className="h-[500px] w-[280px] p-5 my-5 shadow-[-10px_1px_20px_15px_rgba(0,0,0,0.1)] rounded-md sm:mx-4 md:w-[90%] md:h-[580px] lg:h-[530px] ">
        <div className="bg-primaryColor  bg-opacity-20 flex py-5 rounded-md">
          <div className="w-[20%]">
            <AiFillPlayCircle className="h-8 w-8 relative top-2 left-2 text-primaryColor" />
          </div>
          <div className="w-[80%] mt-3">
            <h3 className="font-subHeading text-base font-semibold pb-2 sm:text-lg md:text-xl ">
              {heading}
            </h3>
            <p className="font-text text-sm font-normal px-5 line-clamp-3 md:line-clamp-5">
              {text}
            </p>
          </div>
        </div>
        <div className="flex items-center border-2 border-primaryColor my-5 pl-2 rounded-md">
          <div className="w-[20%] md:my-3">
            <AiFillPlayCircle className="h-8 w-8  text-primaryColor" />
          </div>
          <div className="w-[80%] mt-3 md:my-3">
            <h3 className="font-subHeading text-base font-semibold">
              {Question1}
            </h3>
          </div>
        </div>
        <div className="flex items-center border-2 border-primaryColor my-5 p-2 rounded-md">
          <div className="w-[20%] md:my-3">
            <AiFillPlayCircle className="h-8 w-8  text-primaryColor" />
          </div>
          <div className="w-[80%] mt-3 md:my-3">
            <h3 className="font-subHeading text-base font-semibold">
              {Question2}
            </h3>
          </div>
        </div>
        <div className="flex items-center border-2 border-primaryColor my-5 p-2 rounded-md">
          <div className="w-[20%] md:my-3">
            <AiFillPlayCircle className="h-8 w-8  text-primaryColor" />
          </div>
          <div className="w-[80%] mt-3 md:my-3">
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
