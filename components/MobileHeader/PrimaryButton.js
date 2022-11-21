function PrimaryButton({ Title, logo, customCode, bgColor, action }) {
  return (
    <button
      onClick={action}
      className={`flex justify-between items-center w-[90%] py-2 px-4 ${customCode} rounded-3xl`}
    >
      <div
        className={`text-lightColor ${bgColor}  h-7 w-7 text-2xl rounded-full flex justify-center items-center`}
      >
        {logo}
      </div>
      <div>
        <p className="font-text text-lightColor text-lg font-bold">{Title}</p>
      </div>
    </button>
  );
}

export default PrimaryButton;
