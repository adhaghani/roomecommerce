import React from "react";

import Title from "../../../Component/Title/Title";
import "./About.css";

import AboutCard from "./AboutCard/AboutCard";

import affordable from "/Home/About/affordable.svg";
import eco from "/Home/About/eco.svg";
import quality from "/Home/About/quality.svg";
import saveearth from "/Home/About/saveearth.svg";
const About = () => {
  return (
    <div className="section">
      <Title Title={"About Us"} SubTitle={"What we offer you"} />
      <div className="section-details about">
        <AboutCard
          title={"Save your Money"}
          details={
            "Our product varies in range in affordability. With great quality, we assure you would find product that fits your budget!"
          }
          img={affordable}
        />
        <AboutCard
          title={"Eco-Concius Company"}
          details={
            "Our company are dedicated to sustainability. We aim to provide high quality furniture while maintaining zero carbon emmission."
          }
          img={eco}
        />
        <AboutCard
          title={"High Quality Product"}
          details={
            "Our Product are made from 100% recycled material. With extensive quality control management, We assure that every purchase of our product is worth every penny spent!"
          }
          img={quality}
        />
        <AboutCard
          title={"Environmentally Friendly"}
          details={
            "We are committed at saving the earth so that our next generation can enjoy the nature we enjoy. And to achieve this, We would plant 1 tree for every 5 products purchase. "
          }
          img={saveearth}
        />
      </div>
    </div>
  );
};

export default About;
