import React, { useRef, useState } from "react";
import classes from "./Singup.module.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const fullnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const submitHandler = async function (e) {
    e.preventDefault();
    const fullname = fullnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      console.log(fullname, email, password);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      if (!res) throw new Error("user already exists");
      const addData = await addDoc(collection(db, "users"), {
        uid: user.uid,
        fullname: fullname,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }

    fullnameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className={classes.signup}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="fullname"
          ref={fullnameRef}
          onFocus={() => {
            setError(false);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          ref={emailRef}
          onFocus={() => {
            setError(false);
          }}
        />
        <input
          type="test"
          placeholder="password"
          ref={passwordRef}
          onFocus={() => {
            setError(false);
          }}
        />
        {error && <p className={classes.error}>{error}</p>}
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
