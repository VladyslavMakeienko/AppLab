import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";

/* --- Rating component for site --- */

export const RatingForSite: React.FC = () => {
  /* --- total number of stars --- */
  const [value, setValue] = useState<number | null>(5);

  return (
    <div>
      <Rating name="read-only" value={value} readOnly />
    </div>
  );
};
