import React, { useContext, useEffect, useState } from "react";

import { Button, ButtonGroup, Container } from "@mui/material";

import moneyList from "../Data/moneyAcceptance.json";
import { IncomeContext } from "../Context/IncomeProvider";

const InputCoin = () => {
  const { handleCoinCount } = useContext(IncomeContext);



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
      <ButtonGroup
        disableElevation
        variant="Contained"
        aria-label="Disable elevation buttons"
      >
        {moneyList.map((money, i) => {
          let valueCoin = money.value;
          return (
            <Button key={i} onClick={() => handleCoinCount(valueCoin)}>
              {valueCoin}
            </Button>
          );
        })}
      </ButtonGroup>
    </Container>
  );
};

export default InputCoin;
