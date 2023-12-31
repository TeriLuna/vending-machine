import React from "react";

import { Box, Button, Grid } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

const InputCoin = (props) => {
  const { moneyInserted, handleReturnCoins, handleCoinCount } = props;

  const moneyAcceptance = [0.05, 0.1, 0.25, 1];

  return (
    <>
      <Grid container justifyContent="center">
        {moneyAcceptance.map((money, i) => {
          return (
            <Grid item key={i} maxWidth="xs" mb={2} mr>
              <Button
                onClick={() => handleCoinCount(money)}
                variant="outlined"
                size="large"
              >
                {money}
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
          disabled={!moneyInserted.length}
          startIcon={<PaidIcon />}
          sx={{ marginTop: "20px" }}
          onClick={() => handleReturnCoins()}
        >
          Return Coins
        </Button>
      </Box>
    </>
  );
};

export default InputCoin;
