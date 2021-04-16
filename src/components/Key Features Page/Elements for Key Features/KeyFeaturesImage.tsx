import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import KeyFeaturesPhone from "../../../assets/images/KeyFeaturesPhone.png";
import { ImageForSite } from "../../Common/ImageForSite";

const useStyles = makeStyles(() => ({
  imageStyles: {
    width: "100%",
    objectFit: "cover",
    overflow: "hidden",
  },
  containerImageStyles: {
    display: "flex",
  },
}));

/* --- Image for Key Features Page --- */

export const KeyFeaturesImage: React.FC = () => {
  const classes = useStyles();
  const altText: string = "Mobile Phone";

  return (
    <div className={classes.containerImageStyles}>
      <ImageForSite
        title={altText}
        classText={classes.imageStyles}
        imgUrl={KeyFeaturesPhone}
      />
    </div>
  );
};
