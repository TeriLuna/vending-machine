import React, { createContext, useState } from "react";

export const IncomeContext = createContext();

export const IncomeProvider = ({ children }) => {
  const [totalCountCoin, setTotalCountCoin] = useState();
  const [moneyInserted, setMoneyInserted] = useState([]);

  // Handle coins inserted by user
  const handleCoinCount = (value) => {
    moneyInserted.push(value);
    let newTotalCoins = moneyInserted.reduce((a, b) => a + b);
    setTotalCountCoin(newTotalCoins);
  };

  // Products Selection
  const onAddProduct = (value) => {
    let price = value.price;
    if (totalCountCoin >= price) {
      const newTotalCoins = totalCountCoin - price;

      setTotalCountCoin(newTotalCoins);
    }
  };

  // Return Coins
  const handleReturnCoins = () => {
    setTotalCountCoin(0);
    setMoneyInserted([]);
  };

  const value = {
    totalCountCoin,
    setTotalCountCoin,
    handleCoinCount,
    onAddProduct,
    handleReturnCoins,
    moneyInserted,
  };
  return (
    <IncomeContext.Provider value={value}>{children}</IncomeContext.Provider>
  );
};
