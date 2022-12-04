import React from "react";
import { images } from "../../assets/images";
import { styled } from "@mui/material/styles";

const Avatar = () => {
  return <StyledAvatar src={images.avatar} alt="davidjss" />;
};

const StyledAvatar = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  width: "380px",
  height: "380px",
  objectFit: "cover",
  objectPosition: "0 -5px",
  boxShadow: theme.shadows[10],
}));

export default Avatar;
