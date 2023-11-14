import React, { createContext, useState } from "react";

export const IncomeContext = createContext();

export const IncomeProvider = ({ children }) => {
  const [sumCoinInserted, setSumCoinInserted] = useState(0);
  const [moneyInserted, setMoneyInserted] = useState([]);
  const [coinsChange, setCoinsChange] = useState([0]);
  const [openModal, setOpenModal] = useState(false);
  const [productBought, setProductBought] = useState({});

  const moneyAcceptance = [1, 0.25, 0.1, 0.05];

  // Handle coins inserted by user
  const handleCoinCount = (value) => {
    moneyInserted.push(value);
    let newTotalCoins = moneyInserted.reduce((a, b) => a + b, 0);
    setSumCoinInserted(newTotalCoins);
  };

  // Products Selection that receives the data of the product selected
  const onAddProduct = (value) => {
    let change = sumCoinInserted - value.price;
    getChange(change);
    setProductBought(value);
    setOpenModal(true);
  };

  // Get Coins Change for the user
  const getChange = (change) => {
    const changeCoins = [];

    let remainingChange = change;

    for (const coin of moneyAcceptance) {
      while (remainingChange >= coin) {
        changeCoins.push(coin);
        remainingChange = parseFloat((remainingChange - coin).toFixed(2));
      }

      if (remainingChange !== 0) {
        // If we couldn't find exact change, reset and try with all available coins
        remainingChange = change;
        changeCoins.length = 0;

        for (const coin of moneyAcceptance) {
          while (remainingChange >= coin) {
            changeCoins.push(coin);
            remainingChange = parseFloat((remainingChange - coin).toFixed(2));
          }
        }
      }

      if (remainingChange !== 0) {
        // If we still couldn't find exact change, return an empty array
        return { totalChange: change, coins: [] };
      }

      setCoinsChange(changeCoins);
      return;
    }

    changeCoins.shift();
  };

  // Return Coins
  const handleReturnCoins = () => {
    setSumCoinInserted(0);
    setMoneyInserted([]);
    setCoinsChange();
  };

  // Modal Result purchase

  const handleClose = () => {
    handleReturnCoins();
    setOpenModal(false);
  };

  const value = {
    sumCoinInserted,
    setSumCoinInserted,
    handleCoinCount,
    onAddProduct,
    handleReturnCoins,
    moneyInserted,
    getChange,
    coinsChange,
    handleClose,
    productBought,
    openModal,
  };
  return (
    <IncomeContext.Provider value={value}>{children}</IncomeContext.Provider>
  );
};
