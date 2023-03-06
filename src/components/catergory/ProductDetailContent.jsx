import React from "react";
import classes from "./ProductDetailContent.module.scss";

function ProductDetailContent({
  title,
  description,
  totalRating,
  discountPercentage,
  price,
  stock,
  id,
}) {
  return (
    <div>
      <h4 className={classes["product__title"]}>{title}</h4>
      <p className={classes["product__description"]}>{description}</p>
      <div className={classes["product__rating"]}>{totalRating}</div>
      <div className={classes["product__discount-price"]}>
        <span className={classes["product__discount"]}>
          (-{discountPercentage}%)
        </span>
        <span className={classes["product__price"]}>
          ${(price - price * (discountPercentage / 100)).toFixed(2)}
        </span>
      </div>
      <div className={classes["product__finalprice"]}>MRP: ${price}</div>
      <div className={classes["product__stock-items"]}>
        <div className={classes["product__items"]}>
          <span htmlFor="add" className={classes["product__remove-item"]}>
            -
          </span>
          <span
            type="number"
            id="add"
            min="1"
            max={stock}
            className={classes["product__count"]}
          >
            1
          </span>
          <span htmlFor="add" className={classes["product__add-item"]}>
            +
          </span>
        </div>
        <span className={classes["product__stock"]}>
          only {stock} items left.
        </span>
      </div>
      <div className={classes["btns"]}>
        <button className={classes["cart-btn"]}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetailContent;
