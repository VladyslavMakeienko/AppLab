import React from "react";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ChooseAppPage } from "./components/Choose App Page/ChooseAppPage";
import { CompaniesPage } from "./components/Companies Page/CompaniesPage";
import { CodeIntegrationPage } from "./components/Latest Code Integration Page/CodeIntegrationPage";
import { SmartJackpotsPage } from "./components/Smart Jackpots Page/SmartJackpotsPage";
import { UltimateFeaturesPage } from "./components/Ultimate Features Page/UltimateFeaturesPage";
import { PricingPage } from "./components/Pricing Page/PricingPage";
import { QuestionsPage } from "./components/Questions Page/QuestionsPage";
import { TestimonialPage } from "./components/Testimonial Page/TestimonialPage";
import { KeyFeaturesPage } from "./components/Key Features Page/KeyFeaturesPage";
import { HomePage } from "./components/Home Page/HomePage";

/* --- customized theme breakpoints for the site --- */

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1400,
      xl: 1640,
    },
  },
});

const useStyles = makeStyles({
  allStyle: {
    display: "flex",
    flexDirection: "column",
    background: "#FDFDFE",
  },
});

export const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.allStyle}>
      <MuiThemeProvider theme={theme}>
        <Header />
        <HomePage />
        <CompaniesPage />
        <KeyFeaturesPage />
        <SmartJackpotsPage />
        <CodeIntegrationPage />
        <ChooseAppPage />
        <UltimateFeaturesPage />
        <PricingPage />
        <TestimonialPage />
        <QuestionsPage />
        <Footer />
      </MuiThemeProvider>
    </div>
  );
};
