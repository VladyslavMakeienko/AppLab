import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AutomaticPayouts from "../../../assets/images/AutomaticPayouts.svg";
import NetworkEffect from "../../../assets/images/NetworkEffect.svg";
import BiggerRewardsMethod from "../../../assets/images/BiggerRewardsMethod.svg";
import { Grid, useScrollTrigger, Zoom } from "@material-ui/core";
import { ImagesSiteTypes } from "../../../types/typesForSite";
import { TextForSite } from "../../Common/TextForSite";
import { ImagesForSite } from "../../Common/ImagesForSite";

const useStyles = makeStyles((theme: Theme) => ({
  containerImagesStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imagesPositionStyles: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
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
  textStyles: {
    display: "flex",
    color: "#616368",
    fontSize: "16px",
    width: "259px",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.between("xs", "sm")]: {
      textAlign: "center",
    },
  },
  imageContainerStyles: {
    [theme.breakpoints.between("xs", "sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

/* --- Images for Smart jackpot Page --- */

export const SmartJackpotsImages: React.FC = () => {
  const classes = useStyles();
  const jackpotsImages: ImagesSiteTypes[] = [
    {
      title: "Automatic Payouts",
      imgUrl: AutomaticPayouts,
      backgroundColor: "#FFECEF",
      textColor: "#F55767",
    },
    {
      title: "Network Effect",
      imgUrl: NetworkEffect,
      backgroundColor: "#F4F4FF",
      textColor: "#2563FF",
    },
    {
      title: "Bigger Rewards Method",
      imgUrl: BiggerRewardsMethod,
      backgroundColor: "#E4FFEE",
      textColor: "#40975F",
    },
  ];
  const textForSubtext: string = `Get your blood tests delivered at home collect 
  a sample from the news your blood tests.`;
  const marginForImage: string = "35px 0";
  /* scroll position value for animated content opening */
  const scrollTrigger = useScrollTrigger();

  return (
    <Zoom mountOnEnter in={scrollTrigger} timeout={2040}>
      <Grid container className={classes.containerImagesStyles}>
        {jackpotsImages.map((element: ImagesSiteTypes, index: number) => {
          return (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              className={classes.imagesPositionStyles}
            >
              <div className={classes.imageContainerStyles}>
                <ImagesForSite
                  backgroundColor={element.backgroundColor}
                  imgUrl={element.imgUrl}
                  title={element.title}
                  margin={marginForImage}
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
            </Grid>
          );
        })}
      </Grid>
    </Zoom>
  );
};
