import RectCardImage1 from "../../public/assets/rectangleCard-1.png";
import RectCardImage2 from "../../public/assets/rectangleCard-2.png";
import RectCardImage3 from "../../public/assets/rectangleCard-3.png";
import RectCardImage4 from "../../public/assets/rectangleCard-4.png";
import RectCardImage5 from "../../public/assets/rectangleCard-5.png";
import RectangularCard from "./RectangularCard";
function ServiceSection() {
  return (
    <div className="bg-lightShade text-center py-10 sm:w-[full]">
      <h2 className="font-suBheading text-4xl font-bold">
        Experienced & Trusted Cleaners
      </h2>
      <p className="font-text py-2 px-1 text-md font-semibold">
        Our cleaners are experienced and trusted by clients
      </p>
      <div className="flex justify-center flex-wrap">
        <RectangularCard
          Title="Reliable and Trustworthy"
          Description="At My Clean House, we ensure to hire experienced and reliable
          cleaners. All of our house cleaners have at least 3 months of
          professional cleaning experience. This allows us to guarantee a high
          level of quality and service. They also must take our online free
          training course and pass our cleaner certification to ensure they
          understand our cleaning standards and safety procedures."
          imageSrc={RectCardImage1}
        />
        <RectangularCard
          Title="Background checked and vetted cleaners"
          Description="Your safety is our number one priority. 
          This is the reason that every cleaner has to go through a criminal record check.
           This way we can be sure that all of our cleaners are trustworthy and reliable. "
          imageSrc={RectCardImage2}
        />
        <RectangularCard
          Title="5-star quality cleaners"
          Description="We strive to provide the best possible service and quality. 
          This is why we regularly collect reviews and feedback from our customers.
          All of our house cleaners are rated so you can choose which cleaner you want to book 
          based on reviews and location and a detailed description of the cleaner. 
          "
          imageSrc={RectCardImage3}
        />
        <RectangularCard
          Title="Matching technology cleaning services"
          Description="This era is all about technology. Therefore, we use the latest matching technology to connect
           you with the best local cleaner. This way, you get a great clean, and the cleaner doesn't have to spend a 
           lot of time travelling to get to your location.  
          "
          imageSrc={RectCardImage4}
        />
        <RectangularCard
          Title="Backed by our company insurance"
          Description="You can feel assured when you book  through us, 
          your cleaning is covered by our 2 million dollar liability insurance.  
          "
          imageSrc={RectCardImage5}
        />
      </div>
    </div>
  );
}

export default ServiceSection;
