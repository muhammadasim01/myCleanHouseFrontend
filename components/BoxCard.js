import Image from "next/image";
import Box1 from "../public/assets/Box1.png";
function BoxCard() {
  return (
    <div className="w-64 h-64 bg-gray-200 p-10 rounded-md">
      <Image src={Box1} height={100} width={100} />
      <h1 className="text-black font-bold">Become a Cleaner</h1>
      <p className="text-black font-normal">
        As a cleaner,make your own schedule and your own rates per hour
      </p>
    </div>
  );
}

export default BoxCard;
