import React from "react";
import classes from "./CartItem.module.scss";
import { addItem, removeItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ item }) {
  const { id, price, qty, discount, title, image } = item;
  const dispatch = useDispatch();

  const increaseQuantityHandler = function () {
    dispatch(addItem({ ...item, qty: 1 }));
  };
  const descreaseQuantityHandler = function () {
    dispatch(removeItem(id));
  };

  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={image} alt={title} />
        <p className={classes.discount}>-{discount}% off</p>
      </div>
      <div className={classes["item-content"]}>
        <p className={classes["item__title"]}>{title}</p>
        <p>Price: ${price}</p>
        <p className={classes["item__totalQty"]}>qty: {qty}</p>
      </div>
      <div className={classes["item__qty"]}>
        <div>
          {" "}
          (qty x price) :
          <span className={classes.totalPrice}>
            {" "}
            ${(+qty * +price).toFixed(2)}{" "}
          </span>
        </div>
        <div className={classes["item__qty-btns"]}>
          <button
            onClick={descreaseQuantityHandler}
            className={classes["item__qty-decr"]}
          >
            -
          </button>
          <p className={classes["item__qty-added"]}>{qty}</p>
          <button
            onClick={increaseQuantityHandler}
            className={classes["item__qty-incr"]}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
