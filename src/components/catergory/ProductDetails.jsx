import React from "react";
import classes from "./ProductDetails.module.scss";

function ProductDetails({ productId }) {
  return (
    <div className={classes["product-details"]}>
      <span>Overlay</span>
      <span>id:{productId}</span>
    </div>
  );
}

export default ProductDetails;
