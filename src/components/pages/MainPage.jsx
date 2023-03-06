import React from "react";
import HeroSection from "../section/HeroSection";
import AllProducts from "../catergory/AllProducts";

import { Routes, Route } from "react-router-dom";

function MainPage() {
  return (
    <main className="main">
      <HeroSection />
      <AllProducts />
    </main>
  );
}

export default MainPage;
