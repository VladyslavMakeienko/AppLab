import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { DownloadImage } from "./Elements for Download/DownloadImage";
import { DownloadIcons } from "./Elements for Download/DownloadIcons";
import { DownloadTexts } from "./Elements for Download/DownloadTexts";
import { AnimatedParticles } from "../Common/AnimatedParticles";

const useStyles = makeStyles((theme: Theme) => ({
  containerPageStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "0",
    justifyContent: "flex-end",
    [theme.breakpoints.between("xs", "sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      justifyContent: "space-evenly",
    },
  },
  firstBlockStyles: {
    display: "flex",
    flexDirection: "column",
    margin: "0 -115px 0 0",
    zIndex: 2,
    [theme.breakpoints.only("md")]: {
      margin: "0 -60px 0 25px",
    },
    [theme.breakpoints.only("sm")]: {
      margin: "0 0 55px 0",
      alignItems: "center",
    },
    [theme.breakpoints.only("xs")]: {
      margin: "0 0 35px 0",
      alignItems: "center",
    },
  },
}));

/* --- Start your 30 days free trail today! Page --- */

export const DownloadPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerPageStyles}>
      <div className={classes.firstBlockStyles}>
        <DownloadTexts />
        <DownloadIcons />
      </div>
      <div>
        <DownloadImage />
      </div>
      <AnimatedParticles />
    </div>
  );
};
