import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";
import photo from "../../public/assets/Features-Card-Image1.png";
function FeaturedCard1({ Title, src }) {
  return (
    <div className="px-5 bg-lightColor mt-10 rounded-md shadow-[-10px_1px_20px_15px_rgba(0,0,0,0.1)]">
      <h3 className="font-subHeading text-3xl font-bold py-5">Benifits</h3>
      <div>
        <Image src={photo} />
      </div>
      <div className="py-5">
        <span className="flex items-center text-xl font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-md text-secondaryColor" />
          Online easy booking
        </span>
        <span className="flex items-center text-xl font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-md text-secondaryColor" />
          Pay online
        </span>
        <span className="flex items-center text-xl font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-md text-secondaryColor" />
          Rated 5 star cleaners
        </span>
        <span className="flex items-center text-xl font-normal ">
          <BsCheckLg className="mr-2 mb-6 text-secondaryColor" />
          Professional,experienced, <br />
          and vetted cleaners.
        </span>
        <span className="flex items-center text-xl font-normal ">
          <BsCheckLg className="mr-2 mb-6 text-secondaryColor" />
          GPS location of your
          <br />
          Cleaner from your app
        </span>
        <span className="flex items-center text-xl font-normal ">
          <BsCheckLg className="mr-2 mb-6 text-secondaryColor" />
          Customize your clean
          <br />
          online
        </span>
        <span className="flex items-center text-xl font-normal ">
          <BsCheckLg className="mr-2 mb-6 text-secondaryColor" />
          Option to change your
          <br />
          bookings plan online
        </span>
        <span className="flex items-center text-xl font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-md text-secondaryColor" />
          No contracts
        </span>
        <span className="flex items-center text-xl font-normal">
          <BsCheckLg className="mr-2 mb-12 text-2xl text-secondaryColor" /> Can
          choose the same
          <br />
          cleaner depending on availability
        </span>
        <span className="flex items-center text-xl font-normal ">
          <BsCheckLg className="mr-2 mb-6 text-secondaryColor" />
          Quality, consistent,and
          <br />
          reliable service
        </span>
        <span className="flex items-center text-xl font-normal mb-2 ">
          <BsCheckLg className="mr-2 text-md text-secondaryColor" />7 days a
          week support
        </span>
        <span className="flex items-center text-xl font-normal ">
          <BsCheckLg className="mr-2 mb-6 text-secondaryColor" />
          2 million dollar liability
          <br />
          insurance
        </span>
      </div>
    </div>
  );
}

export default FeaturedCard1;
