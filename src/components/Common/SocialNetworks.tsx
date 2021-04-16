import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  iconStyles: {
    color: "#273043",
    "&:hover": {
      color: "white",
    },
  },
  containerIconsStyles: {
    display: "flex",
    padding: "0 0 91px 0",
    zIndex: 2,
  },
}));

/* --- Social Networks Icons component for site --- */

export const SocialNetworks: React.FC = React.memo(() => {
  const classes = useStyles();
  const socialNetworksIcons: Array<JSX.Element> = [
    <FacebookIcon />,
    <TwitterIcon />,
    <InstagramIcon />,
    <GitHubIcon />,
  ];

  return (
    <div className={classes.containerIconsStyles}>
      {socialNetworksIcons.map((value: JSX.Element, index: number) => {
        return (
          <IconButton key={index} className={classes.iconStyles}>
            {value}
          </IconButton>
        );
      })}
    </div>
  );
});
