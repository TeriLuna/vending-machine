import React from "react";

import { Box } from "@mui/material";

import ProductItem from "./ProductItem";

const ProductsCollection = ({ data }) => {
  return (
    <Box sx={{ display: "inline-flex", flexDirection: "row" }}>
      {data.map((item) => {
        return (
          <ProductItem
            key={item.id}
            name={item.name}
            price={item.price}
            qty={item.qty}
          />
        );
      })}
    </Box>
  );
};

export default ProductsCollection;
