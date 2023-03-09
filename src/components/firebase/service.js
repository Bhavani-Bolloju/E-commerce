import {
  query,
  collection,
  where,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

export const getUser = async function (userId) {
  const q = query(collection(db, "users"), where("uid", "==", userId));
  const doc = await getDoc(q);
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
