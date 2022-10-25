import Image from "next/image";
import storyImage from "../../public/assets/About-Story.png";
function Story() {
  return (
    <div className="flex flex-col-reverse items-center justify-center w-full sm:flex-row">
      <div className="w-[100%] h-auto">
        <h2 className="text-center font-heading text-3xl font-bold px-8 pt-10 md:text-left  md:mx-10 lg:mx-20">
          Our Story
        </h2>
        <p className="text-center font-text text-base font-semibold leading-6 px-7 py-5 line-clamp-3 sm:line-clamp-4 lg:line-clamp-5 md:text-left md:mx-10 lg:mx-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          eros, nam egestas mi turpis quisque. Sed volutpat urna metus eget.
          Diam neque lacus quis nullam proin risus. Pharetra, orci luctus
          malesuada congue ut. Volutpat elit porta leo et.
        </p>
        <p className="text-center font-text text-base font-semibold leading-6 px-7 py-5 line-clamp-3 sm:line-clamp-4 lg:line-clamp-5 md:text-left md:mx-10 lg:mx-20">
          A, lorem elit bibendum faucibus ultrices. Aenean mauris arcu rhoncus
          ac turpis viverra. Justo, lacinia non nam ut iaculis. Parturient est
          nibh nisi dictum duis hendrerit commodo placerat dui. At tempor
          aliquam lectus justo. Urna nisi sapien amet nunc cursus urna duis
          tellus luctus.
        </p>
        <p className="text-center font-text text-base font-semibold leading-6 px-7 py-5 line-clamp-3 sm:line-clamp-4 sm:mb-5 lg:line-clamp-5 md:text-left md:mx-10 lg:mx-20">
          Id at ut ultrices justo, non senectus vestibulum, tincidunt non. Sit
          in sed vulputate aenean mauris diam, enim cras. Parturient vitae
          tortor augue varius. Enim mattis ut tincidunt curabitur ultricies nunc
          sem. Et quam morbi aenean at. Cursus urna amet ante ac semper. Eu,
          diam iaculis dictumst ipsum elementum quis et.
        </p>
      </div>
      <div className="w-[100%] p-5 mt-10 flex justify-center sm:h-auto">
        <Image src={storyImage} />
      </div>
    </div>
  );
}

export default Story;
