import React from "react";
import BlogBanner from "../components/Blog/BlogBanner";
import BlogPost from "../components/Blog/BlogPost";
import Footer from "../components/Footer";
import Header from "../components/Header";
function Blogs() {
  return (
    <div>
      <Header bgColor={" bg-primaryColor"} />
      <BlogBanner />
      <BlogPost />
      <Footer />
    </div>
  );
}

export default Blogs;
