import React from "react";
import classes from "./Product.module.scss";

function Product({ id, images, title }) {
  return (
    <li key={id} className={classes.product}>
      <div className={classes.img}>
        <img src={images[0]} alt={title} />
      </div>
      <p className={classes.title}>{title}</p>
    </li>
  );
}

export default Product;
