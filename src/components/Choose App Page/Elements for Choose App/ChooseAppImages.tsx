import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppDevelopment from "../../../assets/images/AppDevelopment.svg";
import TimesAward from "../../../assets/images/TimesAward.svg";
import CloudStorage from "../../../assets/images/CloudStorage.svg";
import Customization from "../../../assets/images/Customization.svg";
import UXPlanning from "../../../assets/images/UXPlanning.svg";
import CustomerSupport from "../../../assets/images/CustomerSupport.svg";
import { Grid, Grow, useScrollTrigger } from "@material-ui/core";
import { ImagesSiteTypes } from "../../../types/typesForSite";
import { ImagesForSite } from "../../Common/ImagesForSite";
import { TextForSite } from "../../Common/TextForSite";

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
    margin: "0 0 69px 0",
  },
  textStyles: {
    display: "flex",
    color: "#616368",
    fontSize: "16px",
    width: "258px",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.only("sm")]: {
      width: "219px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "193px",
    },
  },
  titleStyles: {
    color: "#242F51",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0 0 5px 0",
    fontFamily: "Poppins, sans-serif",
  },
}));

/* --- Images for choose our app Page --- */

export const ChooseAppImages: React.FC = () => {
  const classes = useStyles();
  const chooseAppImages: ImagesSiteTypes[] = [
    {
      title: "App Development",
      imgUrl: AppDevelopment,
      backgroundColor: "#FFECEF",
    },
    { title: "10 Times Award", imgUrl: TimesAward, backgroundColor: "#EAF9FF" },
    {
      title: "Cloud Storage",
      imgUrl: CloudStorage,
      backgroundColor: "#FFF6D3",
    },
    {
      title: "Customization",
      imgUrl: Customization,
      backgroundColor: "#E4FFEE",
    },
    { title: "UX Planning", imgUrl: UXPlanning, backgroundColor: "#F4F4FF" },
    {
      title: "Customer Support",
      imgUrl: CustomerSupport,
      backgroundColor: "#FDEEE4",
    },
  ];
  const textForSubtext: string = `Get your blood tests delivered at home collect a sample from the news your blood tests.`;
  /* scroll position value for animated content opening */
  const scrollTrigger = useScrollTrigger();

  return (
    <Grow mountOnEnter in={scrollTrigger} timeout={2040}>
      <Grid container className={classes.containerImagesStyles}>
        {chooseAppImages.map((element: ImagesSiteTypes, index: number) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className={classes.imagesPositionStyles}
              key={index}
            >
              <ImagesForSite
                index={index}
                title={element.title}
                imgUrl={element.imgUrl}
                backgroundColor={element.backgroundColor}
                margin={"35px"}
              />
              <TextForSite
                text={element.title}
                classText={classes.titleStyles}
              />
              <TextForSite
                text={textForSubtext}
                classText={classes.textStyles}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grow>
  );
};
