function LargeButton({ Text }) {
  return (
    <div className="border-2 border-secondaryColor bg-secondaryColor py-2 my-5 rounded-lg flex items-center justify-center">
      <p className="font-text text-xl font-bold text-lightColor">{Text}</p>
    </div>
  );
}

export default LargeButton;
