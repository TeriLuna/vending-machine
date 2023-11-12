import React from "react";
import ProductItem from "./ProductItem";

import productsData from "../Data/productsData.json";

function ProductsCollection() {
  console.log({ productsData }, "heeey");
  return (
    <div>
      <ProductItem />
    </div>
  );
}

export default ProductsCollection;
