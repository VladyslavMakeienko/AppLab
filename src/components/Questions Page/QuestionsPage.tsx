import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { QuestionsAccordion } from "./Elements for Questions/QuestionsAccordion";
import { QuestionsTexts } from "./Elements for Questions/QuestionsTexts";

const useStyles = makeStyles(() => ({
  containerAppPageStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 0 128px 0",
    zIndex: 2,
  },
}));

/* --- FAQ Page --- */

export const QuestionsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div id="faq" className={classes.containerAppPageStyles}>
      <QuestionsTexts />
      <QuestionsAccordion />
    </div>
  );
};
