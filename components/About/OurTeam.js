import React from "react";
import AboutCard from "./AboutCard";

function OurTeam() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center font-subHeading text-3xl font-bold">
        Our Team
      </h2>
      <p className="text-center font-text text-sm font-semibold leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
        eros, nam egestas mi turpis quisque.
      </p>
      <div className="sm:flex sm:flex-row sm:justify-center sm:flex-wrap sm:px-5 lg:w-[1024px]">
        <AboutCard />
        <AboutCard />
        <AboutCard />
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
    </div>
  );
}

export default OurTeam;
