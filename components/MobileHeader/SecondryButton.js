import React from "react";

function SecondryButton({ Title }) {
  return (
    <div className="bg-secondaryColor h-10 w-28 flex justify-center items-center m-5 rounded-lg">
      <p className="font-subHeading text-lightColor font-normal">{Title}</p>
    </div>
  );
}

export default SecondryButton;
