import React from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <div className={classes.cart}>
      <h3>Cart Items</h3>
      {cartItems && cartItems.length < 0 ? (
        <p>Empty cart</p>
      ) : (
        <ul className={classes["cart__items"]}>
          {cartItems?.map((item, i) => (
            <CartItem key={item.id + "" + i} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

/*
title
price
quantity

*/
