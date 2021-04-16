import React from "react";

/* --- Type for Scroll to Top of Site --- */
export interface PropsForScrollTopSite {
  window?: () => Window;
  children: React.ReactElement;
}
/* --- Type for Companies Images --- */
export type ImagesSiteTypes = {
  title: string;
  imgUrl: string;
  backgroundColor?: string;
  textColor?: string;
  margin?: string;
  classText?: string;
  classTextForContainer?: string;
  index?: number;
};
/* --- Type for Button Site --- */
export type ButtonSiteTypes = {
  textForButton: string;
  classText?: string;
  handleClick?: () => void;
};
/* --- Type for Text Site --- */
export type TextSiteTypes = {
  text: string;
  textColor?: string;
  classText: string;
  classTextForContainer?: string;
};
/* --- Type for Logo Site --- */
export type LogoSiteTypes = {
  classText?: string;
  classTextForContainer?: string;
};
/* --- Type for Links Site --- */
export type LinksSiteTypes = {
  classText?: string;
  classTextForContainer?: string;
  title?: string;
  id?: string;
};
/* --- Type for Accordion Site --- */
export type AccordionSiteTypes = {
  titleAccordion: string;
  textAccordion: string;
};
/* --- Type for Price Site --- */
export type PriceSiteTypes = {
  title: string;
  subheader: string;
  price: string;
  time: string;
  description: Array<string>;
  buttonsInfo: Array<ButtonSiteTypes>;
};
