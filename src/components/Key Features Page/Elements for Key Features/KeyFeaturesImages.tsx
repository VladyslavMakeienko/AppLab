import React from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import FastPerformance from "../../../assets/images/FastPerformance.svg";
import Prototyping from "../../../assets/images/Prototyping.svg";
import VectorEditing from "../../../assets/images/VectorEditing.svg";
import { Grid } from "@material-ui/core";
import { ImagesSiteTypes } from "../../../types/typesForSite";
import { ImagesForSite } from "../../Common/ImagesForSite";
import { TextForSite } from "../../Common/TextForSite";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  containerImagesStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imagesPositionStyles: {
    display: "flex",
    justifyContent: "center",
  },
  textStyles: {
    display: "flex",
    color: "#616368",
    fontSize: "16px",
    width: "259px",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
    },
  },
  titleStyles: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0 0 5px 0",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
    },
  },
  positionStyles: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
}));

/* --- Images for Key Features Page --- */

export const KeyFeaturesImages: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const keyFeaturesImages: ImagesSiteTypes[] = [
    {
      title: "Fast Performance",
      imgUrl: FastPerformance,
      backgroundColor: "#FFECEF",
      textColor: "#F55767",
    },
    {
      title: "Prototyping",
      imgUrl: Prototyping,
      backgroundColor: "#F4F4FF",
      textColor: "#2563FF",
    },
    {
      title: "Vector Editing",
      imgUrl: VectorEditing,
      backgroundColor: "#E4FFEE",
      textColor: "#40975F",
    },
  ];
  const textForSubtext: string = `Get your blood tests delivered at home collect 
  a sample from the news your blood tests.`;
  const marginForSite: string = "35px 32px 35px 0";
  const marginForMobileVersion: string = "35px 0";
  /* --- Mobile/Table version breakpoint of site --- */
  const mobileVersion = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Grid container className={classes.containerImagesStyles}>
      {keyFeaturesImages.map((element: ImagesSiteTypes, index: number) => {
        return (
          <Grid
            item
            xs={12}
            key={index}
            className={classes.imagesPositionStyles}
          >
            <div className={classes.positionStyles}>
              {mobileVersion ? (
                /* --- Mobile/Table version of site --- */
                <ImagesForSite
                  index={index}
                  backgroundColor={element.backgroundColor}
                  imgUrl={element.imgUrl}
                  title={element.title}
                  margin={marginForMobileVersion}
                />
              ) : (
                /* --- Laptop/PC version of site --- */
                <ImagesForSite
                  index={index}
                  backgroundColor={element.backgroundColor}
                  imgUrl={element.imgUrl}
                  title={element.title}
                  margin={marginForSite}
                />
              )}
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
          </Grid>
        );
      })}
    </Grid>
  );
};
