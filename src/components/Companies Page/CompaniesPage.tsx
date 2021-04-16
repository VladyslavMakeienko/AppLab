import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CompaniesImages } from "./Elements for Companies/CompaniesImages";
import { CompaniesTexts } from "./Elements for Companies/CompaniesTexts";
import { useScrollTrigger, Slide } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  containerCompaniesPageStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 0 155px 0",
  },
}));

/* --- Trusted by companies like Page --- */

export const CompaniesPage: React.FC = () => {
  const classes = useStyles();
  /* scroll position value for animated content opening */
  const scrollTrigger = useScrollTrigger();

  return (
    <Slide direction="right" mountOnEnter in={scrollTrigger} timeout={2040}>
      <div className={classes.containerCompaniesPageStyles}>
        <CompaniesTexts />
        <CompaniesImages />
      </div>
    </Slide>
  );
};
