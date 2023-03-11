import React, { useContext, useEffect } from "react";
import Header from "./components/header/Header";
import MainPage from "./components/pages/MainPage";
import { Navigate, Route, Routes } from "react-router-dom";
import SavedItems from "./components/header/SavedItems";
import CartPage from "./components/pages/CartPage";
import Cart from "./components/header/Cart";
import LoginPage from "./components/pages/LoginPage";
import PlaceOrderPage from "./components/pages/PlaceOrderPage";
import { AuthContext } from "./components/context/authContext";
import { useDispatch, useSelector } from "react-redux";
import { sendCartData, sendSavedItems } from "./components/store/cartActions";
import { fetchCartData, fetchSavedItems } from "./components/store/cartActions";

function App() {
  const { isLoggedIn, userDetails } = useContext(AuthContext);
  const { cartItems, totalAmount, savedItems, status } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (userDetails) {
      dispatch(fetchCartData(userDetails?.uid));
    }
  }, [userDetails?.uid]);

  useEffect(() => {
    if (userDetails?.docId && cartItems && status) {
      dispatch(sendCartData(userDetails?.docId, cartItems, totalAmount));
    }
  }, [userDetails?.docId, cartItems, totalAmount, status]);

  useEffect(() => {
    if (userDetails?.uid) {
      dispatch(fetchSavedItems(userDetails?.uid));
    }
  }, [userDetails?.uid]);

  useEffect(() => {
    if (status && userDetails?.docId) {
      dispatch(sendSavedItems(userDetails?.docId, savedItems));
    }
  }, [savedItems, userDetails?.docId, status]);

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
          element={
            isLoggedIn && cartItems.length !== 0 ? (
              <PlaceOrderPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
