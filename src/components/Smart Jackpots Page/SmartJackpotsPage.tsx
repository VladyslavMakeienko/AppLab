import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { SmartJackpotsImages } from "./Elements for Jackpots/SmartJackpotsImages";
import { SmartJackpotsTexts } from "./Elements for Jackpots/SmartJackpotsTexts";

const useStyles = makeStyles((theme: Theme) => ({
  containerPageStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 0 114px 0",
  },
  containerTextsStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0 113px 0",
    [theme.breakpoints.between("xs", "sm")]: {
      flexDirection: "column",
      margin: "0 0 30px 0",
    },
  },
}));

/* --- Smart jackpot Page --- */

export const SmartJackpotsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerPageStyles}>
      <div className={classes.containerTextsStyles}>
        <SmartJackpotsTexts />
      </div>
      <SmartJackpotsImages />
    </div>
  );
};
