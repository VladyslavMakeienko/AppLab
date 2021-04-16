import React from "react";
import { Typography } from "@material-ui/core";
import { TextSiteTypes } from "../../types/typesForSite";

/* --- Text component for site --- */

export const TextForSite: React.FC<TextSiteTypes> = ({
  text,
  classText,
  classTextForContainer,
  textColor,
}) => {
  return (
    <div className={classTextForContainer} style={{ color: textColor }}>
      <Typography className={classText}>{text}</Typography>
    </div>
  );
};
