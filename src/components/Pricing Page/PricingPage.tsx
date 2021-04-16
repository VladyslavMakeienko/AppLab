import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { PricingTexts } from "./Elements for Pricing/PricingTexts";
import { PricingCardsContainer } from "./Elements for Pricing/PricingCardsContainer";

const useStyles = makeStyles((theme: Theme) => ({
  containerPageStyles: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: "0 0 258px 0",
  },
  firstBlockStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

/* --- Get awesome features, without extra charges Page --- */

export const PricingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div id="pricing" className={classes.containerPageStyles}>
      <div className={classes.firstBlockStyles}>
        <PricingTexts />
      </div>
      <PricingCardsContainer />
    </div>
  );
};
