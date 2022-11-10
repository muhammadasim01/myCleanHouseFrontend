import { FaFileUpload } from "react-icons/fa";
import LargeButton from "./LargeButton";
function UploadPhotoId() {
  return (
    <div className="border-2 border-secondaryColor p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-subHeading  text-lg font-bold text-left">
          Upload Photo ID
        </h2>
      </div>
      <div className="relative">
        <div className="h-[80px] w-[80px] rounded-full bg-secondaryColor absolute top-0 right-1"></div>
      </div>
      <div>
        <p className="font-text text-sm font-normal leading-[19px] py-2 text-left">
          To verify your ID please take <br /> a picture of one piece of <br />
          government photo ID and <br /> upload it by clicking the <br /> button
          'Upload Your ID'. This could either be your passport, your driver's
          license, government issued ID card, health card with photo ID,
          Canadian citizenship card, U.S permanent resident card. Your ID will
          not be shown on your profile page.
        </p>
      </div>
      <div className="border-2 border-secondaryColor border-opacity-70 bg-secondaryColor bg-opacity-10 rounded-lg flex flex-col items-center py-3">
        <div>
          <FaFileUpload className="text-5xl text-secondaryColor" />
        </div>
        <div>
          <p className="font text-sm font-normal pt-3">Upload Your Photo ID</p>
        </div>
      </div>
      <LargeButton
        Text="Save & Continue"
        customCode="justify-center"
        color="text-lightColor"
        font="font-bold"
      />
    </div>
  );
}

export default UploadPhotoId;
