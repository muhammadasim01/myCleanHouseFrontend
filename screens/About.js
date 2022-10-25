import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import Reviews from "../components/About/Reviews";
import Story from "../components/About/Story";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header bgColor={"bg-primaryColor"} />
      <AboutBanner />
      <Story />
      <Reviews />
    </div>
  );
}

export default About;
