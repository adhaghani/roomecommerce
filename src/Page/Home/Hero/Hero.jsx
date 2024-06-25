import React from "react";

import "./Hero.css";
import heroimg from "/Home/Hero/heroimg.svg";
const Hero = () => {
  return (
    <div className="heading-container">
      <div className="heading">
        <div className="title">
          <h1>Hey there,</h1>
          <h1>
            Welcome to <span>Your</span> Room!
          </h1>
        </div>
        <div className="images">
          <img src={heroimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
