import React from "react";

import { Box } from "@mui/material";

import ProductItem from "./ProductItem";
import productsData from "../Data/productsData.json";

const ProductsCollection = () => {
  return (
    <Box sx={{ display: "inline-flex", flexDirection: "row" }}>
      {productsData.map((item) => (
        <ProductItem
          key={item.id}
          name={item.name}
          price={item.price}
          qty={item.qty}
        />
      ))}
    </Box>
  );
};

export default ProductsCollection;
