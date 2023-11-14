import React from "react";

import { Container, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: 3,
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 5 }}
      >
        {"Copyright © "}
        <Link
          color="inherit"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/TeriLuna/vending-machine"
        >
          Catherine Lozada Bedoya
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
};

export default Footer;
