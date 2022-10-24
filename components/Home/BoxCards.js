import React from "react";
import BoxCard from "./BoxCard";
import Box1 from "../../public/assets/Box1.png";
import Box2 from "../../public/assets/Box2.png";
import Box3 from "../../public/assets/Box3.png";
import subtract1 from "../../public/assets/subtract-2.png";
import subtract2 from "../../public/assets/subtract-2.png";
import subtract3 from "../../public/assets/subtract-2.png";
function BoxCards() {
  return (
    <div className="flex flex-col w-full  items-center p-10 sm:flex-row sm:justify-center relative bottom-[6rem]">
      <BoxCard
        imageSrc={Box1}
        Title="Become a Cleaner"
        Description="As a cleaner, make your own schedule and your own rates per hour"
        Text="Start earning and apply now"
        buttonText="Register as a Cleaner"
      />
      <BoxCard
        imageSrc={Box2}
        Title="Find a Cleaner"
        Description="As a customer, book your cleaner based on location, rate and reviews"
        buttonText="Find Your Cleaner"
      />
      <BoxCard
        imageSrc={Box3}
        Title="Get the App"
        Description="Download the app  and track your cleaner on route"
        buttonText="Download the App"
      />
    </div>
  );
}

export default BoxCards;
