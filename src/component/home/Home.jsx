import React from "react";

import Hero from "../hero/Hero";
import { Link } from "react-router-dom";
import Projects from "../projects/Projects";
import Services from "../services/Services";
import WhyWe from "./WhyWe";
import OurServices from "../services/OurServices";

function Home() {
  return (
    <div>
      <Link to="/">
        <Hero />
        {/* <Projects /> */}
        <WhyWe />
        <OurServices />
      </Link>
    </div>
  );
}

export default Home;
