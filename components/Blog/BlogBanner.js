import Image from "next/image";
import React from "react";
import BlogBannerImage from "../../public/assets/Blog-Banner.png";
function BlogBanner() {
  return (
    <div className="bg-[url('../public/assets/Blog-Banner.png')] border-2  border-primaryColor flex items-center justify-center h-[400px] bg-right bg-no-repeat sm:bg-center sm:bg-cover ">
      <h1 className="font-heading text-4xl text-lightColor font-bold">
        Our Blogs
      </h1>
    </div>
  );
}

export default BlogBanner;
