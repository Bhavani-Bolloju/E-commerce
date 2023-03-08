import React, { useState, useCallback, useContext } from "react";
import classes from "./Header.module.scss";
import { BsCart4 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { AuthContext } from "../context/authContext";

function Header() {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  const { user } = useContext(AuthContext);

  const totalCount = cartItems
    .map((item) => item.qty)
    .reduce((prev, curr) => prev + curr, 0);

  const toggleCartHandler = function () {
    navigate("/cart");
  };

  const userAccountHandler = function () {
    setOpen((prev) => !prev);
  };

  return (
    <header className={classes.header}>
      <div className={classes["header-container"]}>
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          Your shop
        </h1>
        <div className={classes["header-btns"]}>
          <div className={classes.user}>
            <button
              className={classes["user_account"]}
              onClick={() => userAccountHandler()}
            >
              <CiUser /> <span>Account</span>
            </button>
            {open && (
              <ul className={classes["user-auth"]}>
                <li>
                  {!user && (
                    <button
                      onClick={() => {
                        navigate("/login");
                        setOpen(false);
                      }}
                    >
                      Signup/login
                    </button>
                  )}
                </li>

                <li>
                  {user && (
                    <button
                      onClick={() => {
                        signOut(auth);
                        setOpen(false);
                      }}
                    >
                      Log out
                    </button>
                  )}
                </li>
              </ul>
            )}
          </div>

          <button className={classes.cart} onClick={toggleCartHandler}>
            <BsCart4 />
            <span>cart</span>
            <span className={classes.badge}>{totalCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
