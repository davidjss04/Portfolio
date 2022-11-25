import React from "react";
import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Skills, Avatar } from "../components";
import { SectionContainer } from "../containers";
import { useTranslation } from "react-i18next";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <SectionContainer id="about" title={t("menu_about")} maxWidth="md">
      <Grid container spacing={0} alignItems="center" sx={{ width: "100%" }}>
        {isMobile && (
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar />
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            alignItems: "space-around",
          }}
        >
          <Box mb={4}>
            <Typography variant="body1">{t("about_desc")}</Typography>
          </Box>
          <Skills />
        </Grid>
        {!isMobile && (
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar />
          </Grid>
        )}
      </Grid>
    </SectionContainer>
  );
};

export default About;
