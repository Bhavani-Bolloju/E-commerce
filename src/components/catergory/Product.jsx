import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import classes from "./Product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem, saveItem } from "../store/cartSlice";
import { AuthContext } from "../context/authContext";


function Product({ id, images, title, price, discount, saved , onNotify}) {
  const { userDetails } = useContext(AuthContext);
  const dispatch = useDispatch();
  // const { cartNotification } = useSelector(state => state.cart);
  const [save, setSave] = useState(saved);
 

  useEffect(() => {
    setSave(saved)
  },[saved])
  
  const discountPrice = (price - price * (discount / 100)).toFixed(2);
  const navigate = useNavigate();

  const addToCardHandler = async function (image, title, price, id) {
    if (userDetails?.docId) {
      console.log(userDetails?.docId);
    }
    dispatch(addItem({ title, price, qty: 1, id, image, discount }));
  };

  const saveItemHandler = function (title, price, id, image, discount) {
    setSave((prev) => !prev);
    dispatch(saveItem({ title, price, id, image, discount }));
  };
 


  return (
    <>
      <li key={id} className={classes.product} onClick={()=>{ navigate(`/${id}`) }}>
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
              onNotify();
            }}
            >
            Add to cart
          </button>
        </div>
        <FiHeart
          className={save ? classes["saved"] : classes[""]}
          onClick={(e) => {
            e.stopPropagation();
            saveItemHandler(title, price, id, images[0], discount);
          }}
          />
      </li>
     
    </>
 
  );
}

export default Product;
