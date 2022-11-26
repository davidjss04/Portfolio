import React from "react";
import { styled } from "@mui/material/styles";

const Divider = ({ fullWidth, width, ...rest }) => {
  return (
    <StyledDivider
      sx={[fullWidth ? { width: "100%" } : { width: width }]}
      {...rest}
    ></StyledDivider>
  );
};

const StyledDivider = styled("div")(() => ({
    display: "inline",
    height: "2px",
    backgroundColor: "red",
}));

export default Divider;
