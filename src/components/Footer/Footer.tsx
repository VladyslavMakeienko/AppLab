import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { CopyrightText } from "./Elements for Footer/CopyrightText";
import { LogoSiteText } from "../Common/LogoSiteText";
import { SocialNetworks } from "../Common/SocialNetworks";
import { DownloadPage } from "../Download Page/DownloadPage";
import { LinksForSite } from "../Common/LinksForSite";

const useStyles = makeStyles((theme: Theme) => ({
  containerFooterStyles: {
    display: "flex",
    flexDirection: "column",
  },
  footerStyles: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: "#09142E",
  },
  containerStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoStyles: {
    color: "#FFFFFF",
  },
  logoContainerStyles: {
    opacity: "1",
    fontSize: "30px",
    fontWeight: "bold",
    padding: "116px 0 0 0",
    fontFamily: "Poppins, sans-serif",
  },
  linkStyles: {
    color: "white",
    textDecoration: "none",
    padding: "0 12px",
    fontSize: "16px",
    cursor: "pointer",
    fontFamily: "Poppins, sans-serif",
    "&:hover": {
      color: "#2500F9",
      textDecoration: "none",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "0 0 16px 0",
    },
  },
  containerLinksStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "52px 0 51px 0",
    zIndex: 2,
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
}));

/* --- Footer Site --- */

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerFooterStyles}>
      <DownloadPage />
      <footer className={classes.footerStyles}>
        <Container maxWidth="sm" className={classes.containerStyles}>
          <LogoSiteText
            classText={classes.logoStyles}
            classTextForContainer={classes.logoContainerStyles}
          />
          <LinksForSite
            classText={classes.linkStyles}
            classTextForContainer={classes.containerLinksStyles}
          />
          <SocialNetworks />
          <CopyrightText />
        </Container>
      </footer>
    </div>
  );
};
