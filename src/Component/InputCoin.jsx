import React from "react";

import { Box, Button, Grid } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

import moneyList from "../Data/moneyAcceptance.json";

const InputCoin = (props) => {
  const { handleReturnCoins, handleCoinCount, totalCountCoin } = props;
  return (
    <>
      <Grid container justifyContent="center">
        {moneyList.map((money, i) => {
          let valueCoin = money.value;
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
          disabled={!totalCountCoin}
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
