import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TextForSite } from "../../Common/TextForSite";
import { TextSiteTypes } from "../../../types/typesForSite";

const useStyles = makeStyles((theme: Theme) => ({
  titleStyles: {
    color: "#242F51",
    fontSize: "40px",
    display: "flex",
    fontWeight: "bold",
    lineHeight: "1.3",
    width: "421px",
    borderRight: "2px solid rgba(75, 74, 72, 0.38823529411764707)",
    margin: "0 48px 0 0",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("sm")]: {
      borderBottom: "2px solid rgba(75, 74, 72, 0.38823529411764707)",
      borderRight: "none",
      margin: "0 0 28px 0",
      textAlign: "center",
      padding: "0 0 15px 0",
    },
    [theme.breakpoints.only("xs")]: {
      borderBottom: "2px solid rgba(75, 74, 72, 0.38823529411764707)",
      borderRight: "none",
      margin: "0 0 28px 0",
      textAlign: "center",
      padding: "0 0 15px 0",
      width: "280px",
      fontSize: "25px",
    },
  },
  textStyles: {
    color: "#616368",
    fontSize: "16px",
    display: "flex",
    width: "406px",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      width: "280px",
    },
  },
}));

/* --- Texts for Smart jackpot Page --- */

export const SmartJackpotsTexts: React.FC = () => {
  const classes = useStyles();
  const textForTitle: string = `Smart jackpots that
  you may love this
  anytime & anywhere`;
  const textForSubtext: string = `The rise of mobile devices transforms the way we
  consume information entirely and the world's most
  elevant channels such as Facebook.`;
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
