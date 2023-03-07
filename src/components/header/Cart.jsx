import React from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

function Cart() {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  return (
    <div className={classes.cart}>
      {cartItems && cartItems.length <= 0 ? (
        <p className={classes.emptyCart}>Empty cart</p>
      ) : (
        <ul className={classes["cart__items"]}>
          {cartItems?.map((item, i) => (
            <CartItem key={item.id + "" + i} item={item} />
          ))}
        </ul>
      )}
      <div className={classes.totalAmount}>
        <div className={classes.title}>Total Price:</div>
        <div className={classes.price}>
          ${Math.abs(+totalAmount).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default Cart;
