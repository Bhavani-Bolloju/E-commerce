import React from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import emptyCart from "../images/cart.png";
import CartEmpty from "../images/cart-1.svg";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  const orderHandler = function () {
    //if user signed in place order
    //if not create user acccout and then allow user to place order
  };

  return (
    <div className={classes.cart}>
      {cartItems.length <= 0 ? (
        <div className={classes.emptyCart}>
          <span className="text">Empty cart</span>
          <img src={CartEmpty} alt="empty shopping cart" />
          <Link to="/">Shop Now</Link>
        </div>
      ) : (
        <ul className={classes["cart__items"]}>
          {cartItems?.map((item, i) => (
            <CartItem key={item.id + "" + i} item={item} />
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className={classes.order}>
          <button onClick={orderHandler}>Order Now</button>
          <div className={classes.totalAmount}>
            <div className={classes.title}>Total Price:</div>
            <div className={classes.price}>
              ${Math.abs(+totalAmount).toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
