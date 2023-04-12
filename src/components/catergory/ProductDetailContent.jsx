import React, { useState } from "react";
import classes from "./ProductDetailContent.module.scss";
import { addItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function ProductDetailContent({
  title,
  description,
  discount,
  price,
  stock,
  id,
  image,
  rating
}) {
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  const increaseQtyHandler = function () {
    if (count >= stock) return;
    setCount((prev) => (prev += 1));
  };

  const decreaseQtyHandler = function () {
    if (count <= 1) return;
    setCount((prev) => (prev -= 1));
  };
  const addToCartHandler = function () {
    dispatch(addItem({ title, price, qty: count, id, image, discount }));
  };

  // console.log(, 'rating')

  return (
    <div>
      <h4 className={classes["product__title"]}>{title}</h4>
      <p className={classes["product__description"]}>{description}</p>
      <div className={classes["product__rating"]}>
        <span>{rating.toFixed(1)}</span>
        <span>rating:</span>
      </div>
      <div className={classes["product__discount-price"]}>
        <span className={classes["product__discount"]}>(-{discount}%)</span>
        <span className={classes["product__price"]}>
          ${(price - price * (discount / 100)).toFixed(2)}
        </span>
      </div>
      <div className={classes["product__finalprice"]}>MRP: ${price}</div>
      <div className={classes["product__stock-items"]}>
        <div className={classes["product__items"]}>
          <span
            htmlFor="add"
            className={classes["product__remove-item"]}
            onClick={decreaseQtyHandler}
          >
            -
          </span>
          <span
            type="number"
            id="add"
            min="1"
            max={stock}
            className={classes["product__count"]}
          >
            {count}
          </span>
          <span
            htmlFor="add"
            className={classes["product__add-item"]}
            onClick={increaseQtyHandler}
          >
            +
          </span>
        </div>
        <span className={classes["product__stock"]}>
          only {stock} items left.
        </span>
      </div>
      <div className={classes["btns"]}>
        <button className={classes["cart-btn"]} onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetailContent;
