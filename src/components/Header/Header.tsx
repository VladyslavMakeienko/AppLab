import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { ScrollTopSiteIcon } from "./Elements for Header/ScrollTopSiteIcon";
import { useMediaQuery } from "@material-ui/core";
import { MobileMenu } from "./Elements for Header/MobileMenu";
import { BigMenu } from "./Elements for Header/BigMenu";
import { ButtonForSite } from "../Common/ButtonForSite";

const useStyles = makeStyles((theme: Theme) => ({
  headerStyles: {
    position: "initial",
    backgroundColor: "#FDFDFE",
    boxShadow: "0 0 0 0",
  },
  toolbarStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      justifyContent: "space-between",
    },
  },
  buttonStyles: {
    color: "#FFFFFF",
    padding: "0 12px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    textTransform: "none",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    background: "linear-gradient(to left, #2500F9 50%, #FFFFFF 50%)",
    backgroundSize: "201% 100%",
    backgroundPosition: "right bottom",
    width: "155px",
    height: "40px",
    borderRadius: "30px",
    boxShadow: "none",
    transition: "all ease 0.7s",
    "&:hover": {
      color: "#2500F9",
      backgroundPosition: "left bottom",
      boxShadow: "none",
    },
    [theme.breakpoints.only("xs")]: {
      width: "110px",
      height: "32px",
      fontSize: "14px",
      padding: "0",
    },
  },
}));

/* --- Header Site --- */

export const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const textForButton: string = "Try for Free";
  /* --- Mobile/Table version breakpoint of site --- */
  const mobileVersion = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  return (
    <React.Fragment>
      <AppBar className={classes.headerStyles}>
        <Toolbar className={classes.toolbarStyles}>
          {mobileVersion ? (
            /* --- Mobile/Table version of site --- */
            <>
              <MobileMenu />
              <ButtonForSite
                textForButton={textForButton}
                classText={classes.buttonStyles}
              />
            </>
          ) : (
            /* --- Laptop/PC version of site --- */
            <BigMenu />
          )}
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top" />
      <ScrollTopSiteIcon />
    </React.Fragment>
  );
};
