function TertiaryButton({ Title }) {
  return (
    <div className="flex justify-center w-32 rounded-full bg-[#E8EDF5] ">
      <p className="font-text text-darkColor text-base font-bold py-1  px-2">
        {Title}
      </p>
    </div>
  );
}

export default TertiaryButton;
