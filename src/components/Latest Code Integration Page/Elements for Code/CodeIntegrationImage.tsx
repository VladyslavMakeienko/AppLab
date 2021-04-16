import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import CodeIntegration from "../../../assets/images/CodeIntegration.png";
import { ImageForSite } from "../../Common/ImageForSite";

const useStyles = makeStyles((theme: Theme) => ({
  imageStyles: {
    width: "100%",
    objectFit: "cover",
    margin: "0 0 0 30px",
    overflow: "hidden",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0 15px",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "0",
    },
  },
  containerImageStyles: {
    display: "flex",
  },
}));

/* --- Image for Designed & built by the latest code integration Page --- */

export const CodeIntegrationImage: React.FC = () => {
  const classes = useStyles();
  const altText: string = "Code Integration";

  return (
    <div className={classes.containerImageStyles}>
      <ImageForSite
        title={altText}
        classText={classes.imageStyles}
        imgUrl={CodeIntegration}
      />
    </div>
  );
};
