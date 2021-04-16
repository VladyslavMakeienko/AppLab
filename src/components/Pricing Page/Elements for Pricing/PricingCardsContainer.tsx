import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ButtonForSite } from "../../Common/ButtonForSite";
import { ButtonSiteTypes, PriceSiteTypes } from "../../../types/typesForSite";
import { PricingCard } from "./PricingCard";

const useStyles = makeStyles((theme: Theme) => ({
  containerCardsStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonBlockFirstStyles: {
    color: "#FFFFFF",
    padding: "0 12px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    textTransform: "none",
    background: "linear-gradient(to left, #2500F9 50%, #FFFFFF 50%)",
    backgroundSize: "201% 100%",
    backgroundPosition: "right bottom",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    width: "171px",
    height: "56px",
    borderRadius: "30px",
    margin: "2px",
    boxShadow: "none",
    transition: "all ease 0.7s",
    "&:active": {
      color: "#2500F9",
      backgroundPosition: "left bottom",
      boxShadow: "none",
    },
  },
  buttonBlockSecondStyles: {
    color: "#616368",
    margin: "2px",
    padding: "0 10px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    textTransform: "none",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    background: "linear-gradient(to right, #2500F9 50%, #FFFFFF 50%)",
    backgroundSize: "201% 100%",
    backgroundPosition: "right bottom",
    width: "171px",
    height: "56px",
    borderRadius: "30px",
    boxShadow: "none",
    transition: "all ease 0.7s",
    "&:active": {
      color: "#FFFFFF",
      backgroundPosition: "left bottom",
      boxShadow: "none",
    },
  },
  buttonsBlockStyles: {
    border: "1px solid #616368",
    borderRadius: "30px",
    display: "flex",
    width: "284px",
    justifyContent: "space-evenly",
    height: "60px",
    margin: "0 0 38px 0",
  },
  buttonCardFirstStyles: {
    color: "#FFFFFF",
    padding: "0 12px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    textTransform: "none",
    background: "linear-gradient(to left, #2500F9 50%, #FFFFFF 50%)",
    backgroundSize: "201% 100%",
    backgroundPosition: "right bottom",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    width: "211px",
    height: "57px",
    borderRadius: "30px",
    boxShadow: "none",
    transition: "all ease 0.7s",
    margin: "0 0 25px 0",
    "&:hover": {
      color: "#2500F9",
      backgroundPosition: "left bottom",
      boxShadow: "none",
    },
  },
  buttonCardSecondStyles: {
    color: "#2500F9",
    margin: "0 0 25px 0",
    padding: "0 10px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    textTransform: "none",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    background: "linear-gradient(to right, #2500F9 50%, #FFFFFF 50%)",
    backgroundSize: "201% 100%",
    backgroundPosition: "right bottom",
    width: "211px",
    height: "57px",
    borderRadius: "30px",
    boxShadow: "none",
    transition: "all ease 0.7s",
    "&:hover": {
      color: "#FFFFFF",
      backgroundPosition: "left bottom",
      boxShadow: "none",
    },
  },
}));

/* --- Cards Container for Get awesome features, without extra charges Page --- */

export const PricingCardsContainer: React.FC = () => {
  const classes = useStyles();
  const textForSwitchButtonFirst: string = "Monthly";
  const textForSwitchButtonSecond: string = "Annually";
  const [open, setOpen] = useState(false);
  /* --- click function to change the cards that will show  --- */
  const handleChange = () => {
    setOpen((prev) => !prev);
  };
  const buttonsInfo: ButtonSiteTypes[] = [
    {
      textForButton: textForSwitchButtonFirst,
      handleClick: () => handleChange(),
      classText:
        open === true
          ? classes.buttonBlockSecondStyles
          : classes.buttonBlockFirstStyles,
    },
    {
      textForButton: textForSwitchButtonSecond,
      handleClick: () => handleChange(),
      classText:
        open === true
          ? classes.buttonBlockFirstStyles
          : classes.buttonBlockSecondStyles,
    },
  ];
  const priceInfoFirst: PriceSiteTypes[] = [
    {
      title: "Business Class",
      subheader: "For small teams or office",
      price: "$0",
      time: "/ month",
      description: [
        "Drag & Drop Builder",
        "1,000's of Templates",
        "Blog Support Tools",
        "eCommerce Store",
      ],
      buttonsInfo: [
        {
          textForButton: "Start free trail",
          classText: classes.buttonCardFirstStyles,
        },
      ],
    },
    {
      title: "Pro Master",
      subheader: "For Best opportunities",
      price: "$99",
      time: "/ month",
      description: [
        "Drag & Drop Builder",
        "1,000's of Templates",
        "Blog Support Tools",
        "eCommerce Store",
      ],
      buttonsInfo: [
        {
          textForButton: "Subscribe Now",
          classText: classes.buttonCardFirstStyles,
        },
        {
          textForButton: "Or Start 14 days trail",
          classText: classes.buttonCardSecondStyles,
        },
      ],
    },
  ];
  const priceInfoSecond: PriceSiteTypes[] = [
    {
      title: "Free",
      subheader: "For small teams or office",
      price: "$0",
      time: "/ month",
      description: [
        "Drag & Drop Builder",
        "1,000's of Templates",
        "Blog Support Tools",
        "eCommerce Store",
      ],
      buttonsInfo: [
        {
          textForButton: "Start free trail",
          classText: classes.buttonCardFirstStyles,
        },
      ],
    },
    {
      title: "Enterprise",
      subheader: "For medium-sized companies",
      price: "$49",
      time: "/ month",
      description: [
        "Drag & Drop Builder",
        "1,000's of Templates",
        "Blog Support Tools",
        "eCommerce Store",
      ],
      buttonsInfo: [
        {
          textForButton: "Subscribe Now",
          classText: classes.buttonCardFirstStyles,
        },
        {
          textForButton: "Or Start 7 days trail",
          classText: classes.buttonCardSecondStyles,
        },
      ],
    },
  ];

  return (
    <div className={classes.containerCardsStyles}>
      <div className={classes.buttonsBlockStyles}>
        {buttonsInfo.map((element: ButtonSiteTypes, index: number) => {
          return (
            <ButtonForSite
              key={index}
              textForButton={element.textForButton}
              handleClick={element.handleClick}
              classText={element.classText}
            />
          );
        })}
      </div>

      {open === false ? (
        <PricingCard priceInfoForCard={priceInfoFirst} />
      ) : (
        <PricingCard priceInfoForCard={priceInfoSecond} />
      )}
    </div>
  );
};
