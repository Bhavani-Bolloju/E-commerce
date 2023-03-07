import React from "react";
import classes from "./SavedItem.module.scss";
import { addItem, removeSavedItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function SavedItem({ image, discount, title, id, price }) {
  const dispatch = useDispatch();

  const addToCartHandler = function () {
    dispatch(addItem({ id, title, discount, image, price, qty: 1 }));
  };

  const removeSavedItemHandler = function () {
    dispatch(removeSavedItem(id));
  };

  return (
    <li className={classes["saved-item"]}>
      <div className={classes["img-container"]}>
        <img src={image} alt={title} />
        <span className={classes.discount}>-{discount}% off</span>
      </div>
      <div className={classes.content}>
        <p className={classes.title}>{title}</p>
        <p className={classes.pricing}>
          <span>${price}</span>
          <span>${(price - (price * discount) / 100).toFixed(2)}</span>
        </p>
      </div>
      <div className={classes.btns}>
        <button
          onClick={removeSavedItemHandler}
          className={classes["cart-btn"]}
        >
          Remove
        </button>
        <button onClick={addToCartHandler} className={classes["cart-btn"]}>
          Add to cart
        </button>
      </div>
    </li>
  );
}

export default SavedItem;
