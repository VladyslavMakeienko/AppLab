import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TextForSite } from "../../Common/TextForSite";
import { TextSiteTypes } from "../../../types/typesForSite";

const useStyles = makeStyles((theme: Theme) => ({
  titleStyles: {
    color: "#242F51",
    fontSize: "36px",
    fontWeight: "bold",
    width: "318px",
    lineHeight: "1.3",
    margin: "0 0 30px 0",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
      width: "420px",
    },
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      width: "280px",
      fontSize: "24px",
    },
  },
  textStyles: {
    color: "#616368",
    fontSize: "16px",
    width: "392px",
    margin: "0 0 59px 0",
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
}));

/* --- Texts for Ultimate features that we built Page --- */

export const UltimateFeaturesTexts: React.FC = () => {
  const classes = useStyles();
  const textForTitle: string = `Ultimate features that we built`;
  const textForSubtext: string = `The rise of mobile devices transforms the way we
  consume information entirely.`;
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
