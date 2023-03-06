import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import Overlay from "../../UI/Overlay";
import { FiHeart } from "react-icons/fi";
import classes from "./Product.module.scss";
import { useDispatch } from "react-redux";
import { addCart } from "../store/cartSlice";

function Product({ id, images, title, price, discount }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const discountPrice = (price - price * (discount / 100)).toFixed(2);

  const detailProductHandler = function () {
    setIsOpen(true);
  };

  const addToCardHandler = function (image, title, price, id) {
    //dispatch action here to add item to the cart
    dispatch(addCart({ title, price, qty: 1, id, image, discount }));
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
              addToCardHandler(images[0], title, discountPrice, id, discount);
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
