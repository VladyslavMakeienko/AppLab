import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useScrollTrigger, Zoom } from "@material-ui/core";
import { PropsForScrollTopSite } from "../../../types/typesForSite";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 10,
    },
  })
);

/* --- Scroll to top of site --- */

export const ScrollTopSite = (props: PropsForScrollTopSite) => {
  const { children, window } = props;
  const classes = useStyles();
  /* --- pop-up icon trigger --- */
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  /* --- click Function to raise the scroll to the site header --- */
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};
