import { useEffect } from "react";

const PrimaryButton = ({ text, bgColor, textColor, height, custom }) => {
  useEffect(() => {
    console.log("color is", bgColor, textColor);
  }, []);
  return (
    <input
      type="button"
      value={text}
      className={`${bgColor} ${textColor} ${height} ${custom} w-[136px] h-[38px] rounded-[8px] cursor-pointer`}
    />
  );
};

export default PrimaryButton;
