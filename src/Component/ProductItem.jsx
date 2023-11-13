import React, { useContext, useState } from "react";

import { Box, Button, Container } from "@mui/material";
import { IncomeContext } from "../Context/IncomeProvider";

const ProductItem = (productsData) => {
  const { id, name, price, qty } = productsData;

  const { onAddProduct, totalCountCoin } = useContext(IncomeContext);

  const [stockQty, setStockQty] = useState(qty);

  const handleStockQty = () => {
    if (stockQty > 0) {
      setStockQty(stockQty - 1);
    }
    onAddProduct(productsData);
  };

  return (
    <Container>
      <Box key={id} sx={{ border: 1, borderRadius: 1, padding: "30px" }}>
        <Box>
          <h2>{name}</h2>
          <p>Qty: {stockQty} Units</p>
          <span>Price: ${price}</span>
        </Box>
        <Button
          disabled={stockQty === 0 || price > totalCountCoin}
          variant="contained"
          sx={{ marginTop: "30px" }}
          onClick={handleStockQty}
        >
          Get {name}
        </Button>
      </Box>
    </Container>
  );
};

export default ProductItem;
