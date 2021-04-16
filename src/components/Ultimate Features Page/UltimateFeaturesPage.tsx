import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { UltimateFeaturesImages } from "./Elements for Ultimate/UltimateFeaturesImages";
import { UltimateFeaturesImage } from "./Elements for Ultimate/UltimateFeaturesImage";
import { UltimateFeaturesTexts } from "./Elements for Ultimate/UltimateFeaturesTexts";

const useStyles = makeStyles((theme: Theme) => ({
  containerPageStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 0 144px 0",
    [theme.breakpoints.between("xs", "sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("xl")]: {
      justifyContent: "space-evenly",
    },
  },
  firstBlockStyles: {
    display: "flex",
    flexDirection: "column",
    margin: "0 0 0 50px",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0 0 50px 0",
      alignItems: "center",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "0",
    },
  },
  secondBlockStyles: {
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "0",
    },
  },
}));

/* --- Ultimate features that we built Page --- */

export const UltimateFeaturesPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerPageStyles}>
      <div className={classes.firstBlockStyles}>
        <UltimateFeaturesTexts />
        <UltimateFeaturesImages />
      </div>
      <div className={classes.secondBlockStyles}>
        <UltimateFeaturesImage />
      </div>
    </div>
  );
};
