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
  console.log(userId);
  const q = query(collection(db, "users"), where("uid", "==", userId));
  const doc = await getDocs(q);
  const userData = { ...doc.docs[0].data() };
  return { ...userData, docId: doc.docs[0].id };
};

export const addToCart = async function (
  docId,
  title,
  price,
  qty,
  id,
  image,
  discount
) {
  const data = doc(db, "users", docId);
  await updateDoc(data, {
    cart: arrayUnion({ title, price, qty: qty, id, image, discount }),
  });
};

export const orderItems = async function (docId, cart) {
  const data = doc(db, "users", docId);
  await updateDoc(data, {
    orderItems: cart,
  });
};
export const addAddress = async function (docId, address) {
  const data = doc(db, "users", docId);
  await updateDoc(data, {
    address: address,
  });
};

export const getAddress = async function () {
  // const data =
};
