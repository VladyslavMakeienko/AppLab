import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TextForSite } from "../../Common/TextForSite";
import { TextSiteTypes } from "../../../types/typesForSite";
import { RatingForSite } from "../../Common/RatingForSite";

const useStyles = makeStyles((theme: Theme) => ({
  titleStyles: {
    color: "#242F51",
    fontSize: "40px",
    display: "flex",
    fontWeight: "bold",
    lineHeight: "1.3",
    margin: "0 0 28px 0",
    width: "477px",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("md")]: {
      width: "288px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.only("xs")]: {
      width: "280px",
      fontSize: "25px",
    },
  },
  textStyles: {
    color: "#616368",
    fontSize: "16px",
    display: "flex",
    margin: "0 0 43px 0",
    width: "474px",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("md")]: {
      width: "288px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.only("xs")]: {
      width: "280px",
    },
  },
  subtitleStyles: {
    color: "#242F51",
    fontSize: "20px",
    fontWeight: "bold",
    display: "flex",
    margin: "29px 0 31px 0",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.between("xs", "sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.only("xs")]: {
      width: "280px",
    },
  },
  subtextStyles: {
    display: "flex",
    color: "#616368",
    fontSize: "16px",
    alignSelf: "flex-start",
    width: "563px",
    margin: "0 0 59px 0",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("md")]: {
      width: "319px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.only("sm")]: {
      width: "552px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "280px",
    },
  },
  containerStyles: {
    display: "flex",
    flexDirection: "column",
  },
}));

/* --- Texts for Testimonial Page --- */

export const TestimonialTexts: React.FC = () => {
  const classes = useStyles();
  const textForTitle: string = `Meet Client Satisfaction
  by using product`;
  const textForSubtext: string = `The rise of mobile devices transforms the way we consume.
  elevant channels such as Facebook.`;
  const textForSubtitle: string = "User friendly & Customizable";
  const textForSubtextSecond: string = `Bring to the table win-win survival strategies to ensure proactive
  domination. At the end of the day, going forward, a new normal that
  has evolved from generation X is on the runway heading towards a
  streamlined cloud solution. User generated content in real-time will
  have multiple touchpoints for offshoring.`;
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

      <RatingForSite />

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
    </>
  );
};
