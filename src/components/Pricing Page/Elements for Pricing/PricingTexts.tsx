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
    lineHeight: "1.3",
    width: "565px",
    margin: "0 0 33px 0",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("xs")]: {
      width: "280px",
      fontSize: "25px",
    },
  },
  textStyles: {
    color: "#616368",
    fontSize: "16px",
    display: "flex",
    width: "593px",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    margin: "0 0 81px 0",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      width: "280px",
    },
  },
}));

/* --- Texts for Get awesome features, without extra charges Page --- */

export const PricingTexts: React.FC = () => {
  const classes = useStyles();
  const textForTitle: string = `Get awesome features, without extra charges`;
  const textForSubtext: string = `The rise of mobile devices transforms the way we consume information
  entirely and the world's most elevant channels such as Facebook.`;
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
