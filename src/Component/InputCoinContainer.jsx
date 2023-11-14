import React, { useContext } from "react";

import { Grid, Typography } from "@mui/material";

import { IncomeContext } from "../Context/IncomeProvider";
import InputCoin from "./InputCoin";

const InputCoinContainer = ({ data }) => {
  const { totalCountCoin, moneyInserted, handleVendingAction } =
    useContext(IncomeContext);
  // Reduce decimal
  const roundedNum = totalCountCoin?.toFixed(2);
  const itemPrice = data.reduce(function (prev, current) {
    return prev.price < current.price ? prev : current;
  });

  // console.log({ moneyInserted, totalCountCoin });
  return (
    <Grid item component="main" xs={12} md={6} lg={6}>
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        mb={5}
        display="flex"
        justifyContent="center"
      >
        Insert Money
      </Typography>
      <Typography component="p" variant="subtitle1" align="center" mb={3}>
        Your insert: $ {roundedNum === undefined ? <>0.00</> : roundedNum}
      </Typography>
      {/* Show message for insert more coins */}
      {itemPrice.price > roundedNum && totalCountCoin > 0 ? (
        <Typography component="p" variant="subtitle1" align="center" mb={3}>
          Please insert more coins
        </Typography>
      ) : null}

      <InputCoin
        handleVendingAction={handleVendingAction}
        moneyInserted={moneyInserted}
      />
    </Grid>
  );
};

export default InputCoinContainer;
