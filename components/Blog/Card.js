import Image from "next/image";
function Card({ Date, Title, category, description, PostImage }) {
  return (
    <div className="my-5 mx-2 md:mx-4  w-[370px] rounded-md shadow-lg shadow-[#737373] sm:w-[270px] md:w-[330px] lg:w-[350px] xl:w-[370px]">
      <Image src={PostImage} className="bg-contain" />
      <div className="px-4">
        <div className="flex justify-between items-center pt-5">
          <p className="text-[#737373] font-subHeading text-xs font-thin">
            {Date}
          </p>
          <p className="text-[#737373] font-subHeading text-xs font-semibold">
            {category}
          </p>
        </div>
        <h2 className="font-subHeading text-base font-bold py-5 text-darkColor sm:py-3">
          {Title}
        </h2>
        <p className="text-[#737373] text-sm font-semibold pb-4 sm:line-clamp-3 sm:mb-5 md:line-clamp-none lg:line-clamp-3 xl:line-clamp-none">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
