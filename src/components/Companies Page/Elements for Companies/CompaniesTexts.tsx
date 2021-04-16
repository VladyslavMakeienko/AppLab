import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextForSite } from "../../Common/TextForSite";

const useStyles = makeStyles(() => ({
  titleStyles: {
    color: "#242F51",
    fontSize: "16px",
    display: "flex",
    width: "207px",
    textAlign: "center",
    lineHeight: "1.3",
    margin: "0 0 38px 0",
    fontFamily: "Poppins, sans-serif",
  },
}));

/* --- Texts for Trusted by companies like Page --- */

export const CompaniesTexts: React.FC = () => {
  const classes = useStyles();
  const textForTitle: string = "Trusted by companies like";

  return (
    <>
      <TextForSite text={textForTitle} classText={classes.titleStyles} />
    </>
  );
};
