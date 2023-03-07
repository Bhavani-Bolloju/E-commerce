import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSDfq57cIY8LxHxmMFqz34x0LxuD4OyWE",
  authDomain: "e-commerce-ac3a5.firebaseapp.com",
  projectId: "e-commerce-ac3a5",
  storageBucket: "e-commerce-ac3a5.appspot.com",
  messagingSenderId: "41207717006",
  appId: "1:41207717006:web:6e664a2689312bb62c3ddf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
