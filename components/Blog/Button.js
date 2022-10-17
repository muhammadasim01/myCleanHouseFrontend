import React from "react";

function Button({ Title }) {
  return (
    <div className="h-[30px] w-[80px] border-2 border-primaryColor flex items-center justify-center rounded-md mx-2 sm:w-[100px] sm:mx-4">
      <p className="text-primaryColor">{Title}</p>
    </div>
  );
}

export default Button;
