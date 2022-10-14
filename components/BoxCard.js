import Image from "next/image";

function BoxCard({ imageSrc, Title, Description, buttonText }) {
  return (
    <div
      className="flex flex-col my-4 p-5 h-64 w-72 rounded-[8px] bg-lightColor border-2 border-darkColor items-center justify-center sm:h-58 sm:w-56 sm:m-2 lg:h-72 lg:w-72  lg:m-5 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96"
      style={{
        backgroundImage: 'url("../public/assets/subtract-2.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Image src={imageSrc} />
      <div>
        <h1 className="text-black font-bold mt-3  text-center">{Title}</h1>
        <p className="text-black font-normal text-center h-20">{Description}</p>
      </div>
      <div>
        <button className="text-center mt-2 text-secondaryColor font-bold">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default BoxCard;
