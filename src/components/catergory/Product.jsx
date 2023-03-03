import React, { useState } from "react";
import classes from "./Product.module.scss";
import ProductDetails from "./ProductDetails";
import Overlay from "../../UI/Overlay";

function Product({ id, images, title, price }) {
  const [isOpen, setIsOpen] = useState(false);

  const detailProductHandler = function () {
    setIsOpen(true);
  };

  return (
    <>
      <li key={id} className={classes.product} onClick={detailProductHandler}>
        <div className={classes.img}>
          <img src={images[0]} alt={title} />
        </div>
        <div className={classes["product__info"]}>
          <p className={classes["product__title"]}>{title}</p>
          <p className={classes["product__price"]}>${price}</p>
          <button className={classes["cart_button"]}>Add to cart</button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </li>
      {isOpen && <ProductDetails productId={id} onClose={setIsOpen} />}
      {isOpen && <Overlay onClose={setIsOpen} />}
    </>
  );
}

export default Product;
