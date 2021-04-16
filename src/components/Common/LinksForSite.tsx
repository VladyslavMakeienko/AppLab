import React from "react";
import { LinksSiteTypes } from "../../types/typesForSite";
import AnchorLink from "react-anchor-link-smooth-scroll";

/* ---  Links component for site --- */

export const LinksForSite: React.FC<LinksSiteTypes> = ({
  classText,
  classTextForContainer,
}) => {
  const linksSiteNames: LinksSiteTypes[] = [
    {
      title: "Home",
      id: "home",
    },
    {
      title: "Key Features",
      id: "key-features",
    },
    {
      title: "Pricing",
      id: "pricing",
    },
    {
      title: "Testimonial",
      id: "testimonial",
    },
    {
      title: "FAQ",
      id: "faq",
    },
  ];

  return (
    <div className={classTextForContainer}>
      {linksSiteNames.map((value: LinksSiteTypes, index: number) => {
        return (
          <AnchorLink className={classText} key={index} href={`#${value.id}`}>
            {value.title}
          </AnchorLink>
        );
      })}
    </div>
  );
};
