import React, { createContext, useState } from "react";

export const IncomeContext = createContext();

export const IncomeProvider = ({ children }) => {
  const [totalCountCoin, setTotalCountCoin] = useState(0);
  const [moneyInserted, setMoneyInserted] = useState([]);
  const moneyAcceptance = [1, 0.25, 0.1, 0.05];

  // Handle coins inserted by user
  const handleCoinCount = (value) => {
    moneyInserted.push(value);
    let newTotalCoins = moneyInserted.reduce((a, b) => a + b, 0);
    setTotalCountCoin(newTotalCoins);
  };

  // Products Selection that receives the data of the product selected
  const onAddProduct = (value) => {
    let change = totalCountCoin - value.price;

    getChange(change);
  };

  // Get Change
  const getChange = (change) => {
    let res = [0];
    moneyAcceptance.forEach((coin) => {
      if (coin > change) {
        return;
      } else if (coin <= change) {
        let changeRes = res.reduce((a, b) => a + b);
        console.log({ changeRes });
        if (changeRes + coin <= change) {
          res.push(coin);
          return;
        }
      }
    });
    res.shift();
    return res;
  };

  // Return Coins
  const handleReturnCoins = () => {
    setTotalCountCoin(0);
    setMoneyInserted([]);
  };

  // Handle Vending Machine Action
  const handleVendingAction = (action, value) => {
    switch (action) {
      case "INSERT_COIN":
        handleCoinCount(value);
        break;
      case "RETURN_COIN":
        handleReturnCoins();
        break;
      case "SELECT_PRODUCT":
        onAddProduct(value);
        break;
      default:
        console.error("Invalid action");
    }
  };

  const value = {
    totalCountCoin,
    setTotalCountCoin,
    handleCoinCount,
    onAddProduct,
    handleReturnCoins,
    moneyInserted,
    handleVendingAction,
  };
  return (
    <IncomeContext.Provider value={value}>{children}</IncomeContext.Provider>
  );
};
