import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";
import photo from "../../public/assets/Features-Card-Image2.png";
function FeaturedCard2({ Title, src }) {
  return (
    <div className="px-5 bg-lightColor mt-10 rounded-md shadow-[-10px_1px_20px_15px_rgba(0,0,0,0.1)]">
      <h3 className="font-subHeading text-3xl font-bold py-5">Services</h3>
      <div>
        <Image src={photo} />
      </div>
      <div className="pt-5">
        <span className="flex items-center text-lg font-normal">
          <BsCheckLg className="mr-2 text-2xl mb-28 text-secondaryColor" />
          House cleaning, apartment cleaning,
          <br />
          condo cleaning, office cleaning,
          <br />
          holiday rental cleaning
        </span>
        <span className="flex items-center text-lg font-normal">
          <BsCheckLg className="mr-2 text-xl mb-12 text-secondaryColor" />
          Weekly cleaning,
          <br />
          bi-weekly, monthly
          <br />
          and one time cleaning
        </span>
        <span className="flex items-center text-lg font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-xl text-secondaryColor" />
          Regular cleaning
        </span>
        <span className="flex items-center text-lg font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-xl text-secondaryColor" />
          Deep cleaning
        </span>
        <span className="flex items-center text-lg font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-xl text-secondaryColor" />
          Spring cleaning
        </span>
        <span className="flex items-center text-lg font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-xl text-secondaryColor" />
          Move in/out cleaning
        </span>
        <span className="flex items-center text-lg font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-xl text-secondaryColor" />
          Renovation cleaning
        </span>
        <span className="flex items-center text-lg font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-xl text-secondaryColor" />
          Appliance cleaning
        </span>
        <span className="flex items-center font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-xl text-secondaryColor" />
          Organizing
        </span>
        <span className="flex items-center text-lg font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-xl text-secondaryColor" />
          Laundry
        </span>
        <span className="flex items-center text-lg font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-xl text-secondaryColor" />
          Ironing
        </span>
        <span className="flex items-center text-lg font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-xl text-secondaryColor" />
          Load/Unload Dishwasher
        </span>
      </div>
    </div>
  );
}

export default FeaturedCard2;
