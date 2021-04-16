import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppDevelopment from "../../../assets/images/AppDevelopment.svg";
import TimesAward from "../../../assets/images/TimesAward.svg";
import CloudStorage from "../../../assets/images/CloudStorage.svg";
import Customization from "../../../assets/images/Customization.svg";
import UXPlanning from "../../../assets/images/UXPlanning.svg";
import CustomerSupport from "../../../assets/images/CustomerSupport.svg";
import { Grid, Grow } from "@material-ui/core";
import { ImagesSiteTypes } from "../../../types/typesForSite";
import { ImagesForSite } from "../../Common/ImagesForSite";
import { TextForSite } from "../../Common/TextForSite";
import { ButtonForSite } from "../../Common/ButtonForSite";

const useStyles = makeStyles((theme: Theme) => ({
  containerImagesStyles: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.only("sm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  imagesPositionStyles: {
    display: "flex",
    [theme.breakpoints.only("sm")]: {
      display: "block",
    },
  },
  textStyles: {
    display: "flex",
    color: "#616368",
    fontSize: "16px",
    width: "259px",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.between("xs", "sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.only("xs")]: {
      width: "193px",
    },
  },
  titleStyles: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0 0 5px 0",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.between("xs", "sm")]: {
      textAlign: "center",
    },
  },
  positionStyles: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.between("xs", "sm")]: {
      alignItems: "center",
    },
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
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    width: "171px",
    height: "56px",
    borderRadius: "30px",
    boxShadow: "none",
    transition: "all ease 0.7s",
    margin: "53px 0 0 0",
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
    margin: "53px 0 0 0",
    "&:hover": {
      color: "#FFFFFF",
      backgroundPosition: "left bottom",
      boxShadow: "none",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "53px 0 0 0",
      width: "160px",
      height: "50px",
      fontSize: "15px",
    },
  },
}));

/* --- Images for Ultimate features that we built Page --- */

export const UltimateFeaturesImages: React.FC = () => {
  const classes = useStyles();
  const imagesInfo: ImagesSiteTypes[] = [
    {
      title: "App Development",
      imgUrl: AppDevelopment,
      backgroundColor: "#FFECEF",
    },
    { title: "UX Planning", imgUrl: UXPlanning, backgroundColor: "#F4F4FF" },
    {
      title: "Cloud Storage",
      imgUrl: CloudStorage,
      backgroundColor: "#FFF6D3",
    },
    {
      title: "Customer Support",
      imgUrl: CustomerSupport,
      backgroundColor: "#FDEEE4",
    },
    { title: "10 Times Award", imgUrl: TimesAward, backgroundColor: "#EAF9FF" },
    {
      title: "Customization",
      imgUrl: Customization,
      backgroundColor: "#E4FFEE",
    },
  ];
  const textForSubtext: string = `Get your blood tests delivered at
  home collect a sample from the news your blood tests.`;
  const marginForSite: string = "35px 0";
  const textForButton: string = "See all";
  const textForButtonSecond: string = "Hide all";
  const [open, setOpen] = useState(false);
  /* --- click Function to show / hide images --- */
  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Grid container className={classes.containerImagesStyles}>
      {imagesInfo.map((element: ImagesSiteTypes, index: number) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={12}
            lg={6}
            key={index}
            className={classes.imagesPositionStyles}
          >
            {index < 4 ? (
              <div className={classes.positionStyles}>
                <ImagesForSite
                  backgroundColor={element.backgroundColor}
                  imgUrl={element.imgUrl}
                  title={element.title}
                  margin={marginForSite}
                />
                <div>
                  <TextForSite
                    textColor={element.textColor}
                    text={element.title}
                    classText={classes.titleStyles}
                  />
                  <TextForSite
                    text={textForSubtext}
                    classText={classes.textStyles}
                  />
                </div>
              </div>
            ) : (
              <Grow
                in={open}
                style={{
                  display: open === true ? "flex" : "none",
                  transformOrigin: "0 0 0",
                }}
                {...(open && index === 5 ? { timeout: 1000 } : {})}
              >
                <div className={classes.positionStyles}>
                  <ImagesForSite
                    backgroundColor={element.backgroundColor}
                    imgUrl={element.imgUrl}
                    title={element.title}
                    margin={marginForSite}
                  />
                  <div>
                    <TextForSite
                      textColor={element.textColor}
                      text={element.title}
                      classText={classes.titleStyles}
                    />
                    <TextForSite
                      text={textForSubtext}
                      classText={classes.textStyles}
                    />
                  </div>
                </div>
              </Grow>
            )}
          </Grid>
        );
      })}
      <ButtonForSite
        textForButton={open === true ? textForButtonSecond : textForButton}
        handleClick={handleChange}
        classText={
          open === true ? classes.buttonSecondStyles : classes.buttonStyles
        }
      />
    </Grid>
  );
};
