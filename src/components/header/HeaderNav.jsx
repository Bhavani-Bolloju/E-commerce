import React, { useState, useCallback, useContext } from "react";
import classes from "./HeaderNav.module.scss";
import { BsCart4 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { AuthContext } from "../context/authContext";
import cart from "../images/header-cart.svg";

function Header() {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  const { isLoggedIn, logout } = useContext(AuthContext);

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
          {/* <img src={cart} alt="cart" /> */}
          <span>shop cart</span>
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
                  {!isLoggedIn && (
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
                  {isLoggedIn && (
                    <button
                      onClick={() => {
                        signOut(auth);
                        logout();
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
