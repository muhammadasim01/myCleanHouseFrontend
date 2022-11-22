import Image from "next/image";
function BoxCard({
  imageSrc,
  Title,
  Description,
  buttonText,
  Text,
  background,
}) {
  return (
    <div
      className={`flex bg-lightColor my-4 py-5 px-2 h-58 w-[18rem] rounded-[8px] flex-col items-center justify-center shadow-[-10px_1px_20px_15px_rgba(0,0,0,0.1)]
        sm:h-58  sm:m-2 md:h-[25rem] md:w-[18rem] md:px-0 lg:h-[380px] lg:w-72  lg:m-5 xl:h-[380px] xl:w-80 2xl:h-96 2xl:w-96
       ${background} bg-contain bg-no-repeat bg-right-bottom
       `}
    >
      <div className="w-[30%]  pt-2 pr-3">
        <Image src={imageSrc} height={95} width={75} />
      </div>
      <div className="w-[70%] md:h-[70%] lg:h-[70%] flex flex-col items-center">
        <div>
          <h1 className="text-black font-heading text-3xl font-bold mt-3  sm:text-center">
            {Title}
          </h1>
          <p className="text-black font-text text-base font-bold h-20 sm:text-center">
            {Description}
          </p>
        </div>
        <div className={!Text ? "my-3 " : "my-3"}>
          <button className="  text-secondaryColor font-text text-xs font-semibold">
            {Text}
          </button>
        </div>
      </div>
      <button className="font-text text-sm font-bold text-secondaryColor py-1 px-4 rounded-md border-2 border-secondaryColor">
        {buttonText}
      </button>
    </div>
  );
}

export default BoxCard;
