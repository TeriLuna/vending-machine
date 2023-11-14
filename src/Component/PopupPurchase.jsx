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

const PopupPurchase = () => {
  const { handleClose, openPopup, coinsChange, productBought } =
    useContext(IncomeContext);

  return (
    <Dialog
      open={openPopup}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-information-purchase"
    >
      <DialogTitle display="flex" justifyContent="center">
        {"Your purchase result"}
      </DialogTitle>
      <DialogContent
        display="flex"
        flex-direction="column"
        align-items="center"
      >
        <Box variant="h2" component="h4">
          Thank you so much for your purchase!
        </Box>
        <DialogContentText id="alert-information-purchase">
          <Box component="p" textAlign="center">
            {" "}
            You bought one unit of <b>{productBought.name}</b>
          </Box>
          {coinsChange?.length > 0 ? (
            <Box align="center" my={3}>
              This is your change:{" "}
              {coinsChange.map((coinValue, i) => {
                return (
                  <Typography
                    key={i}
                    component="p"
                    variant="subtitle2"
                    sx={{
                      p: 1,
                      borderRight: 1,
                      display: "inline-flex",
                    }}
                  >
                    $ {coinValue}
                  </Typography>
                );
              })}
            </Box>
          ) : null}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>See ya!</Button>
      </DialogActions>
    </Dialog>
  );
};
export default PopupPurchase;
