import React from "react";
import { Button } from "@material-ui/core";
import { ButtonSiteTypes } from "../../types/typesForSite";

/* ---  Button component for site --- */

export const ButtonForSite: React.FC<ButtonSiteTypes> = ({
  textForButton,
  classText,
  handleClick,
}) => {
  return (
    <Button variant="contained" onClick={handleClick} className={classText}>
      {textForButton}
    </Button>
  );
};
