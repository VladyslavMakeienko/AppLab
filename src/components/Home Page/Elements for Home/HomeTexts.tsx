import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TextForSite } from "../../Common/TextForSite";
import { TextSiteTypes } from "../../../types/typesForSite";

const useStyles = makeStyles((theme: Theme) => ({
  titleStyles: {
    color: "#242F51",
    fontSize: "60px",
    display: "flex",
    fontWeight: "bold",
    width: "513px",
    lineHeight: "1.3",
    margin: "24px 0 26px 0",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("sm")]: {
      width: "232px",
      fontSize: "40px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "232px",
      fontSize: "40px",
      textAlign: "center",
    },
  },
  textStyles: {
    color: "#616368",
    fontSize: "18px",
    display: "flex",
    width: "481px",
    margin: "0 0 39px 0",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("sm")]: {
      width: "223px",
      fontSize: "16px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "223px",
      fontSize: "16px",
      textAlign: "center",
    },
  },
}));

/* --- Texts for Home Page --- */

export const HomeTexts: React.FC = () => {
  const classes = useStyles();
  const textForTitle: string = `Best app for your
  modern lifestyle`;
  const textForSubtext: string = `Increase productivity with a simple to-do app. app for
  managing your personal budgets.`;
  const textsInfo: TextSiteTypes[] = [
    {
      text: textForTitle,
      classText: classes.titleStyles,
    },
    { text: textForSubtext, classText: classes.textStyles },
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
