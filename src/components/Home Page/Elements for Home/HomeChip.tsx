import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { StyledChip } from "../../Common/Customizing Components/StyledChip";

const useStyles = makeStyles((theme: Theme) => ({
  containerStyles: {
    display: "flex",
  },
  iconStyles: {
    backgroundColor: "#FEAA25",
    borderRadius: "25px",
    color: "#FFFFFF",
    width: "35px",
    height: "35px",
    marginLeft: "0",
  },
  chipStyles: {
    color: "#242F51",
    backgroundColor: "#E2EAED",
    fontSize: "18px",
    height: "36px",
    fontFamily: "Poppins, sans-serif",
    width: "363px",
    justifyContent: "space-between",
    [theme.breakpoints.only("sm")]: {
      width: "285px",
      fontSize: "16px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "285px",
      fontSize: "16px",
    },
  },
}));

/* --- Chip for Home Page --- */

export const HomeChip: React.FC = () => {
  const classes = useStyles();
  const textChip: string = `#1 Editiors Choice App of 2020`;
  
  return (
    <div className={classes.containerStyles}>
      <StyledChip
        icon={<CheckCircleOutlineIcon className={classes.iconStyles} />}
        label={textChip}
        className={classes.chipStyles}
      />
    </div>
  );
};
