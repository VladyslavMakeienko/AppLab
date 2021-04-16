import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TextForSite } from "../../Common/TextForSite";
import { TextSiteTypes } from "../../../types/typesForSite";

const useStyles = makeStyles((theme: Theme) => ({
  titleStyles: {
    color: "#242F51",
    fontSize: "48px",
    display: "flex",
    fontWeight: "bold",
    lineHeight: "1.3",
    fontFamily: "Poppins, sans-serif",
    margin: "0 0 30px 0",
    [theme.breakpoints.only("md")]: {
      fontSize: "36px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "24px",
    },
  },
  textStyles: {
    color: "#616368",
    fontSize: "16px",
    display: "flex",
    width: "606px",
    fontFamily: "Poppins, sans-serif",
    margin: "0 0 51px 0",
    [theme.breakpoints.only("md")]: {
      width: "400px",
      fontSize: "14px",
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: "365px",
      textAlign: "center",
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "265px",
      textAlign: "center",
      margin: "0 0 31px 0",
    },
  },
}));

/* --- Texts for Start your 30 days free trail today! Page --- */

export const DownloadTexts: React.FC = () => {
  const classes = useStyles();
  const textForTitle: string = "Download our App now !";
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
