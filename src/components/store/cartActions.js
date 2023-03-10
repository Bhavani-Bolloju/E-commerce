import {
  addToCart,
  getCartData,
  getSavedItems,
  savedItems,
} from "../firebase/service";
import { addFetchData, addFetchSavedItems } from "./cartSlice";

export const sendCartData = function (docId, cartItems, totalAmount) {
  return () => {
    const sendCart = async function () {
      const send = await addToCart(docId, cartItems, totalAmount);
    };
    sendCart();
  };
};
export const fetchCartData = function (uid) {
  return async (dispatch) => {
    const fetchData = async function () {
      const data = await getCartData(uid);
      return data;
    };

    const data = await fetchData();
    dispatch(addFetchData(data));
  };
};

export const sendSavedItems = function (docId, items) {
  return () => {
    const sendData = async function () {
      const send = await savedItems(docId, items);
    };
    sendData();
  };
};

export const fetchSavedItems = function (uid) {
  return async (dispatch) => {
    const fetchData = async function () {
      const data = await getSavedItems(uid);
      return data;
    };

    const data = await fetchData();
    dispatch(addFetchSavedItems(data));
  };
};
