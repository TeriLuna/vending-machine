import React from "react";

import { Box, Button, Grid } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

import Change from "./Change";

const InputCoin = (props) => {
  const { handleReturnCoins, handleCoinCount, moneyInserted } = props;

  const moneyAcceptance = [0.05, 0.1, 0.25, 1];

  let b = !moneyInserted.lenght;

  console.log("change", { moneyInserted, b });
  return (
    <>
      <Grid container justifyContent="center">
        {moneyAcceptance.map((money, i) => {
          let valueCoin = money;
          return (
            <Grid item key={i} maxWidth="xs" mb={2} mr>
              <Button
                onClick={() => handleCoinCount(valueCoin)}
                variant="outlined"
                size="large"
              >
                {valueCoin}
              </Button>
            </Grid>
          );
        })}
      </Grid>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          disabled={b}
          startIcon={<PaidIcon />}
          sx={{ marginTop: "20px" }}
          onClick={() => handleReturnCoins()}
        >
          Return Coins
        </Button>
        <Change valueCoin={moneyInserted} />
      </Box>
    </>
  );
};

export default InputCoin;
