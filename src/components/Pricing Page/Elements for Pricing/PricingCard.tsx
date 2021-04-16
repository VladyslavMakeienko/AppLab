import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Card, CardActions, CardContent, Grid } from "@material-ui/core";
import { ButtonForSite } from "../../Common/ButtonForSite";
import { TextForSite } from "../../Common/TextForSite";
import { ButtonSiteTypes, PriceSiteTypes } from "../../../types/typesForSite";

const useStyles = makeStyles((theme: Theme) => ({
  containerStyles: {
    alignItems: "baseline",
  },
  cardStyles: {
    width: "319px",
    margin: "0 19px",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "30px 0",
    },
    [theme.breakpoints.only("xs")]: {
      width: "280px",
    },
  },
  cardPositionStyles: {
    display: "flex",
    justifyContent: "center",
  },
  cardHeaderStyles: {
    background: "linear-gradient( 180deg , #FDFDFE, #F4F7F9)",
  },
  cardHeaderPricingStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
  },
  cardHeaderTitleStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "0 0 38px 0",
  },
  buttonsContainerStyles: {
    display: "flex",
    flexDirection: "column",
  },
  textPriceStyles: {
    color: "#242F51",
    fontSize: "60px",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
  },
  textTimeStyles: {
    color: "#999CA5",
    fontSize: "18px",
    fontFamily: "Poppins, sans-serif",
  },
  titleStyles: {
    color: "#242F51",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
  },
  subtitleStyles: {
    color: "#999CA5",
    fontSize: "16px",
    fontFamily: "Poppins, sans-serif",
  },
  textDescriptionStyles: {
    color: "#999CA5",
    fontSize: "16px",
    fontFamily: "Poppins, sans-serif",
    textAlign: "center",
    padding: "10px 0",
  },
  listStyles: {
    padding: 0,
    margin: 0,
  },
}));

/* --- Card for Get awesome features, without extra charges Page --- */

export const PricingCard = (props: any) => {
  const classes = useStyles();
  const priceInfo = props.priceInfoForCard;

  return (
    <Grid container className={classes.containerStyles}>
      {priceInfo.map((element: PriceSiteTypes, index: number) => {
        return (
          <Grid
            item
            key={index}
            className={classes.cardPositionStyles}
            xs={12}
            md={6}
          >
            <Card className={classes.cardStyles}>
              <div className={classes.cardHeaderStyles}>
                <div className={classes.cardHeaderPricingStyles}>
                  <TextForSite
                    text={element.price}
                    classText={classes.textPriceStyles}
                  />
                  <TextForSite
                    text={element.time}
                    classText={classes.textTimeStyles}
                  />
                </div>
                <div className={classes.cardHeaderTitleStyles}>
                  <TextForSite
                    text={element.title}
                    classText={classes.titleStyles}
                  />
                  <TextForSite
                    text={element.subheader}
                    classText={classes.subtitleStyles}
                  />
                </div>
              </div>

              <CardContent>
                <ul className={classes.listStyles}>
                  {element.description.map((value: string, index: number) => {
                    return (
                      <TextForSite
                        key={index}
                        text={value}
                        classText={classes.textDescriptionStyles}
                      />
                    );
                  })}
                </ul>
              </CardContent>
              <CardActions className={classes.buttonsContainerStyles}>
                {element.buttonsInfo.map(
                  (value: ButtonSiteTypes, index: number) => {
                    return (
                      <ButtonForSite
                        key={index}
                        textForButton={value.textForButton}
                        classText={value.classText}
                      />
                    );
                  }
                )}
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
