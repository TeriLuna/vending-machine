import React, { useContext, useState } from "react";

import { Container } from "@mui/material";

import InputCoin from "./InputCoin";
import ProductsCollection from "./ProductsCollection";
import { IncomeContext } from "../Context/IncomeProvider";

const VendorMachine = () => {
  const { totalCount } = useContext(IncomeContext);

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <InputCoin />
      <div>
        <p>You insert: {totalCount}</p>
      </div>
      <ProductsCollection />
    </Container>
  );
};

export default VendorMachine;
