import React, { useContext, useEffect } from "react";
import Header from "./components/header/HeaderNav";
import MainPage from "./components/pages/MainPage";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SavedItems from "./components/header/SavedItems";
import CartPage from "./components/pages/CartPage";
import ProductDetailPage from "./components/pages/ProductDetailPage";
import Cart from "./components/header/Cart";
import LoginPage from "./components/pages/LoginPage";
import PlaceOrderPage from "./components/pages/PlaceOrderPage";
import { AuthContext } from "./components/context/authContext";
import { useDispatch, useSelector } from "react-redux";
import { sendCartData, sendSavedItems } from "./components/store/cartActions";
import { fetchCartData, fetchSavedItems } from "./components/store/cartActions";
import { confirmAdd, confirmRemove } from "./components/store/cartSlice";
import Popup from "./UI/Popup";
import { AnimatePresence } from "framer-motion";

function App() {
  const { isLoggedIn, userDetails,confirmLogout,
logoutNotifyHandler
 } = useContext(AuthContext);
  const { cartItems, totalAmount, savedItems, status, cartNotification, itemRemoveNotification,  } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartNotification) {
      setTimeout(() => {
       dispatch(confirmAdd()); 
      }, 500)
    }
  }, [cartNotification])
  

  useEffect(() => {
    if (itemRemoveNotification) {
      setTimeout(() => {
       dispatch(confirmRemove()); 
      }, 500)
    }
  },[itemRemoveNotification])


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

  useEffect(() => {
    if (confirmLogout) {
      setTimeout(() => {
        logoutNotifyHandler()
      }, 1000);
    }
  }, [confirmLogout]);

const location =  useLocation()

  return (
    <div>
      <Header />
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/:productId" element={<ProductDetailPage />} />
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
      </AnimatePresence>

       {cartNotification && <div className='cart-confirmation'>
        <Popup>Added to the cart</Popup>
      </div>}
       {itemRemoveNotification && <div className='cart-confirmation'>
        <Popup>Removed from the cart</Popup>
        </div>}
       {confirmLogout && <div className='cart-confirmation'>
        <Popup>Logged Out</Popup>
      </div>}
    </div>
  );
}

export default App;
