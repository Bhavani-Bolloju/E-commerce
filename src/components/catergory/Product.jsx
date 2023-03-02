import React from "react";
import classes from "./Product.module.scss";

function Product({ id, images, title, price }) {
  return (
    <li key={id} className={classes.product}>
      <div className={classes.img}>
        <img src={images[0]} alt={title} />
      </div>
      <div className={classes["product__info"]}>
        <p className={classes["product__title"]}>{title}</p>
        <p className={classes["product__price"]}>${price}</p>
        <button className={classes["cart_button"]}>Add to cart</button>
      </div>
    </li>
  );
}

export default Product;
