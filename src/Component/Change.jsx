import React, { useContext } from "react";

import { Box } from "@mui/material";
import { IncomeContext } from "../Context/IncomeProvider";

const Change = ({ valueCoin }) => {
  // Reduce decimal
  const roundedNum = valueCoin;
  // const { changeCoins } = useContext(IncomeContext);

  // console.log({ changeCoins });

  let coins = [
    [0.05, 0.05],
    [0.1, 0.1, 0.1],
    [0.25, 0.25, 0.25],
    [1, 1],
  ];

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      {/* <div>{changeCoins}</div> */}
      {}
    </Box>
  );
};

export default Change;
