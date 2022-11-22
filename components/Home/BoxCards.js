import React from "react";
import BoxCard from "./BoxCard";
import Box1 from "../../public/assets/Box1.png";
import Box2 from "../../public/assets/Box2.png";
import Box3 from "../../public/assets/Box3.png";
function BoxCards() {
  return (
    <div className="flex md:flex-row w-full flex-col items-center p-10  sm:justify-center relative  bottom-[6rem]  sm:bottom-[8rem]">
      <BoxCard
        imageSrc={Box1}
        Title="Become a Cleaner"
        Description="As a cleaner, make your own schedule and your own rates per hour"
        Text="Start earning and apply now"
        buttonText="Register as a Cleaner"
        background="bg-[url('../public/assets/subtract-1.png')]"
      />
      <BoxCard
        imageSrc={Box2}
        Title="Find a Cleaner"
        Description="As a customer, book your cleaner based on location, rate and reviews"
        buttonText="Find Your Cleaner"
        background="bg-[url('../public/assets/subtract-2.png')]"
      />
      <BoxCard
        imageSrc={Box3}
        Title="Get the App"
        Description="Download the app  and track your cleaner on route"
        buttonText="Download the App"
        background="bg-[url('../public/assets/subtract-3.png')]"
      />
    </div>
  );
}

export default BoxCards;
