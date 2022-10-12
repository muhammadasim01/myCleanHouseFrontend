import React from "react";
import RectangularCard from "./RectangularCard";

function RectangularCards() {
  return (
    <div className="bg-lightShade text-center py-10 sm:w-[full]">
      <h2 className="text-2xl font-bold">Experienced and Trusted Cleaners</h2>
      <p className="py-2 px-1 text-sm font-medium">
        Our cleaners are experienced and trusted by clients
      </p>
      <div className="px-4 flex flex-col sm:flex-row sm:justify-center sm:flex-wrap md:flex-wrap lg:flex-row lg:flex-wrap xl:flex-wrap 2xl:flex-wrap">
        <RectangularCard
          Title="Reliable and trustworthy"
          Description="At My Clean House, we ensure to hire  experienced and reliable cleaners. All of our house cleaners have at least 6 months of professional cleaning experience. This allows us to guarantee a high level of quality and service. They also must take our online free training course to ensure they understand our cleaning standards and safety procedures."
        />
        <RectangularCard
          Title="Background-checked and vetted cleaners"
          Description="Your safety is our number one priority. This is the reason that every cleaner has to go through a criminal record check. This way we can be sure that all of our cleaners are trustworthy and reliable."
        />
        <RectangularCard
          Title="5-star quality cleaners"
          Description="We strive to provide the best possible service and quality. This is why we regularly collect reviews and feedback from our customers.
All of our house cleaners are rated so you can choose which cleaner you want to book based on reviews and location and a detailed description of the cleaner. 
"
        />
        <RectangularCard
          Title="Matching technology cleaning services"
          Description="This era is all about technology. Therefore, we use the latest matching technology to connect you with the best local cleaner. This way, you get a great clean, and the cleaner doesn't have to spend a lot of time travelling to get to your location."
        />
        <RectangularCard
          Title="Backed by our customer service and guarantee"
          Description="You can always count on our customer service support. We are here to answer any of your questions or concerns. In addition, your booking is backed by our company insurance."
        />
      </div>
    </div>
  );
}

export default RectangularCards;
