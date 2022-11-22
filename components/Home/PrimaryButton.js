const PrimaryButton = ({
  text,
  bgColor,
  textColor,
  border,
  height,
  custom,
  customCode,
  action,
}) => {
  return (
    <input
      type="button"
      onClick={action}
      value={text}
      className={`${bgColor} ${textColor} ${height} ${custom} ${border} ${customCode} ${border} w-[136px] h-[38px] rounded-[8px] cursor-pointer`}
    />
  );
};

export default PrimaryButton;
