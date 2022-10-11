import Image from "next/image";

function BoxCard({ imageSrc, Title, Description, buttonText }) {
  return (
    <div
      className="flex flex-col p-5 w-72 rounded-[8px] bg-lightColor items-center justify-center"
      style={{
        backgroundImage: 'url("../public/assets/subtract-2.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Image src={imageSrc} height={100} width={100} />
      <div>
        <h1 className="text-black font-bold mt-3  text-center">{Title}</h1>
        <p className="text-black font-normal text-center h-20">{Description}</p>
      </div>
      <div>
        <button className="text-center mt-5 text-secondaryColor font-bold">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default BoxCard;
