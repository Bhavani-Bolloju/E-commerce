import React, { useRef, useState, useContext } from "react";
import classes from "./Login.module.scss";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function SignupPage() {
  const fullnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);
  const [signedIn, setSignedIn] = useState(false);

  const { login } = useContext(AuthContext);
  // console.log(login);

  const navigate = useNavigate();

  const submitHandler = async function (e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (signedIn) {
      try {
        const loginUser = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (!loginUser) throw new Error("failed to login");

        const token = loginUser.user.accessToken;
        login(token);

        navigate("/");
      } catch (error) {
        setError(error.message);
      }
    } else {
      const fullname = fullnameRef.current.value;
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        console.log(user);
        if (!res) throw new Error("user already exists");
        const addData = await addDoc(collection(db, "users"), {
          uid: user.uid,
          fullname: fullname,
        });
        fullnameRef.current.value = "";
        navigate("/");
      } catch (error) {
        setError(error.message);
      }
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className={classes.signup}>
      <form onSubmit={submitHandler}>
        {!signedIn && (
          <input
            type="text"
            placeholder="fullname"
            ref={fullnameRef}
            onFocus={() => {
              setError(false);
            }}
          />
        )}
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
        <button>{signedIn ? "Log In" : "Sign Up"}</button>
        <p className={classes.switch}>
          Already have na Account?{" "}
          <span onClick={() => setSignedIn((prev) => !prev)}>
            {signedIn ? "sign up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;
