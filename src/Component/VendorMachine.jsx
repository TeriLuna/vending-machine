import React, { useContext } from "react";

import { Container } from "@mui/material";

import { IncomeContext } from "../Context/IncomeProvider";

import InputCoin from "./InputCoin";
import ProductsCollection from "./ProductsCollection";
import productsData from "../Data/productsData.json";

const VendorMachine = () => {
  const { totalCountCoin } = useContext(IncomeContext);

  const roundedNum = totalCountCoin.toFixed(2);
  const itemPrice = productsData.reduce(function (prev, current) {
    return prev.price < current.price ? prev : current;
  });

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <InputCoin />
      <div>
        <p>Your insert: $ {roundedNum}</p>
        {itemPrice.price > roundedNum && totalCountCoin > 0 ? (
          <>Please insert more coins</>
        ) : null}
      </div>
      <ProductsCollection data={productsData} />
    </Container>
  );
};

export default VendorMachine;
