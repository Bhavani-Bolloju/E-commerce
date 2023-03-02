import React from "react";
import classes from "./AllProducts.module.scss";
import useFetch from "../hooks/use-fetch";
import Product from "./Product";

const ProductCategory = function ({ category }) {
  return <h2 className={classes.heading}>{category}</h2>;
};

function AllProducts() {
  const { data, error, loading } = useFetch("products");
  console.log(data?.products);
  const items = [];

  let lastCategory = null;

  data?.products &&
    data?.products?.forEach((product) => {
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
