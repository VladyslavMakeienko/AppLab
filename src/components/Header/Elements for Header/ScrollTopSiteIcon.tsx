import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { ScrollTopSite } from "./ScrollTopSite";

const useStyles = makeStyles(() => ({
  iconStyles: {
    background: "#2500F9",
    color: "#FFFFFF",
    "&:hover": {
      background: "#6045ff",
      color: "#FFFFFF",
    },
  },
}));

/* --- Icon scroll to top of site --- */

export const ScrollTopSiteIcon: React.FC = () => {
  const classes = useStyles();

  return (
    <ScrollTopSite>
      <Fab
        className={classes.iconStyles}
        size="small"
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTopSite>
  );
};
