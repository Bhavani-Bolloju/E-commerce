import React, { useState } from "react";
import classes from "./Header.module.scss";
import { BsCart4 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const totalCount = cartItems
    .map((item) => item.qty)
    .reduce((prev, curr) => prev + curr, 0);
  const toggleCartHandler = function () {
    navigate("/cart");
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
          <button className={classes["user_account"]}>
            <CiUser /> <span>Account</span>
          </button>

          <button className={classes.cart} onClick={toggleCartHandler}>
            <BsCart4 />
            <span>cart</span>
            <span className={classes.totalCartItems}>{totalCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
