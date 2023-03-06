import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import MainSection from "./components/main/MainSection";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/header/Cart";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
