import React, { useContext, useState } from "react";

import { Box, Button, Container } from "@mui/material";
import { IncomeContext } from "../Context/IncomeProvider";

const ProductItem = (productData) => {
  const { id, name, price, qty } = productData;

  const { onAddProduct, totalCount } = useContext(IncomeContext);

  return (
    <Container>
      <Box key={id} sx={{ border: 1, borderRadius: 1, padding: "30px" }}>
        <Box>
          <h2>{name}</h2>
          <p>Qty: {qty} Units</p>
          <span>Price: ${price}</span>
        </Box>
        <Button
          disabled={price > totalCount}
          variant="contained"
          sx={{ marginTop: "30px" }}
          onClick={() => onAddProduct(productData)}
        >
          Get {name}
        </Button>
      </Box>
    </Container>
  );
};

export default ProductItem;
