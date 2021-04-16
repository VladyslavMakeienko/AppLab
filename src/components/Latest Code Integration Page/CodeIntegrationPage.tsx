import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { CodeIntegrationImage } from "./Elements for Code/CodeIntegrationImage";
import { CodeIntegrationTexts } from "./Elements for Code/CodeIntegrationTexts";
import { CodeIntegrationButton } from "./Elements for Code/CodeIntegrationButton";

const useStyles = makeStyles((theme: Theme) => ({
  containerPageStyles: {
    display: "flex",
    alignItems: "center",
    margin: "0 0 216px 0",
    justifyContent: "space-evenly",
    [theme.breakpoints.between("xs", "sm")]: {
      flexDirection: "column-reverse",
    },
  },
  firstBlockStyles: {
    display: "flex",
    flexDirection: "column",
    margin: "0 0 0 111px",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0 0 40px 0",
      alignItems: "center",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "0",
    },
  },
}));

/* --- Designed & built by the latest code integration Page --- */

export const CodeIntegrationPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerPageStyles}>
      <CodeIntegrationImage />
      <div className={classes.firstBlockStyles}>
        <CodeIntegrationTexts />
        <CodeIntegrationButton />
      </div>
    </div>
  );
};
