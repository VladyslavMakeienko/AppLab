import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LogoSiteText } from "../../Common/LogoSiteText";
import { LinksForSite } from "../../Common/LinksForSite";
import { ButtonForSite } from "../../Common/ButtonForSite";

const useStyles = makeStyles(() => ({
  logoStyles: {
    color: "#242F51",
  },
  logoContainerStyles: {
    opacity: "1",
    fontSize: "30px",
    fontWeight: "bold",
    padding: "0",
    fontFamily: "Poppins, sans-serif",
  },
  buttonStyles: {
    color: "#FFFFFF",
    padding: "0 12px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    textTransform: "none",
    background: "linear-gradient(to left, #2500F9 50%, #FFFFFF 50%)",
    backgroundSize: "201% 100%",
    backgroundPosition: "right bottom",
    width: "171px",
    height: "56px",
    borderRadius: "30px",
    boxShadow: "none",
    transition: "all ease 0.7s",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    "&:hover": {
      color: "#2500F9",
      backgroundPosition: "left bottom",
      boxShadow: "none",
    },
  },
  containerStyles: {
    display: "flex",
    alignItems: "center",
  },
  containerLinksStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "52px 56px 51px 0",
  },
  linkStyles: {
    color: "#242F51",
    textDecoration: "none",
    padding: "0 12px",
    fontSize: "16px",
    cursor: "pointer",
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    "&:hover": {
      textDecoration: "none",
      color: "#2500F9",
    },
  },
}));

/* --- Laptop/PC menu of site header --- */

export const BigMenu: React.FC = () => {
  const classes = useStyles();
  const textForButton: string = "Try for free";

  return (
    <>
      <LogoSiteText
        classTextForContainer={classes.logoContainerStyles}
        classText={classes.logoStyles}
      />
      <div className={classes.containerStyles}>
        <LinksForSite
          classText={classes.linkStyles}
          classTextForContainer={classes.containerLinksStyles}
        />
        <ButtonForSite
          textForButton={textForButton}
          classText={classes.buttonStyles}
        />
      </div>
    </>
  );
};
