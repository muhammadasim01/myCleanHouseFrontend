import { useEffect } from "react";

const PrimaryButton = ({ text, bgColor, textColor }) => {
  useEffect(() => {
    console.log("color is", bgColor, textColor);
  }, []);
  return (
    <input
      type="button"
      value={text}
      className={`${bgColor} ${textColor}   w-[176px] h-[38px] rounded-[8px]`}
    /> 
  );
};

export default PrimaryButton;
