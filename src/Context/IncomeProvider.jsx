import React, { createContext, useState } from "react";

export const IncomeContext = createContext();

export const IncomeProvider = ({ children }) => {
  const [sumCoinInserted, setSumCoinInserted] = useState(0);
  const [moneyInserted, setMoneyInserted] = useState([]);
  const [coinsChange, setCoinsChange] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
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
    setOpenPopup(true);
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
    setCoinsChange(res);
  };

  // Return Coins
  const handleReturnCoins = () => {
    setSumCoinInserted(0);
    setMoneyInserted([]);
    setCoinsChange();
  };

  // Popup Result purchase

  const handleClose = () => {
    handleReturnCoins();
    setOpenPopup(false);
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
    openPopup,
  };
  return (
    <IncomeContext.Provider value={value}>{children}</IncomeContext.Provider>
  );
};
