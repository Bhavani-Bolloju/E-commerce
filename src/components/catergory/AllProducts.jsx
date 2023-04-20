import React, { useEffect } from "react";
import classes from "./AllProducts.module.scss";
import useFetch from "../hooks/use-fetch";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import FilterProducts from "./FilterProducts";

import { confirmAdd } from "../store/cartSlice";

const ProductCategory = function ({ category }) {
  return <h2 className={classes.heading}>{category}</h2>;
};

function AllProducts() {

  const [filterCtgy, setFilterCtgy] = useState('all');
  const [filterCtgyList, setFilterCtgyList] = useState([])
  const { data, error, loading } = useFetch("products");
 
  const {savedItems} = useSelector((state) => state?.cart);
  const dispatch = useDispatch();



  let filterIds = [];

  if (savedItems.length > 0) {
    filterIds = savedItems.length > 0 && savedItems.map((item) => item?.id);
  }

  // console.log(filterIds, 'all products')

  const items = [];
  let lastCategory = null;

  data?.products &&
    data?.products.forEach((product) => {
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
          saved={filterIds.includes(product.id)}
          discount={product.discountPercentage}
         
        />
      );
      lastCategory = product.category;
    });
  
  const filterProductHandler =async function (e) {
    setFilterCtgy(e.target.value)
    if (e.target.value === 'all') {
      return;
    };
    const fetchData = await fetch(`https://dummyjson.com/products/category/${e.target.value}`)
    const res = await fetchData.json();
    setFilterCtgyList(res.products);
  }



  return (
    <div className={classes.productContainer}>
      <FilterProducts onFilter={filterProductHandler } />

    {filterCtgy === 'all' ?  <ul className={classes.products}>{ items
 
    }</ul> : <ul className={classes.products}>
          <ProductCategory category={ filterCtgy} />
          { filterCtgyList.map(product =>  <Product
          key={product.id}
          images={product.images}
          title={product.title}
          id={product.id}
          price={product.price}
          saved={filterIds.includes(product.id)}
            discount={product.discountPercentage}
         
            
        />  ) }
      </ul>}
    
    </div>
  );
}

export default AllProducts;
