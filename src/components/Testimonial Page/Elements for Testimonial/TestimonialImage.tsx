import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import WorldMap from "../../../assets/images/WorldMap.png";
import { ImageForSite } from "../../Common/ImageForSite";

const useStyles = makeStyles((theme: Theme) => ({
  imageStyles: {
    width: "100%",
    objectFit: "cover",
    overflow: "hidden",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0 15px",
    },
  },
  containerImageStyles: {
    display: "flex",
  },
}));

/* --- Image for Testimonial Page --- */

export const TestimonialImage: React.FC = () => {
  const classes = useStyles();
  const altText: string = "World Map";

  return (
    <div className={classes.containerImageStyles}>
      <ImageForSite
        title={altText}
        classText={classes.imageStyles}
        imgUrl={WorldMap}
      />
    </div>
  );
};
