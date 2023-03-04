import React, { useRef, useState } from "react";
import classes from "./ProductDetails.module.scss";
import useFetch from "../hooks/use-fetch";
import { RiCloseCircleLine } from "react-icons/ri";
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";

function ProductDetails({ productId, onClose }) {
  const { data, isLoading, error } = useFetch(`products/${productId}`);
  const [selected, setSelected] = useState(0);
  const [selectedImage, setSelectedImage] = useState(data?.images?.[0]);
  const imageRef = useRef(null);
  const myRef = useRef(null);
  const totalRating = [];
  let rating = data?.rating;
  for (let i = 0; i < 5; i++) {
    rating -= 1;
    const rate = Math.floor(rating);

    if (rate === 0) {
      totalRating.push(
        <ImStarHalf key={i} className={classes["product__rate"]} />
      );
    }
    if (rate < 0) {
      totalRating.push(<ImStarEmpty key={i} className={classes.half} />);
    }
    if (rate > 0) {
      totalRating.push(
        <ImStarFull key={i} className={classes["product__rate"]} />
      );
    }
  }

  const imageHandler = function (id, e) {
    setSelectedImage(e.target.src);
    setSelected(id);
  };

  return (
    <div className={classes["product-details"]}>
      <RiCloseCircleLine
        className={classes.close}
        onClick={() => onClose(false)}
      />
      {data && (
        <div className={classes["images-container"]}>
          <div className={classes["display-image"]}>
            <img
              ref={myRef}
              src={selectedImage || data?.images?.[0]}
              alt={data?.title}
            />
          </div>
          <div className={classes["image-tumbline"]}>
            <ul>
              {data.images.map((image, i) => (
                <div key={i}>
                  <img
                    className={selected === i ? classes.selected : ""}
                    ref={selected === i ? imageRef : null}
                    onClick={(e) => imageHandler(i, e)}
                    src={image}
                    alt={data?.title}
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
      {data && (
        <div>
          <h4 className={classes["product__title"]}>{data?.title}</h4>
          <p className={classes["product__description"]}>{data?.description}</p>
          <div className={classes["product__rating"]}>{totalRating}</div>
          <div className={classes["product__discount-price"]}>
            <span className={classes["product__discount"]}>
              (-{data?.discountPercentage}%)
            </span>
            <span className={classes["product__price"]}>
              $
              {(
                data?.price -
                data?.price * (data?.discountPercentage / 100)
              ).toFixed(2)}
            </span>
          </div>
          <div className={classes["product__finalprice"]}>
            MRP: ${data?.price}
          </div>
          <div className={classes["product__stock-items"]}>
            <div className={classes["product__items"]}>
              <span htmlFor="add" className={classes["product__remove-item"]}>
                -
              </span>
              <span
                type="number"
                id="add"
                min="1"
                max={data?.stock}
                className={classes["product__count"]}
              >
                1
              </span>
              <span htmlFor="add" className={classes["product__add-item"]}>
                +
              </span>
            </div>
            <span className={classes["product__stock"]}>
              only {data?.stock} items left.
            </span>
          </div>
          <div className={classes["btns"]}>
            <button className={classes["cart-btn"]}>Add to cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
