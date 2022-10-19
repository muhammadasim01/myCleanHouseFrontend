import PostImage1 from "../../public/assets/Post-Thumbnail-1.png";
import PostImage2 from "../../public/assets/Post-Thumbnail-2.png";
import PostImage3 from "../../public/assets/Post-Thumbnail-3.png";
import PostImage4 from "../../public/assets/Post-Thumbnail-4.png";
import Button from "./Button";
import Card from "./Card";

function BlogPost() {
  return (
    <div className="flex items-center justify-center w-[108%] sm:w-[100%] ">
      <div className="h-auto py-10 px-4 flex items-center w-[100%] justify-center flex-col  ">
        <div className="flex items-center w-[100%] sm:px-8 sm:w-[100%] lg:w-[70%]">
          <h2 className="text-sm font-subHeading font-semibold sm:text-lg">
            Filter By:
          </h2>
          <Button Title="All" />
          <Button Title="Date" />
          <Button Title="Category" />
        </div>
        <div className="flex items-center justify-center flex-col  sm:flex-row sm:flex-wrap  self-center  ">
          <Card
            PostImage={PostImage1}
            Date="03/10/2022"
            Title="Lorem ipsum dolor sit consectetur amet, adipiscing elit."
            category="Blog of the day"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet elit facilisis id elit. Congue congue mattis massa, aliquet augue malesuada aliquet. Pharetra nibh eu vel, mattis gravida est vitae amet enim. Amet ornare adipiscing quisque vulputate condimentum at amet."
          />
          <Card
            PostImage={PostImage2}
            Date="01/10/2022"
            Title="Lorem ipsum dolor sit consectetur amet, adipiscing elit."
            category="Cleaners"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet elit facilisis id elit. Congue congue mattis massa, aliquet augue malesuada aliquet. Pharetra nibh eu vel, mattis gravida est vitae amet enim. Amet ornare adipiscing quisque vulputate condimentum at amet."
          />
          <Card
            PostImage={PostImage3}
            Date="01/10/2022"
            Title="Lorem ipsum dolor sit consectetur amet, adipiscing elit."
            category="Cleaners"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet elit facilisis id elit. Congue congue mattis massa, aliquet augue malesuada aliquet. Pharetra nibh eu vel, mattis gravida est vitae amet enim. Amet ornare adipiscing quisque vulputate condimentum at amet."
          />
          <Card
            PostImage={PostImage2}
            Date="01/10/2022"
            Title="Lorem ipsum dolor sit consectetur amet, adipiscing elit."
            category="Cleaners"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet elit facilisis id elit. Congue congue mattis massa, aliquet augue malesuada aliquet. Pharetra nibh eu vel, mattis gravida est vitae amet enim. Amet ornare adipiscing quisque vulputate condimentum at amet."
          />
          <Card
            PostImage={PostImage4}
            Date="27/09/2022"
            Title="Lorem ipsum dolor sit consectetur amet, adipiscing elit."
            category="Cleaners"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet elit facilisis id elit. Congue congue mattis massa, aliquet augue malesuada aliquet. Pharetra nibh eu vel, mattis gravida est vitae amet enim. Amet ornare adipiscing quisque vulputate condimentum at amet."
          />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
