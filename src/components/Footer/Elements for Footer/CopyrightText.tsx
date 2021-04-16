import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) => ({
  copyrightTextLinkStyle: {
    color: "#FFF",
    opacity: "0.21176470588235294",
    fontSize: "14px",
    fontFamily: "Poppins, sans-serif",
    "&:hover": {
      opacity: "1",
      textDecoration: "none",
    },
  },
  containerCopyrightTextStyles: {
    display: "flex",
    padding: "0 0 100px 0",
    zIndex: 2,
    [theme.breakpoints.only("xs")]: {
      width: "244px",
      textAlign: "center",
    },
  },
}));

// YEAR
let now = moment().format("YYYY");

/* --- Text Copyright for Footer --- */

export const CopyrightText: React.FC = () => {
  const classes = useStyles();
  const copyrightText: string = `Copyright© Vladyslav Makeienko ${now}. All rights reserved`;

  return (
    <div className={classes.containerCopyrightTextStyles}>
      <Link className={classes.copyrightTextLinkStyle} href="#back-to-top">
        <span>{copyrightText}</span>
      </Link>
    </div>
  );
};
