import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ButtonForSite } from "../../Common/ButtonForSite";

const useStyles = makeStyles((theme: Theme) => ({
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
    [theme.breakpoints.between("xs", "sm")]: {
      width: "160px",
      height: "50px",
      fontSize: "15px",
    },
  },
}));

/* --- Button for Designed & built by the latest code integration Page --- */

export const CodeIntegrationButton: React.FC = () => {
  const classes = useStyles();
  const textForButton: string = "Learn more";

  return (
    <>
      <ButtonForSite
        textForButton={textForButton}
        classText={classes.buttonStyles}
      />
    </>
  );
};
