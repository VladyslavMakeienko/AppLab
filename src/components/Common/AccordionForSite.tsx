import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AccordionSiteTypes } from "../../types/typesForSite";

const useStyles = makeStyles((theme: Theme) => ({
  titleStyles: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#242F51",
    padding: "0 0 0 37px",
    fontFamily: "Poppins, sans-serif",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "0",
      fontSize: "16px",
    },
  },
  textStyles: {
    fontSize: "16px",
    color: "#242F51",
    fontFamily: "Poppins, sans-serif",
    padding: "0 0 0 37px",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "0",
    },
  },
  accordionStyles: {
    margin: "0 0 9px 0",
    width: "946px",
    backgroundColor: "#F5F7FA",
    boxShadow: "none",
    "&::before": {
      backgroundColor: "#F5F7FA",
    },
    [theme.breakpoints.only("sm")]: {
      width: "546px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "280px",
    },
  },
}));

/* ---  Accordion component for site --- */

export const AccordionForSite: React.FC<AccordionSiteTypes> = ({
  titleAccordion,
  textAccordion,
}) => {
  const classes = useStyles();

  return (
    <>
      <Accordion className={classes.accordionStyles}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.titleStyles}>
            {titleAccordion}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.textStyles}>
            {textAccordion}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
