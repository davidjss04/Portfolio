import React from "react";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
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
  maxWidth: "700px",
  display: "flex",
  justifyContent: "flex-start",
  gap: "5px",
  flexWrap: "wrap",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  marginRight: "10px",
  marginBottom: "10px",
  minWidth: "50px",
  padding: "10px",
}));

export default Skills;
