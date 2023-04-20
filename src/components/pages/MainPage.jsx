import React from "react";
import HeroSection from "../section/HeroSection";
import AllProducts from "../catergory/AllProducts";
import { motion } from "framer-motion";

import { Routes, Route } from "react-router-dom";

function MainPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
       transition={{ duration: 0.5 }}
      className="main"
    >
      <HeroSection />
      <AllProducts />
    </motion.main>
  );
}

export default MainPage;
