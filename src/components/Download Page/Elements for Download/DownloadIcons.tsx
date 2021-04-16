import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import PlayMarket from "../../../assets/images/PlayMarket.svg";
import AppStore from "../../../assets/images/AppStore.svg";
import { Button } from "@material-ui/core";
import { ImagesSiteTypes } from "../../../types/typesForSite";
import { ImageForSite } from "../../Common/ImageForSite";

const useStyles = makeStyles((theme: Theme) => ({
  iconsStyles: {
    margin: "0 31px 0 0",
    [theme.breakpoints.only("xs")]: {
      margin: "0 0 15px 0",
    },
  },
  iconsContainerStyles: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
  imagesStyles: {
    [theme.breakpoints.only("md")]: {
      width: "150px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "155px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "140px",
    },
  },
}));

/* --- Icons for Start your 30 days free trail today! Page --- */

export const DownloadIcons: React.FC = () => {
  const classes = useStyles();
  const downloadImages: ImagesSiteTypes[] = [
    {
      title: "Play Market",
      imgUrl: PlayMarket,
    },
    {
      title: "App Store",
      imgUrl: AppStore,
    },
  ];

  return (
    <div className={classes.iconsContainerStyles}>
      {downloadImages.map((element: ImagesSiteTypes, index: number) => {
        return (
          <div key={index}>
            {index !== 0 ? (
              <Button>
                <ImageForSite
                  title={element.title}
                  imgUrl={element.imgUrl}
                  classText={classes.imagesStyles}
                />
              </Button>
            ) : (
              <Button className={classes.iconsStyles}>
                <ImageForSite
                  title={element.title}
                  imgUrl={element.imgUrl}
                  classText={classes.imagesStyles}
                />
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
};
