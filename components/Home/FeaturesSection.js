import FeaturedCard1 from "./FeaturedCard1";
import FeaturedCard from "./FeaturedCard1";
import FeaturedCard2 from "./FeaturedCard2";

function FeaturesSection() {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h2 className="font-subHeading text-4xl font-bold text-center leading-10">
        My Clean House cleaning services is the best!
      </h2>
      <p className="font-text text-xl font-medium text-center leading-7 mt-8">
        What sets us apart from other home cleaning services is our attention to
        detail, our commitment to customer satisfaction, and our team of
        experienced, vetted cleaners. We go out of our way to make the whole
        process as seamless as possible, from booking to payment to clean-up.
      </p>
      <p className="font-text text-xl font-extrabold text-center leading-7 mt-8">
        Here are some of the benefits of choosing My Clean House for your home
        cleaning needs:
      </p>
      <div className="flex flex-col md:flex-row md:w-[760px] lg:w-[900px] md:justify-between">
        <FeaturedCard1 />
        <FeaturedCard2 />
      </div>
      <p className="font-subHeading text-darkColor text-center text-base font-extrabold py-5 leading-7">
        At My Clean House we aim to make your life easier by taking on those
        extra, time-consuming tasks that you just dont have the time for.
        Whether its mopping your floors, doing the laundry or ironing your
        clothes, well take care of it so you dont have to.
      </p>
      <p className="font-text text-darkColor text-center text-xl font-medium leading-6 mb-5">
        You can add extra tasks to your cleaning schedule in seconds through
        your online account. Just log in and add the changes needed.
      </p>
    </div>
  );
}

export default FeaturesSection;

// const Lists1 = [
//   "Online easy booking",
//   "Pay online via PayPal or Stripe",
//   "Rated 5 star cleaners",
//   "Professional, experienced, and vetted cleaners",
//   "GPS location of your cleaner from your app",
//   "Customize your clean online",
//   "Option to change your bookings plan online",
//   "No contracts",
//   "Can choose the same cleaner depending on availability",
//   "Quality, consistent, and reliable service",
//   "7 days a week support",
//   "2 million dollar liability insurance ",
// ];
// const Lists2 = [
//   "Regular cleaning",
//   "Deep cleaning",
//   "Spring cleaning",
//   "Move in/out cleaning",
//   "Appliance cleaning",
//   "Organizing",
//   "Laundry",
//   "Ironing",
//   "Wash dishes",
// ];
