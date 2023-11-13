import React, { useContext } from "react";

import { Button, ButtonGroup, Container, Stack } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

import moneyList from "../Data/moneyAcceptance.json";
import { IncomeContext } from "../Context/IncomeProvider";

const InputCoin = () => {
  const { handleCoinCount, totalCountCoin, handleReturnCoins } =
    useContext(IncomeContext);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginY: "40px",
      }}
    >
      <h2>Insert Money</h2>
      <p>
        This vendor machine just accept money in the form of 0.05, 0.10, 0.25
        and 1
      </p>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Stack direction="row" spacing={2}>
          {moneyList.map((money, i) => {
            let valueCoin = money.value;
            return (
              <Button key={i} onClick={() => handleCoinCount(valueCoin)}>
                {valueCoin}
              </Button>
            );
          })}
        </Stack>
      </ButtonGroup>
      <Button
        variant="outlined"
        disabled={!totalCountCoin}
        startIcon={<PaidIcon />}
        sx={{ marginTop: "20px" }}
        onClick={() => handleReturnCoins()}
      >
        Return Coins
      </Button>
    </Container>
  );
};

export default InputCoin;
