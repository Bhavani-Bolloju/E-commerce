import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import MainPage from "./components/pages/MainPage";
import { Route, Routes } from "react-router-dom";
import SavedItems from "./components/header/SavedItems";

import { useSelector } from "react-redux";
import CartPage from "./components/pages/CartPage";
import Cart from "./components/header/Cart";
import LoginPage from "./components/pages/LoginPage";
import useAuth from "./components/hooks/use-auth";
import { AuthContext } from "./components/context/authContext";

function App() {
  const { user } = useAuth();

  const cart = useSelector((state) => state.cart);
  return (
    <AuthContext.Provider value={{ user }}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />}>
          <Route index element={<Cart />}></Route>
          <Route path="cartItems" element={<Cart />}></Route>
          <Route path="savedItems" element={<SavedItems />}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
