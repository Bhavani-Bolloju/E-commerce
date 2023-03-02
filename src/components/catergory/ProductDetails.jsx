import React from "react";
import classes from "./ProductDetails.module.scss";

function ProductDetails({ productId, onClose }) {
  return (
    <div className={classes["product-details"]}>
      <span>Overlay</span>
      <span>id:{productId}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        onClick={() => onClose(false)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}

export default ProductDetails;
