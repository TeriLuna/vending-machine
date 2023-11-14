import React from "react";

import { Grid } from "@mui/material";

import InputCoinContainer from "./InputCoinContainer";
import ProductsCollection from "./ProductsCollection";

import productsData from "../Data/productsData.json";
import PopupPurchase from "./PopupPurchase";

const VendorMachine = () => {
  return (
    <Grid container spacing={4}>
      <InputCoinContainer data={productsData} />
      <ProductsCollection data={productsData} />
      <PopupPurchase />
    </Grid>
  );
};

export default VendorMachine;
