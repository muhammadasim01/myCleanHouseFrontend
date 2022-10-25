import { FcGoogle } from "react-icons/fc";
import { ImStarFull } from "react-icons/im";
function Reviews() {
  return (
    <div className="bg-[#FFF4E8] my-10 py-10 flex flex-col justify-center items-center">
      <h2 className="text-center font-heading text-3xl font-bold py-5">
        Our Reviews
      </h2>
      <p className="text-center font-text text-sm font-semibold sm:px-20 md:mx-40">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
        eros, nam egestas mi turpis quisque.
      </p>
      <div className="flex py-5">
        <div className="text-5xl md:text-6xl lg:text-7xl">
          <FcGoogle />
        </div>
        <div className="font-subHeading text-base font-bold px-2 sm:text-lg md:text-xl">
          <h3>5 Star Reviews on Google</h3>
          <p className="text-primaryColor text-xl flex md:py-2 md:px-1">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
          </p>
        </div>
      </div>
      <button className="text-center mt-2 font-text text-base font-normal text-lightColor py-1 px-4 rounded-md bg-primaryColor my-3">
        See All Our Reviews
      </button>
    </div>
  );
}

export default Reviews;
