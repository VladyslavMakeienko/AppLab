import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TextForSite } from "../../Common/TextForSite";
import { TextSiteTypes } from "../../../types/typesForSite";

const useStyles = makeStyles((theme: Theme) => ({
  titleStyles: {
    color: "#242F51",
    fontSize: "36px",
    display: "flex",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
    width: "318px",
    lineHeight: "1.3",
    margin: "0 0 19px 0",
    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
      width: "420px",
    },
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      width: "280px",
    },
  },
  textStyles: {
    color: "#616368",
    fontSize: "16px",
    display: "flex",
    width: "392px",
    fontFamily: "Poppins, sans-serif",
    margin: "0 0 62px 0",
    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
      width: "420px",
      margin: "0 0 30px 0",
    },
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      width: "280px",
      margin: "0 0 30px 0",
    },
  },
}));

/* --- Texts for Key Features Page --- */

export const KeyFeaturesTexts: React.FC = () => {
  const classes = useStyles();
  const textForTitle: string = `Awesome apps features`;
  const textForSubtext: string = `Increase productivity with a simple to-do app. app for
  managing your personal budgets.`;
  const textsInfo: TextSiteTypes[] = [
    {
      text: textForTitle,
      classText: classes.titleStyles,
    },
    {
      text: textForSubtext,
      classText: classes.textStyles,
    },
  ];

  return (
    <>
      {textsInfo.map((element: TextSiteTypes, index: number) => {
        return (
          <TextForSite
            key={index}
            text={element.text}
            classText={element.classText}
          />
        );
      })}
    </>
  );
};
