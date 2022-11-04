function TertiaryButton({ Title }) {
  return (
    <div className="flex justify-center w-32 rounded-full bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50">
      <p className="font-text text-darkColor text-base font-bold py-1  px-2">
        {Title}
      </p>
    </div>
  );
}

export default TertiaryButton;
