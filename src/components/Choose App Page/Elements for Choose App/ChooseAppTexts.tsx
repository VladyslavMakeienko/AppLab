import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TextForSite } from "../../Common/TextForSite";
import { TextSiteTypes } from "../../../types/typesForSite";

const useStyles = makeStyles((theme: Theme) => ({
  titleStyles: {
    color: "#242F51",
    fontSize: "36px",
    display: "flex",
    width: "432px",
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: "1.3",
    margin: "0 0 35px 0",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("xs")]: {
      width: "280px",
      fontSize: "24px",
    },
  },
  textStyles: {
    color: "#616368",
    fontSize: "16px",
    display: "flex",
    width: "606px",
    textAlign: "center",
    margin: "0 0 93px 0",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("sm")]: {
      width: "432px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "280px",
    },
  },
}));

/* --- Texts for choose our app Page --- */

export const ChooseAppTexts: React.FC = () => {
  const classes = useStyles();
  const textForTitle: string = `Why you should choose our app`;
  const textForSubtext: string = `The rise of mobile devices transforms the way we consume information entirely 
  and the world's most elevant channels such as Facebook.`;
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
