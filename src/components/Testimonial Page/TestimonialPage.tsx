import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TestimonialImage } from "./Elements for Testimonial/TestimonialImage";
import { TestimonialTexts } from "./Elements for Testimonial/TestimonialTexts";
import { TestimonialSlider } from "./Elements for Testimonial/TestimonialSlider";

const useStyles = makeStyles((theme: Theme) => ({
  containerPageStyles: {
    display: "flex",
    alignItems: "center",
    margin: "0 0 172px 0",
    [theme.breakpoints.between("xs", "sm")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
    },
    [theme.breakpoints.up("xl")]: {
      justifyContent: "space-evenly",
    },
  },
  firstBlockStyles: {
    display: "flex",
    flexDirection: "column",
    margin: "0 30px 0 0",
    [theme.breakpoints.up("xl")]: {
      margin: "0",
    },
    [theme.breakpoints.only("lg")]: {
      margin: "0 100px 0 0",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0 0 35px 0",
      alignItems: "center",
    },
  },
}));

/* --- Testimonial Page --- */

export const TestimonialPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div id="testimonial" className={classes.containerPageStyles}>
      <div>
        <TestimonialImage />
      </div>

      <div className={classes.firstBlockStyles}>
        <TestimonialTexts />
        <TestimonialSlider />
      </div>
    </div>
  );
};
