import React from "react";
import classes from "./AllProducts.module.scss";
import useFetch from "../hooks/use-fetch";
import Product from "./Product";

const ProductCategory = function ({ category }) {
  return <h2 className={classes.heading}>{category}</h2>;
};

function AllProducts() {
  // const { data, error, loading } = useFetch("products");
  const getData = JSON.parse(localStorage.getItem("products"));

  if (!getData) {
    const storeData = localStorage.setItem(
      "products",
      JSON.stringify(data.products)
    );
  }

  const items = [];

  let lastCategory = null;

  getData &&
    getData.forEach((product) => {
      if (product.category !== lastCategory) {
        items.push(
          <ProductCategory category={product.category} key={product.category} />
        );
      }
      items.push(
        <Product
          key={product.id}
          images={product.images}
          title={product.title}
          id={product.id}
          price={product.price}
          discount={product.discountPercentage}
        />
      );
      lastCategory = product.category;
    });

  return (
    <div>
      <ul className={classes.products}>{items}</ul>
    </div>
  );
}

export default AllProducts;
