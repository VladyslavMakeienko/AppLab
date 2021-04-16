import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import UltimateFeatures from "../../../assets/images/UltimateFeatures.png";
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

/* --- Image for Ultimate features that we built Page --- */

export const UltimateFeaturesImage: React.FC = () => {
  const classes = useStyles();
  const altText: string = "Ultimate Features";

  return (
    <div className={classes.containerImageStyles}>
      <ImageForSite
        title={altText}
        classText={classes.imageStyles}
        imgUrl={UltimateFeatures}
      />
    </div>
  );
};
