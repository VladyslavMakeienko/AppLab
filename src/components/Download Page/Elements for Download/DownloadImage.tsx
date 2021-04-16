import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Download from "../../../assets/images/Download.png";
import { ImageForSite } from "../../Common/ImageForSite";

const useStyles = makeStyles(() => ({
  imageStyles: {
    width: "100%",
    objectFit: "cover",
  },
  containerImageStyles: {
    display: "flex",
  },
}));

/* --- Image for Start your 30 days free trail today! Page --- */

export const DownloadImage: React.FC = () => {
  const classes = useStyles();
  const altText = "Download";

  return (
    <div className={classes.containerImageStyles}>
      <ImageForSite
        title={altText}
        imgUrl={Download}
        classText={classes.imageStyles}
      />
    </div>
  );
};
