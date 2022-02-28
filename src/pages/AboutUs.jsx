import React from "react";
//Page components
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import Nav from "../components/Nav";

const AboutUs = () => {
  return (
    <>
      <Nav />
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </>
  );
};

export default AboutUs;
