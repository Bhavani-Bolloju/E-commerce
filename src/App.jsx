import React, { useContext } from "react";
import Header from "./components/header/Header";
import MainPage from "./components/pages/MainPage";
import { Navigate, Route, Routes } from "react-router-dom";
import SavedItems from "./components/header/SavedItems";
import CartPage from "./components/pages/CartPage";
import Cart from "./components/header/Cart";
import LoginPage from "./components/pages/LoginPage";
import PlaceOrderPage from "./components/pages/PlaceOrderPage";
import AuthContextProvider, {
  AuthContext,
} from "./components/context/authContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />}>
          <Route index element={<Cart />}></Route>
          <Route path="cartItems" element={<Cart />}></Route>
          <Route path="savedItems" element={<SavedItems />}></Route>
        </Route>
        <Route
          path="/login"
          element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/order"
          element={isLoggedIn ? <PlaceOrderPage /> : <Navigate to="/login" />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
