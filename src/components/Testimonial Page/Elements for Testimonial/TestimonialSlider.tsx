import React, { useState } from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { ImageForSite } from "../../Common/ImageForSite";
import { TextForSite } from "../../Common/TextForSite";
import CEO from "../../../assets/images/CEO.png";
import Heisenberg from "../../../assets/images/Heisenberg.jpg";
import Frank from "../../../assets/images/Frank.jpg";
import Pablo from "../../../assets/images/Pablo.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  containerStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
  imageStyles: {
    height: 91,
    width: 91,
    margin: "0 30px 0 0",
    objectFit: "cover",
    borderRadius: "65px",
  },
  buttonsContainerStyles: {
    display: "flex",
    alignItems: "center",
  },
  buttonStyles: {
    borderRadius: "65px",
    height: "51px",
    width: "51px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#EFF3F8",
    border: "1px solid #EFF3F8",
    color: "#2500F9",
  },
  borderBlockStyles: {
    borderRight: "2px solid #EFF3F8",
    margin: "0 10px",
    height: "26px",
  },
  containerImageAndTextStyles: {
    display: "flex",
    margin: "0 151px 0 0",
    alignItems: "center",
    [theme.breakpoints.only("md")]: {
      margin: "0 0 35px 0",
    },
    [theme.breakpoints.only("sm")]: {
      margin: "0 51px 0 0",
    },
    [theme.breakpoints.only("xs")]: {
      margin: "0 0 35px 0",
    },
  },
  textContainerStyles: {
    display: "flex",
    flexDirection: "column",
  },
  titleStyles: {
    color: "#242F51",
    fontWeight: "bold",
    lineHeight: "1.3",
    fontFamily: "Poppins, sans-serif",
    fontSize: "18px",
    margin: "0 0 15px 0",
    width: "156px",
  },
  textStyles: {
    fontFamily: "Poppins, sans-serif",
    color: "#616368",
    lineHeight: "1.3",
    fontSize: "18px",
    width: "147px",
  },
}));

/* --- Slider for Testimonial Page --- */

export const TestimonialSlider: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const infoSlider = [
    {
      title: "Zoltan Nemeth",
      label: "CEO of Pixler Lab",
      imgPath: CEO,
    },
    {
      title: "Heisenberg",
      label: "Breaking Bad",
      imgPath: Heisenberg,
    },
    {
      title: "Frank Underwood",
      label: "House of Cards",
      imgPath: Frank,
    },
    {
      title: "Pablo Escobar",
      label: "Narcos",
      imgPath: Pablo,
    },
  ];
  /* --- current slide  --- */
  const [activeStep, setActiveStep] = useState(0);
  /* --- total number of slides  --- */
  const maxSteps = infoSlider.length;
  /* --- the click function opens the next slide  --- */
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  /* --- the click function opens the previous slide  --- */
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.containerStyles}>
      <div className={classes.containerImageAndTextStyles}>
        <ImageForSite
          title={infoSlider[activeStep].label}
          classText={classes.imageStyles}
          imgUrl={infoSlider[activeStep].imgPath}
        />
        <div className={classes.textContainerStyles}>
          <TextForSite
            text={infoSlider[activeStep].title}
            classText={classes.titleStyles}
          />
          <TextForSite
            text={infoSlider[activeStep].label}
            classText={classes.textStyles}
          />
        </div>
      </div>
      <div className={classes.buttonsContainerStyles}>
        <IconButton
          onClick={handleBack}
          disabled={activeStep === 0}
          className={classes.buttonStyles}
        >
          {theme.direction === "rtl" ? <ArrowForwardIcon /> : <ArrowBackIcon />}
        </IconButton>
        <span className={classes.borderBlockStyles}></span>
        <IconButton
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          className={classes.buttonStyles}
        >
          {theme.direction === "rtl" ? <ArrowBackIcon /> : <ArrowForwardIcon />}
        </IconButton>
      </div>
    </div>
  );
};
