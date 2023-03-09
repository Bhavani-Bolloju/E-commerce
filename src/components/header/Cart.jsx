import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import CartEmpty from "../images/cart-1.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Popup from "../../UI/Popup";

function Cart() {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const orderHandler = function () {
    if (isLoggedIn) {
      //if user signed in place order
      navigate("/order");
    } else {
      //not signed in redirect to login page
      setPopup(true);
    }
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
      {popup && (
        <Popup onClose={setPopup}>
          Please{" "}
          <Link className={classes.login} to="/login">
            login{" "}
          </Link>
          to place an order
        </Popup>
      )}
    </div>
  );
}

export default Cart;
