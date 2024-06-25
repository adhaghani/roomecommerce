import React from "react";

import "./Home.css";

import Footer from "../../Component/Footer/Footer";
import Navigation from "../../Component/Navigation/Navigation";

import Hero from "./Hero/Hero";
import FAQMain from "./FrequentlyAsked/FAQMain";
import About from "./About/About";
import JoinCard from "./JoinCard/JoinCard";

const Home = () => {
  return (
    <div className="Home" id="Home">
      <Navigation isOnHomePage={true} />
      <Hero />
      <div className="Home-Container" id="About">
        <About />
        <JoinCard />
        <FAQMain />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
