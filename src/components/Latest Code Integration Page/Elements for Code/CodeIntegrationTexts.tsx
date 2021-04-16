import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TextForSite } from "../../Common/TextForSite";
import { TextSiteTypes } from "../../../types/typesForSite";

const useStyles = makeStyles((theme: Theme) => ({
  titleStyles: {
    color: "#242F51",
    fontSize: "36px",
    fontWeight: "bold",
    margin: "0 0 29px 0",
    width: "349px",
    lineHeight: "1.3",
    fontFamily: "Poppins, sans-serif",
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
    width: "406px",
    margin: "0 0 41px 0",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      width: "280px",
      margin: "0 0 30px 0",
    },
  },
}));

/* --- Texts for Designed & built by the latest code integration Page --- */

export const CodeIntegrationTexts: React.FC = () => {
  const classes = useStyles();
  const textForTitle: string = `Designed & built by the latest code integration`;
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
