import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { createTheme, useTheme, styled } from "@mui/material/styles";
import { skillsList } from "../../data";

const Skills = () => {
  return (
    <StyledContainer>
      {skillsList.map((skill, index) => (
        <StyledPaper
          elevation={10}
          key={index}
        >
          <Typography variant="h6" component="div">
            {skill.title}
          </Typography>
        </StyledPaper>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled("div")(({ theme }) => ({
  maxWidth: "600px",
  display: "flex",
  flexWrap: "wrap",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginRight: "10px",
  marginBottom: "10px",
  minWidth: "50px",
  padding: "10px",
}));

export default Skills;
