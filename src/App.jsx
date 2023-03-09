import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import MainPage from "./components/pages/MainPage";
import { Route, Routes } from "react-router-dom";
import SavedItems from "./components/header/SavedItems";

import { useSelector } from "react-redux";
import CartPage from "./components/pages/CartPage";
import Cart from "./components/header/Cart";
import LoginPage from "./components/pages/LoginPage";
import PlaceOrderPage from "./components/pages/PlaceOrderPage";
import AuthContextProvider from "./components/context/authContext";

function App() {
  const cart = useSelector((state) => state.cart);
  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />}>
          <Route index element={<Cart />}></Route>
          <Route path="cartItems" element={<Cart />}></Route>
          <Route path="savedItems" element={<SavedItems />}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/order" element={<PlaceOrderPage />}></Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
