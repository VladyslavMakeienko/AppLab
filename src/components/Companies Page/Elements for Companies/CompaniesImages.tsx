import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Alonzo from "../../../assets/images/Alonzo.svg";
import Anubis from "../../../assets/images/Anubis.svg";
import Express from "../../../assets/images/Express.svg";
import Maniac from "../../../assets/images/Maniac.svg";
import Southwest from "../../../assets/images/Southwest.svg";
import { Grid } from "@material-ui/core";
import { ImagesSiteTypes } from "../../../types/typesForSite";
import { ImageForSite } from "../../Common/ImageForSite";

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
    margin: "0 0 35px 0",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0 0 42px 0",
    },
  },
  imageStyles: {
    objectFit: "cover",
  },
}));

/* --- Images for Trusted by companies like Page --- */

export const CompaniesImages: React.FC = () => {
  const classes = useStyles();
  const companiesImages: ImagesSiteTypes[] = [
    { title: "Southwest", imgUrl: Southwest },
    { title: "Anubis", imgUrl: Anubis },
    { title: "Alonzo", imgUrl: Alonzo },
    { title: "Express", imgUrl: Express },
    { title: "Maniac", imgUrl: Maniac },
  ];

  return (
    <Grid container className={classes.containerImagesStyles}>
      {companiesImages.map((element: ImagesSiteTypes, index: number) => {
        return (
          <Grid
            item
            xs={12}
            md={4}
            lg={2}
            key={index}
            className={classes.imagesPositionStyles}
          >
            <ImageForSite
              title={element.title}
              imgUrl={element.imgUrl}
              classText={classes.imageStyles}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
