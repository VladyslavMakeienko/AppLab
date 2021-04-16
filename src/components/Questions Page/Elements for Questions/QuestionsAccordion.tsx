import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AccordionSiteTypes } from "../../../types/typesForSite";
import { AccordionForSite } from "../../Common/AccordionForSite";

const useStyles = makeStyles(() => ({
  containerAccordionStyles: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

/* --- Accordion for FAQ Page --- */

export const QuestionsAccordion: React.FC = () => {
  const classes = useStyles();
  const accordionInfo: AccordionSiteTypes[] = [
    {
      titleAccordion:
        "App installation failed, how to update system information?",
      textAccordion: `Hi,
      My name is Zoltan Nemeth, an Independent Advisor and I'm here to assist you with the issue of app 
      installation from the windows store failed. Please follow the below to fix the issue.

      Step 1:
      Go to the Search box next to Windows Icon & type Troubleshoot then click to open it.
      Step 2:
      Under Find and Fix other problems select Windows Store Apps.\n
      Step 3:
      Then click on Run the Troubleshooter
      Step 4:
      Restart the PC
      Let me know the status after performing the above.
      Regards
      Shuaib
      Independent Advisor`,
    },
    {
      titleAccordion: "Website response taking time, how to improve?",
      textAccordion: `1. Use Reliable and Fast Web Hosting 
      2. Use a CDN" 
      3. Optimize Databases 
      4. Keep WordPress Lightweight 
      5. Monitor PHP Usage 
      6. Configure Caching 
      7. Minify Scripts`,
    },
    {
      titleAccordion: "New update fixed all bug and issues",
      textAccordion: `Warnings for some updates during render
      A React component should not cause side effects in other components during rendering.
      
      It is supported to call setState during render, but only for the same component. 
      If you call setState during a render on a different component, you will now see a warning:
      This warning will help you find application bugs caused by unintentional state changes. 
      In the rare case that you intentionally want to change the state of another component as a result of rendering, 
      you can wrap the setState call into useEffect.
      `,
    },
    {
      titleAccordion: "How to contact with riders emergency?",
      textAccordion: `As a driver, you can contact Uber for assistance through the mobile app, 
      which will directly connect you with live support. 
      You can also get help in person at an Uber Greenlight location, or reach out to Uber through social media.`,
    },
  ];

  return (
    <div className={classes.containerAccordionStyles}>
      {accordionInfo.map((element: AccordionSiteTypes, index: number) => {
        return (
          <AccordionForSite
            key={index}
            titleAccordion={element.titleAccordion}
            textAccordion={element.textAccordion}
          />
        );
      })}
    </div>
  );
};
