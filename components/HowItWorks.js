import React from "react";
import ServiceCard from "./ServiceCard";
function ServiceSection() {
  return (
    <div className="bg-lightShade  text-left px-5 py-10 sm:flex sm:items-center sm:justify-center sm:flex-col">
      <h2 className="font-heading text-2xl font-bold lg:text-3xl xl:text-4xl">
        How it works
      </h2>
      <p className="py-2 px-1 text-md font-text font-semibold">
        Here is how the cleaning process work:
      </p>
      <div className="md:flex md:flex-row md:justify-center md:w-full md:flex-wrap">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}

export default ServiceSection;
