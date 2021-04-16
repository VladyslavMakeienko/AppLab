import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ImagesSiteTypes } from "../../types/typesForSite";

const useStyles = makeStyles(() => ({
  blockStyles: {
    borderRadius: "65px",
    height: "89px",
    width: "89px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

/* ---  Images component for site --- */

export const ImagesForSite: React.FC<ImagesSiteTypes> = ({
  title,
  imgUrl,
  backgroundColor,
  index,
  margin,
  classText,
}) => {
  const classes = useStyles();

  return (
    <div
      key={index}
      style={{ backgroundColor: backgroundColor, margin: margin }}
      className={classes.blockStyles}
    >
      <img src={imgUrl} alt={title} className={classText} />
    </div>
  );
};
