import React from "react";
import "./About.css";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="about_container">
        <div className="about_div">
          <Benefits />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
