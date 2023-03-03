import React from "react";
import classes from "./ProductDetails.module.scss";
import useFetch from "../hooks/use-fetch";
import { RiCloseCircleLine } from "react-icons/ri";
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";

function ProductDetails({ productId, onClose }) {
  const { data, isLoading, error } = useFetch(`products/${productId}`);
  console.log(data);
  const totalRating = [];
  let rating = data?.rating;
  for (let i = 0; i < 5; i++) {
    rating -= 1;
    const rate = Math.floor(rating);

    if (rate === 0) {
      totalRating.push(<ImStarHalf className={classes["product__rate"]} />);
    }
    if (rate < 0) {
      totalRating.push(<ImStarEmpty className={classes.half} />);
    }
    if (rate > 0) {
      totalRating.push(<ImStarFull className={classes["product__rate"]} />);
    }
  }

  return (
    <div className={classes["product-details"]}>
      <RiCloseCircleLine
        className={classes.close}
        onClick={() => onClose(false)}
      />
      {data && (
        <div className={classes.images}>
          <div className={classes["display-image"]}>
            <img src={data?.images[0]} alt={data?.title} />
          </div>
          <div className={classes["image-tumbline"]}>
            {data.images.slice(0, -1).map((image, i) => (
              <div key={i}>
                <img src={image} alt={data?.title} />
              </div>
            ))}
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
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
