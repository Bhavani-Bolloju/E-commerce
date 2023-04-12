import React from 'react';

function FilterProducts({ onFilter}) {
  return (
    <div className='product-filter'>
    <label htmlFor="">Filter category: </label>
    <select name="category" id="category" onChange={onFilter}>
      <option value="all">All</option>
      <option value="smartphones">Smart phone</option>
      <option value="laptops">Laptops</option>
      <option value="fragrances">Fragrances</option>
      <option value="skincare">Skin care</option>
      <option value="groceries">Groceries</option>
      <option value="home-decoration">Home Decoration</option>
    </select>
  </div>
  );
}

export default FilterProducts;
