import React from "react";

import { Box } from "@mui/material";

const Change = ({ valueCoin }) => {
  // Reduce decimal
  const roundedNum = valueCoin;
  // const itemPrice = data.reduce(function (prev, current) {
  //   return prev.price < current.price ? prev : current;
  // });
  let coins = [
    [0.05, 0.05],
    [0.1, 0.1, 0.1],
    [0.25, 0.25, 0.25],
    [1, 1],
  ];

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <div>{roundedNum}</div>
      {}
    </Box>
  );
};

export default Change;
