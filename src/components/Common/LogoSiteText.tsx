import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { LogoSiteTypes } from "../../types/typesForSite";

const useStyles = makeStyles(() => ({
  textAppStyles: {
    color: "#FCAE61",
  },
}));

/* --- APPLAB Logo component for site --- */

export const LogoSiteText: React.FC<LogoSiteTypes> = ({
  classText,
  classTextForContainer,
}) => {
  const classes = useStyles();
  const textLogoApp = `App`;
  const textLogoLab = `Lab`;

  return (
    <Typography variant="body2" className={classTextForContainer}>
      <span className={classes.textAppStyles}>{textLogoApp}</span>
      <span className={classText}>{textLogoLab}</span>
    </Typography>
  );
};
