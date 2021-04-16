import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ButtonForSite } from "../../Common/ButtonForSite";
import { ButtonSiteTypes } from "../../../types/typesForSite";

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
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    width: "171px",
    height: "56px",
    borderRadius: "30px",
    boxShadow: "none",
    transition: "all ease 0.7s",
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
  buttonSecondStyles: {
    color: "#2500F9",
    padding: "0 10px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    textTransform: "none",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    background: "linear-gradient(to right, #2500F9 50%, #FFFFFF 50%)",
    backgroundSize: "201% 100%",
    backgroundPosition: "right bottom",
    width: "171px",
    height: "56px",
    borderRadius: "30px",
    boxShadow: "none",
    transition: "all ease 0.7s",
    margin: "0 0 0 27px",
    "&:hover": {
      color: "#FFFFFF",
      backgroundPosition: "left bottom",
      boxShadow: "none",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "20px 0 5px 0",
      width: "160px",
      height: "50px",
      fontSize: "15px",
    },
  },
  buttonsContainerStyles: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.between("xs", "sm")]: {
      flexDirection: "column",
    },
  },
}));

/* --- Buttons for Home Page --- */

export const HomeButtons: React.FC = () => {
  const classes = useStyles();
  const textForButtonFirst: string = "Try for free";
  const textForButtonSecond: string = "Watch demo video";
  const buttonsInfo: ButtonSiteTypes[] = [
    {
      textForButton: textForButtonFirst,
      classText: classes.buttonStyles,
    },
    {
      textForButton: textForButtonSecond,
      classText: classes.buttonSecondStyles,
    },
  ];

  return (
    <div className={classes.buttonsContainerStyles}>
      {buttonsInfo.map((element: ButtonSiteTypes, index: number) => {
        return (
          <ButtonForSite
            key={index}
            textForButton={element.textForButton}
            classText={element.classText}
          />
        );
      })}
    </div>
  );
};
