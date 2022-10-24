import Image from "next/image";
// import subtract1 from "../../public/assets/subtract-1.png";
function BoxCard({ imageSrc, Title, Description, buttonText, Text }) {
  return (
    <div
      className={`flex bg-lightColor my-4 py-5 px-2 h-72 w-72 rounded-[8px]  items-center justify-center shadow-[-10px_1px_20px_15px_rgba(0,0,0,0.1)] sm:h-58 sm:w-56 sm:m-2 lg:h-72 lg:w-72  lg:m-5 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96`}
    >
      <div className="w-[30%] h-64 pt-2 pr-3">
        <Image src={imageSrc} height={75} width={75} />
      </div>
      <div className="w-[70%] h-64">
        <div>
          <h1 className="text-black font-heading text-3xl font-bold mt-3  text-left">
            {Title}
          </h1>
          <p className="text-black font-text text-base font-bold text-left h-20">
            {Description}
          </p>
        </div>
        <div className={!Text ? "mt-5" : undefined}>
          <button className="text-left my-2 text-secondaryColor font-text text-xs font-semibold">
            {Text}
          </button>
          <button className="text-center mt-2 font-text text-sm font-bold text-secondaryColor py-1 px-4 rounded-md border-2 border-secondaryColor">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoxCard;

// style={{
//   backgroundImage: 'url("../../public/assets/subtract-1.png")',
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundPosition: "center center",
// }}

// ../public/assets/subtract-1.png
//bg-[url('../public/assets/subtract-1.png')] drop-shadow-none bg-no-repeat bg-contain bg-right-bottom
