import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { KeyFeaturesImage } from "./Elements for Key Features/KeyFeaturesImage";
import { KeyFeaturesImages } from "./Elements for Key Features/KeyFeaturesImages";
import { KeyFeaturesTexts } from "./Elements for Key Features/KeyFeaturesTexts";

const useStyles = makeStyles((theme: Theme) => ({
  containerPageStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 0 88px 0",
    [theme.breakpoints.between("xs", "sm")]: {
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.up("xl")]: {
      justifyContent: "space-evenly",
    },
  },
  firstBlockStyles: {
    margin: "0 52px 0 0",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "30px 0 0 0",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "0",
    },
  },
  secondBlockStyles: {
    display: "flex",
    flexDirection: "column",
    margin: "0 100px 0 0",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "0",
    },
  },
}));

/* --- Key Features Page --- */

export const KeyFeaturesPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div id="key-features" className={classes.containerPageStyles}>
      <div className={classes.firstBlockStyles}>
        <KeyFeaturesImage />
      </div>
      <div className={classes.secondBlockStyles}>
        <KeyFeaturesTexts />
        <KeyFeaturesImages />
      </div>
    </div>
  );
};
