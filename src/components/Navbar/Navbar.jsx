import React, { useContext, useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Link as MuiLink,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import LangSelector from "./LangSelector";
import Menu from "./Menu";
import Logo from "./Logo";
import { styled } from "@mui/system";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <StyledAppBar elevation={0}>
        <Toolbar>
          <Logo />
          {isMatch ? (
            <>
              <Menu />
            </>
          ) : (
            <>
              <StyledTabs
                sx={{ marginLeft: "auto" }}
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <StyledTab label="ABOUT" />
                <StyledTab label="EXPERIENCE" />
                <StyledTab label="PROJECTS" />
                <StyledTab label="CONTACT" />
              </StyledTabs>
              <Button
                component={MuiLink}
                href="/resume.pdf"
                color="primary"
                sx={{ marginLeft: "32px" }}
                variant="outlined"
                underline="none"
              >
                {"RESUMEN"}
              </Button>
              <LangSelector style={{ marginLeft: "32px" }} />
            </>
          )}
        </Toolbar>
      </StyledAppBar>
    </React.Fragment>
  );
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  position: "fixed",
  padding: theme.spacing(2),
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  transition: ".2s",
  minWidth: 120,
  "&:hover": {
    color: theme.palette.text.primary,
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  arialLabel: "styled tabs",
  indicatorColor: theme.palette.text.primary,
  textColor: theme.palette.text.primary,
  "& > span": {
    maxWidth: 20,
  },
}));

export default Navbar;
