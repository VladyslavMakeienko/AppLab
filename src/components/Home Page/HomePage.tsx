import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { HomeChip } from "./Elements for Home/HomeChip";
import { HomeImage } from "./Elements for Home/HomeImage";
import City from "../../assets/images/City.svg";
import { HomeTexts } from "./Elements for Home/HomeTexts";
import { AnimatedParticles } from "../Common/AnimatedParticles";
import { HomeButtons } from "./Elements for Home/HomeButtons";

const useStyles = makeStyles((theme: Theme) => ({
  containerPageStyles: {
    display: "flex",
    flexDirection: "row",
    margin: "0 0 114px 0",
    justifyContent: "space-around",
    alignItems: "center",
    background: `no-repeat url(${City}) bottom`,
    backgroundSize: "contain",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
  firstBlockStyles: {
    display: "flex",
    flexDirection: "column",
    zIndex: 2,
    [theme.breakpoints.only("sm")]: {
      margin: "0 0 0 30px",
    },
    [theme.breakpoints.only("xs")]: {
      alignItems: "center",
      margin: "0 0 39px 0",
    },
  },
}));

/* --- Home Page --- */

export const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <div id="home" className={classes.containerPageStyles}>
      <div className={classes.firstBlockStyles}>
        <HomeChip />
        <HomeTexts />
        <HomeButtons />
      </div>
      <HomeImage />
      <AnimatedParticles />
    </div>
  );
};
