import React from "react";

import { Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{
        py: 8,
        mb: 8,
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Vending Machine
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        This vendor machine just accept money in the form of 0.05, 0.10, 0.25
        and 1
      </Typography>
    </Container>
  );
};

export default Header;
