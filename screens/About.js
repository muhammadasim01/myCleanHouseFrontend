import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutSecondBanner from "../components/About/AboutSecondBanner";
import OurTeam from "../components/About/OurTeam";
import Reviews from "../components/About/Reviews";
import Story from "../components/About/Story";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header bgColor={"bg-primaryColor"} />
      <AboutBanner />
      <Story />
      <Reviews />
      <OurTeam />
      <AboutSecondBanner />
      <Footer />
    </div>
  );
}

export default About;
