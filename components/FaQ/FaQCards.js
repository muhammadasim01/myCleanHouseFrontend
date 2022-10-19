import React from "react";
import FaQCard from "./FaQCard";

function FaQCards() {
  return (
    <div className=" flex flex-col w-[100%] border-4 border-secondaryColor sm:flex-row justify-center items-center sm:w-full">
      <div className="flex flex-col w-full border-4 border-primaryColor items-center justify-center bg-lightColor sm:flex-row sm:flex-wrap  lg:w-[1700px]">
        {/* <h1>Hello World</h1> */}
        <FaQCard
          Title="How it works"
          heading="How do I trial the service?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames pellentesque sit enim tellus molestie. Eget nunc aliquam tristique turpis tortor eu. Lobortis vel."
          Question1="How does pricing work?"
          Question2="Will I always have the same cleaner?"
          Question3="Is there a minimum contract?"
        />
        <FaQCard
          Title="Cleaners"
          heading="How do I trial the service?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames pellentesque sit enim tellus molestie. Eget nunc aliquam tristique turpis tortor eu. Lobortis vel."
          Question1="How does pricing work?"
          Question2="Will I always have the same cleaner?"
          Question3="Is there a minimum contract?"
        />
        <FaQCard
          Title="Account & Bills"
          heading="How do I trial the service?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames pellentesque sit enim tellus molestie. Eget nunc aliquam tristique turpis tortor eu. Lobortis vel."
          Question1="How does pricing work?"
          Question2="Will I always have the same cleaner?"
          Question3="Is there a minimum contract?"
        />
        <FaQCard
          Title="Access & Spare Keys"
          heading="How do I trial the service?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames pellentesque sit enim tellus molestie. Eget nunc aliquam tristique turpis tortor eu. Lobortis vel."
          Question1="How does pricing work?"
          Question2="Will I always have the same cleaner?"
          Question3="Is there a minimum contract?"
        />
        <FaQCard
          Title="Cleaning Products"
          heading="How do I trial the service?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames pellentesque sit enim tellus molestie. Eget nunc aliquam tristique turpis tortor eu. Lobortis vel."
          Question1="How does pricing work?"
          Question2="Will I always have the same cleaner?"
          Question3="Is there a minimum contract?"
        />
        <FaQCard
          Title="Service to choose"
          heading="How do I trial the service?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames pellentesque sit enim tellus molestie. Eget nunc aliquam tristique turpis tortor eu. Lobortis vel."
          Question1="How does pricing work?"
          Question2="Will I always have the same cleaner?"
          Question3="Is there a minimum contract?"
        />
      </div>
    </div>
  );
}

export default FaQCards;
