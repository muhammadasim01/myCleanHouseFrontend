import FeaturesCard from "./FeaturesCard";

function FeaturesSection() {
  const Lists1 = [
    "Online easy booking",
    "Pay online via PayPal or Stripe",
    "Rated 5 star cleaners",
    "Professional, experienced, and vetted cleaners",
    "GPS location of your cleaner from your app",
    "Customize your clean online",
    "Option to change your bookings plan online",
    "No contracts",
    "Can choose the same cleaner depending on availability",
    "Quality, consistent, and reliable service",
    "7 days a week support",
    "2 million dollar liability insurance ",
  ];
  const Lists2 = [
    "Regular cleaning",
    "Deep cleaning",
    "Spring cleaning",
    "Move in/out cleaning",
    "Appliance cleaning",
    "Organizing",
    "Laundry",
    "Ironing",
    "Wash dishes",
  ];
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="flex text-center text-xl font-bold sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        My Clean House cleaning services is the best!
      </h1>
      <p className="text-center text-base font-normal leading-5 py-4">
        What sets us apart from other home cleaning services is our attention to
        detail, our commitment to <br /> customer satisfaction, and our team of
        experienced, vetted cleaners. We go out of our way to make the <br />
        whole process as seamless as possible, from booking to payment to
        clean-up.
      </p>
      <h2 className="text-center text-base font-bold leading-4">
        Here are some of the benefits of choosing My Clean House for your home
        cleaning needs:
      </h2>
      <div className="flex flex-col justify-center md:flex-row">
        <FeaturesCard Title="Benifits" listItems={Lists1} />
        <FeaturesCard Title="Services" listItems={Lists2} />
      </div>
      <p className="text-center text-base font-normal leading-6 mt-5 lg:px-20">
        At My Clean House we aim to make your life easier by taking on those
        extra, time-consuming tasks that you just dont have the time for.
        Whether its mopping your floors, doing the laundry or ironing your
        clothes, well take care of it so you dont have to.
      </p>
      <p className="text-center text-base font-normal mt-10 lg:px-20">
        You can add extra tasks to your cleaning schedule in seconds through
        your online account. Just log in and let us know what you need to do.
      </p>
    </div>
  );
}

export default FeaturesSection;
