import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TextForSite } from "../../Common/TextForSite";
import { TextSiteTypes } from "../../../types/typesForSite";

const useStyles = makeStyles((theme: Theme) => ({
  titleStyles: {
    color: "#242F51",
    fontSize: "40px",
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: "1.3",
    margin: "0 0 32px 0",
    [theme.breakpoints.only("xs")]: {
      fontSize: "24px",
    },
  },
  textStyles: {
    color: "#616368",
    fontSize: "16px",
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    width: "606px",
    margin: "0 0 65px 0",
    textAlign: "center",
    [theme.breakpoints.only("sm")]: {
      width: "432px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "280px",
    },
  },
  subtitleStyles: {
    color: "#242F51",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    padding: "51px 0 0 50px",
    [theme.breakpoints.only("sm")]: {
      padding: "35px 0 0 0",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "35px 0 0 0",
      textAlign: "center",
    },
  },
  subtextStyles: {
    display: "flex",
    fontFamily: "Poppins, sans-serif",
    padding: "37px 0 0 50px",
    width: "801px",
    color: "#616368",
    fontSize: "16px",
    [theme.breakpoints.only("sm")]: {
      width: "498px",
      textAlign: "center",
      padding: "37px 0 0 0",
    },
    [theme.breakpoints.only("xs")]: {
      width: "214px",
      textAlign: "center",
      padding: "27px 0 0 0",
    },
  },
  containerStyles: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F5F7FA",
    width: "946px",
    height: "257px",
    margin: "0 0 9px 0",
    [theme.breakpoints.only("sm")]: {
      width: "546px",
      alignItems: "center",
    },
    [theme.breakpoints.only("xs")]: {
      width: "280px",
      alignItems: "center",
      height: "420px",
    },
  },
}));

/* --- Texts for FAQ Page --- */

export const QuestionsTexts: React.FC = () => {
  const classes = useStyles();
  const textForTitle: string = "Frequently asked questions";
  const textForSubtext: string = `The rise of mobile devices transforms the way we consume information entirely
  and the world's most elevant channels such as Facebook.`;
  const textForSubtitle: string = "How to contact with riders emergency?";
  const textForSubtextSecond: string = ` Leverage agile frameworks to provide a robust synopsis for high level
  overviews. Iterative approaches to corporate strategy foster
  collaborative thinking to further the overall value proposition.
  Organically grow the holistic world view of disruptive innovation via
  workplace diversity and empowerment.`;
  const textsInfo: TextSiteTypes[] = [
    {
      text: textForTitle,
      classText: classes.titleStyles,
    },
    {
      text: textForSubtext,
      classText: classes.textStyles,
    },
    {
      text: textForSubtitle,
      classText: classes.subtitleStyles,
    },
    {
      text: textForSubtextSecond,
      classText: classes.subtextStyles,
    },
  ];

  return (
    <>
      {textsInfo.map((element: TextSiteTypes, index: number) => {
        return index < 2 ? (
          <TextForSite
            key={index}
            text={element.text}
            classText={element.classText}
          />
        ) : (
          ""
        );
      })}
      <div className={classes.containerStyles}>
        {textsInfo.map((element: TextSiteTypes, index: number) => {
          return index >= 2 ? (
            <TextForSite
              key={index}
              text={element.text}
              classText={element.classText}
            />
          ) : (
            ""
          );
        })}
      </div>
    </>
  );
};
