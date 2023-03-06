import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import MainPage from "./components/pages/MainPage";
import { Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import CartPage from "./components/pages/CartPage";
import Cart from "./components/header/Cart";

function App() {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />}>
          <Route index element={<Cart />}></Route>
          <Route path="cartItems" element={<Cart />}></Route>
          <Route path="savedItems" element={<p>saved Items</p>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
