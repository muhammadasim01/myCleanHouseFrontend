import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
function FeaturesCardList({ listItems, Title }) {
  return (
    <>
      <ul className="absolute top-20 left-5 p-5 md:top-10 md:left-5">
        {Title == "Services" && (
          <>
            <li className="flex items-center">
              <span className="mt-[-45px] text-secondaryColor ml-[3px]">
                <GoPrimitiveDot />
              </span>
              <span>
                House cleaning, apartment cleaning, condo cleaning, office
                cleaning, holiday rental cleaning
              </span>
            </li>
            <li className="flex items-center">
              <span className="mt-[-20px] text-secondaryColor ml-[1px]">
                <GoPrimitiveDot />
              </span>
              <span>
                Weekly cleaning, bi-weekly, monthly and one time cleaning
              </span>
            </li>
          </>
        )}
        {listItems.map((list) => (
          <li className="flex items-center">
            <span className="text-secondaryColor">
              <GoPrimitiveDot />
            </span>
            <span className="break-words ml-2">{list}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FeaturesCardList;
