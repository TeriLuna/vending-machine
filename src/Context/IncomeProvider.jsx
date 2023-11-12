import React, { createContext, useState } from "react";

export const IncomeContext = createContext();

export const IncomeProvider = ({ children }) => {
  const [totalCount, setTotalCount] = useState(0);
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  // Handle coins inserted by user
  const handleCoinCount = (value) => {
    const newValue = totalCount + value;
    setTotalCount(newValue);
  };

  // Products Selection
  const onAddProduct = (value) => {
    if (totalCount >= value.price && count < value.qty) {
      setProduct(value);
      setCount(count + 1);
      console.log({ count, value });
    } else {
      console.log("Please insert more coins to buy a product");
    }
  };

  const value = {
    totalCount,
    setTotalCount,
    handleCoinCount,
    onAddProduct,
  };
  return (
    <IncomeContext.Provider value={value}>{children}</IncomeContext.Provider>
  );
};
