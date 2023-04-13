import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../catergory/ProductDetails';

function ProductDetailPage() {
 const params =  useParams()
console.log(params.productId)

  return (
    <ProductDetails productId={params.productId}/>
  );
}

export default ProductDetailPage;
