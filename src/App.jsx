import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/section/HeroSection";
import AllProducts from "./components/catergory/AllProducts";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <HeroSection />
        <AllProducts />
      </main>
    </div>
  );
}

export default App;
