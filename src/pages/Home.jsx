import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import AboutMe from "../components/AboutMe";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <AboutMe />
    </div>
  );
};

export default Home;
