import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const Hero = () => {
  const one = <Typography variant="h1">Hi, mi name is</Typography>;
  const two = <Typography variant="h2">David Huaricancha.</Typography>;
  const three = <Typography variant="h3">I build things for the web.</Typography>;
  const four = (
    <Typography variant="body1">
      I'm a software engineer based in Lima, Peru specializing in building (and
      occasionally designing) exceptional websites, applications, and everything
      in between.
    </Typography>
  );
  const five = (
    <>
      <a href="#projects">Contact Me</a>
      <a href="#contact">Resumen</a>
    </>
  );

  const items = [one, two, three, four, five];

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Hero;
