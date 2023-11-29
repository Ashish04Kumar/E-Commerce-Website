import React from "react";

import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";

function Home() {
  const data = {
    name: "Ashish Store",
  };
  return (
    <>
      <HeroSection myData={data} />;
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
}

export default Home;
