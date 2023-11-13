import React, { createContext, useState } from "react";

export const IncomeContext = createContext();

export const IncomeProvider = ({ children }) => {
  const [totalCountCoin, setTotalCountCoin] = useState(0);

  // Handle coins inserted by user
  const handleCoinCount = (value) => {
    const newTotalCoins = totalCountCoin + value;
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
  };

  const value = {
    totalCountCoin,
    setTotalCountCoin,
    handleCoinCount,
    onAddProduct,
    handleReturnCoins,
  };
  return (
    <IncomeContext.Provider value={value}>{children}</IncomeContext.Provider>
  );
};
