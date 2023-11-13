import React, { createContext, useState } from "react";

export const IncomeContext = createContext();

export const IncomeProvider = ({ children }) => {
  const [totalCountCoin, setTotalCountCoin] = useState();
  let [moneyInserted, setMoneyInserted] = useState([]);

  // Handle coins inserted by user
  const handleCoinCount = (value) => {
    moneyInserted.push(value);
    // const newTotalCoins = totalCountCoin + value;
    let newTotalCoins = moneyInserted.reduce((a, b) => a + b);
    setTotalCountCoin(newTotalCoins);
    console.log("context", { newTotalCoins, totalCountCoin });
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
    setTotalCountCoin();
    setMoneyInserted();
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
