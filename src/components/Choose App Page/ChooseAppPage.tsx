import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ChooseAppImages } from "./Elements for Choose App/ChooseAppImages";
import { ChooseAppTexts } from "./Elements for Choose App/ChooseAppTexts";

const useStyles = makeStyles(() => ({
  containerChooseAppPageStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 0 188px 0",
  },
}));

/* --- Why you should choose our app Page --- */

export const ChooseAppPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerChooseAppPageStyles}>
      <ChooseAppTexts />
      <ChooseAppImages />
    </div>
  );
};
