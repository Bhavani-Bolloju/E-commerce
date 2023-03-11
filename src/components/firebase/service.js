import {
  query,
  collection,
  where,
  updateDoc,
  arrayUnion,
  getDocs,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

export const getUser = async function (userId) {
  const q = query(collection(db, "users"), where("uid", "==", userId));
  const doc = await getDocs(q);
  const userData = { ...doc.docs[0].data() };
  return { ...userData, docId: doc.docs[0].id };
};

export const addToCart = async function (docId, cart, totalAmount) {
  const data = doc(db, "users", docId);
  await updateDoc(data, {
    cart: cart,
    totalAmount: totalAmount,
  });
};

export const savedItems = async function (docId, saved) {
  const data = doc(db, "users", docId);
  await updateDoc(data, {
    savedItems: saved,
  });
};

export const orderItems = async function (docId, cart) {
  const data = doc(db, "users", docId);
  await updateDoc(data, {
    orderItems: arrayUnion({ cart, date: Date.now() }),
  });
};

export const addAddress = async function (docId, address) {
  const data = doc(db, "users", docId);
  await updateDoc(data, {
    address: address,
  });
};

export const getCartData = async function (uid) {
  const data = query(collection(db, "users"), where("uid", "==", uid));
  const doc = await getDocs(data);
  const cartData = doc.docs[0].data();
  return { cartItems: cartData.cart, totalAmount: cartData.totalAmount };
};

export const getSavedItems = async function (uid) {
  const data = query(collection(db, "users"), where("uid", "==", uid));
  const doc = await getDocs(data);
  const savedData = doc.docs[0].data();

  return savedData.savedItems;
};

export const getAddress = async function () {
  // const data =
};
