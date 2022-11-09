import { MdOutlineVerified } from "react-icons/md";
function BackgroundCheck() {
  return (
    <div className="border-2 border-secondaryColor p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-subHeading  text-xl font-bold text-left">
          Background Check
        </h2>
        <MdOutlineVerified className="text-2xl" />
      </div>
    </div>
  );
}

export default BackgroundCheck;
