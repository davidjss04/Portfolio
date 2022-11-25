import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { styled } from "@mui/system";

const HomeContainer = ({ children, ...rest }) => {
  return <ContainerStyles {...rest}>{children}</ContainerStyles>;
};

const ContainerStyles = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: theme.spacing(3),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.navbarHeight,
  },

  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
}));

export default HomeContainer;
