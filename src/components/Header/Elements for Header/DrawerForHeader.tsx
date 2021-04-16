import React, { useState } from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EuroIcon from "@material-ui/icons/Euro";
import FeedbackIcon from "@material-ui/icons/Feedback";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import AnchorLink from "react-anchor-link-smooth-scroll";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerStyles: {
      display: "flex",
    },
    menuButton: {
      marginRight: "20px",
      color: "black",
    },
    hideStyles: {
      display: "none",
    },
    drawerStyles: {
      flexShrink: 0,
    },
    drawerContainerStyles: {
      width: "200px",
    },
    drawerHeaderStyles: {
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    linkStyles: {
      textDecoration: "none",
      fontSize: "16px",
      color: "#242F51",
      fontFamily: "Poppins, sans-serif",
      cursor: "pointer",
      display: "flex",
      "&:hover": {
        textDecoration: "none",
      },
    },
  })
);

/* --- Menu for mobile/table version of site header --- */

export const DrawerForHeader: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  /* --- Function for opening menu --- */
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  /* --- Function for closing menu --- */
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const linksInfo = [
    {
      title: "Home",
      icon: <HomeIcon />,
      id: "home",
    },
    {
      title: "Key Features",
      icon: <VpnKeyIcon />,
      id: "key-features",
    },
    {
      title: "Pricing",
      icon: <EuroIcon />,
      id: "pricing",
    },
    {
      title: "Testimonial",
      icon: <FeedbackIcon />,
      id: "testimonial",
    },
    {
      title: "FAQ",
      icon: <LiveHelpIcon />,
      id: "faq",
    },
  ];

  return (
    <div className={classes.containerStyles}>
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hideStyles)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawerStyles}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerContainerStyles,
        }}
      >
        <div className={classes.drawerHeaderStyles}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {linksInfo.map((item, index: number) => (
            <AnchorLink
              href={`#${item.id}`}
              className={classes.linkStyles}
              key={index}
            >
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </AnchorLink>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};
