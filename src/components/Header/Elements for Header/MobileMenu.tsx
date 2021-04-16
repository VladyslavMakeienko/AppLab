import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LogoSiteText } from "../../Common/LogoSiteText";
import { DrawerForHeader } from "./DrawerForHeader";

const useStyles = makeStyles(() => ({
  containerStyles: {
    display: "flex",
    alignItems: "center",
  },
  logoStyles: {
    color: "#242F51",
  },
  logoContainerStyles: {
    opacity: "1",
    fontSize: "28px",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
    padding: "0",
  },
}));

/* --- Mobile/Table version of site header --- */

export const MobileMenu: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerStyles}>
      <DrawerForHeader />
      <LogoSiteText
        classTextForContainer={classes.logoContainerStyles}
        classText={classes.logoStyles}
      />
    </div>
  );
};
