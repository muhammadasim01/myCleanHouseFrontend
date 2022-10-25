import { FcGoogle } from "react-icons/fc";
import { ImStarFull } from "react-icons/im";
function Reviews() {
  return (
    <div className="border-2 border-darkColor bg-[#FFF4E8] my-10 flex flex-col justify-center items-center">
      <h2 className="text-center font-heading text-3xl font-bold py-5">
        Our Reviews
      </h2>
      <p className="text-center font-text text-sm font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
        eros, nam egestas mi turpis quisque.
      </p>
      <div className="border-2 flex">
        <div className="border-2 border-secondaryColor">
          <FcGoogle />
        </div>
        <div className="border-2 border-primaryColor">
          <h3>5 Star Reviews on Google</h3>
          <p className="text-primaryColor text-xl flex">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
