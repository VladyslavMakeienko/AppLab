import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import HomePhone from "../../../assets/images/HomePhone.svg";
import { ImageForSite } from "../../Common/ImageForSite";

const useStyles = makeStyles((theme: Theme) => ({
  imageStyles: {
    margin: "0 0 11px 0",
    objectFit: "cover",
    [theme.breakpoints.only("sm")]: {
      width: "87%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
}));

/* --- Image for Home Page --- */

export const HomeImage: React.FC = () => {
  const classes = useStyles();
  const altText: string = "Mobile Phone";
  
  return (
    <div>
      <ImageForSite
        title={altText}
        imgUrl={HomePhone}
        classText={classes.imageStyles}
      />
    </div>
  );
};
