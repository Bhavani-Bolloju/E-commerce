import React from "react";
import HeroSection from "../section/HeroSection";
import AllProducts from "../catergory/AllProducts";

import { Routes, Route } from "react-router-dom";

function MainSection() {
  return (
    <main className="main">
      <HeroSection />
      <AllProducts />
    </main>
  );
}

export default MainSection;
