import React from "react";

import { Grid } from "@mui/material";

import ProductItem from "./ProductItem";

const ProductsCollection = ({ data }) => {
  return (
    <Grid item component="main" xs={12} md={6} lg={6}>
      <Grid container spacing={5} alignItems="flex-end">
        {data.map((item) => {
          return (
            <Grid item key={item.id} xs={12} sm={6} md={6}>
              <ProductItem name={item.name} price={item.price} qty={item.qty} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ProductsCollection;
