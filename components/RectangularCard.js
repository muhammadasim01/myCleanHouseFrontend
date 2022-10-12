import React from "react";

function RectangularCard({ Title, Description }) {
  return (
    <div className="bg-secondaryColor px-8 mx-2 pt-2 pb-4 rounded-md my-5 sm:h-[220px] sm:w-[280px] lg:w-[400px] lg:h-[180px] xl:w-[500px] 2xl:w-[700px]">
      <h3 className="py-2 text-lightColor text-left text-lg font-bold">
        {Title}
      </h3>
      <p className="text-lightColor text-left text-xs font-light leading-4 lg:font-normal lg:leading-5">
        {Description}
      </p>
    </div>
  );
}

export default RectangularCard;
