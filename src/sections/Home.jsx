import React, { useContext, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { HomeContainer } from "../containers";
import { motion, useAnimation } from "framer-motion";
import { VideoLogo } from "../components";
import loaderContext from "../contexts/loaderContext";

const Home = () => {
  const classes = useStyles();
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();
  const { t } = useTranslation();

  // useEffect(() => {
  // 	if (!isLoading) {
  // 		controls.start((i) => ({
  // 			y: 0,
  // 			opacity: 1,
  // 			transition: { delay: i * 0.1 + 1.2 },
  // 		}));
  // 	} else {
  // 		controls.start({ opacity: 0, y: 5 });
  // 	}
  // }, [isLoading, controls]);

  const one = (
    <Typography
      color="primary"
      variant="h1"
    >
      Hi, mi name is
    </Typography>
  );
  const two = (
    <Typography
      custom={0}
      color="primary"
      variant="h1"
	  sx={{magin: "0", fontSize: "clamp(40px, 8vw, 100px)"}}
    >
      David Huaricancha.
    </Typography>
  );
  const three = (
    <Typography
      custom={2}
      variant="h2"
      color="secondary"
      sx={{ magin: "0", fontSize: "clamp(40px, 8vw, 100px)" }}
    >
	  I build things for the web.
    </Typography>
  );
  const four = (
    <Typography
      component={motion.p}
      animate={controls}
      custom={3}
	  variant="body1"
      color="initial"
      style={{ maxWidth: "700px" }}
    >
	  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
	  tincidunt nisl. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
	  facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
    </Typography>
  );

  const five = (
    <Button
      // offset={0}
      // duration={500}
      // to="contact"
      variant="outlined"
      color="primary"
      size="large"
    >
      <Link spy={true} smooth={true} offset={0} duration={500} to="contact">
        {t("home_btn")}
      </Link>
    </Button>
  );

  const items = [one, two, three, four, five];

  return (
    <HomeContainer>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </HomeContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  subTitle: {
    marginBottom: "16px",
    fontSize: "75px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
    },
  },
}));

export default Home;
