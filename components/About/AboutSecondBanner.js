import Image from "next/image";
import Banner from "../../public/assets/About-Banner-2.png";
function AboutSecondBanner() {
  return (
    <div className="pt-10">
      <span className="flex items-center justify-center w-full px-5 ">
        <Image src={Banner} />
      </span>
    </div>
  );
}

export default AboutSecondBanner;
