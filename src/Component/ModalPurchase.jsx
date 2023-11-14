import React, { forwardRef, useContext } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { IncomeContext } from "../Context/IncomeProvider";
import { Box, Typography } from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalPurchase = () => {
  const {
    handleClose,
    openModal,
    coinsChange,
    productBought,
    sumCoinInserted,
  } = useContext(IncomeContext);
  const roundedNumTotalIncome = sumCoinInserted?.toFixed(2);

  let totalValueCoinsChange = coinsChange?.reduce((a, b) => a + b).toFixed(2);

  return (
    <Dialog
      open={openModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-information-purchase"
    >
      <DialogTitle
        sx={{
          bgcolor: "grey",
          color: "white",
          textTransform: "uppercase",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {"Your purchase result"}
      </DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h5" component="h6" my={2}>
          Thank you so much for your purchase!
        </Typography>
        <DialogContentText
          id="alert-information-purchase"
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          You bought one unit of <b>{productBought.name}</b>, $
          {productBought.price} / Unit. Your income was ${" "}
          {roundedNumTotalIncome}
        </DialogContentText>
        {coinsChange?.length > 0 ? (
          <DialogContentText
            id="alert-information-purchase"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Your change is $ {totalValueCoinsChange}, please take your change:
            {coinsChange.map((coinValue, i) => {
              return (
                <Box component="span" key={i}>
                  $ {coinValue}
                </Box>
              );
            })}
          </DialogContentText>
        ) : null}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Thank you, see ya!</Button>
      </DialogActions>
    </Dialog>
  );
};
export default ModalPurchase;
