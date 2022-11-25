import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Divider } from "../components";

const SectionContainer = ({
  children,
  maxWidth,
  full,
  reverse,
  title,
  padding,
  ...rest
}) => {
  return (
    <StyledContainer component="section" {...rest}>
      {title && (
        <StyledTitleContainer>
          <Divider width="20%" />
          <StyledTitle variant="h4" color="initial">
            {title}
          </StyledTitle>
          {children}
        </StyledTitleContainer>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const StyledTitleContainer = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  display: "flex",
  justifyContent: "center",
  maxWidth: "100%",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 4),
  textTransform: "uppercase",
  whiteSpace: "nowrap",
}));

const ChildrenContainer = styled("div")(() => ({
  minHeight: "100%",
}));

export default SectionContainer;
