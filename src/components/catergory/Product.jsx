import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import Overlay from "../../UI/Overlay";
import { FiHeart } from "react-icons/fi";
import classes from "./Product.module.scss";

function Product({ id, images, title, price, discount }) {
  const [isOpen, setIsOpen] = useState(false);
  const discountPrice = (price - price * (discount / 100)).toFixed(2);

  const detailProductHandler = function () {
    setIsOpen(true);
  };

  const addToCardHandler = function (img, title, price, id) {
    //dispatch action here to add item to the cart
    console.log(title, price);
  };

  return (
    <>
      <li key={id} className={classes.product} onClick={detailProductHandler}>
        <div className={classes.img}>
          <img src={images[0]} alt={title} />
        </div>
        <div className={classes["product__info"]}>
          <p className={classes["product__title"]}>{title}</p>
          <p className={classes["product__price"]}>
            <span className={classes.originalPrice}>${price}</span>
            <span className={classes.discountPrice}>${discountPrice}</span>
          </p>
          <button
            className={classes["cart_button"]}
            onClick={(e) => {
              e.stopPropagation();
              addToCardHandler(images[0], title, discountPrice, id);
            }}
          >
            Add to cart
          </button>
        </div>
        <FiHeart />
      </li>
      {isOpen && <ProductDetails productId={id} onClose={setIsOpen} />}
      {isOpen && <Overlay onClose={setIsOpen} />}
    </>
  );
}

export default Product;
