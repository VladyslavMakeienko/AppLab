import React from "react";
import { ImagesSiteTypes } from "../../types/typesForSite";

/* ---  Image component for site --- */

export const ImageForSite: React.FC<ImagesSiteTypes> = ({
  title,
  imgUrl,
  classText,
}) => {
  return (
    <>
      <img src={imgUrl} alt={title} className={classText} />
    </>
  );
};
