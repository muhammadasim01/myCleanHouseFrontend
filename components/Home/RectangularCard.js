import Image from "next/image";
// import subtract1 from "../../public/assets/subtract-1.png";
function RectangularCard({ imageSrc, Title, Description }) {
  return (
    <div className="flex bg-lightColor rounded-lg mx-4 my-10 shadow-[-10px_1px_20px_15px_rgba(0,0,0,0.1)]">
      <div className="w-[25%] pt-10 pl-2">
        <Image src={imageSrc} />
      </div>
      <div className="w-[75%] pt-10">
        <h2 className="font-subHeading px-3 text-3xl font-bold text-left">
          {Title}
        </h2>
        <p className="font-text text-xl font-normal text-left px-5 py-5">
          {Description}
        </p>
      </div>
    </div>
  );
}

export default RectangularCard;

// style={{
//   backgroundImage: 'url("../../public/assets/subtract-1.png")',
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundPosition: "center center",
// }}

// ../public/assets/subtract-1.png
//bg-[url('../public/assets/subtract-1.png')] drop-shadow-none bg-no-repeat bg-contain bg-right-bottom
