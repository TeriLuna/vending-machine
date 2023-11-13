import React, { useContext, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

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
    <Card key={id}>
      <CardHeader
        title={name}
        subheader={name}
        titleTypographyProps={{ align: "center" }}
        subheaderTypographyProps={{
          align: "center",
        }}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[700],
        }}
      />

      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            mb: 2,
          }}
        >
          <Typography component="h2" variant="h5" color="text.primary">
            ${price}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            /Unit
          </Typography>
        </Box>

        <Typography component="p" variant="subtitle1" align="center">
          {stockQty} Stock
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="outlined"
          disabled={stockQty === 0 || price > totalCountCoin}
          onClick={handleStockQty}
        >
          Get {name}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
