import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Particles from "react-particles-js";
import RedCircle from "../../assets/images/RedCircle.png";
import PurpleCircle from "../../assets/images/PurpleCircle.png";
import RedSquare from "../../assets/images/RedSquare.png";
import CrossSmall from "../../assets/images/CrossSmall.png";

const useStyles = makeStyles((theme: Theme) => ({
  containerStyles: {
    position: "absolute",
    width: "100%",
    left: 0,
    zIndex: 1,
    [theme.breakpoints.between("xs", "sm")]: {
      height: "100%",
    },
  },
}));

/* ---  Animated Particles component for site --- */

export const AnimatedParticles: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerStyles}>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: "out",
            },
            shape: {
              type: ["image"],
              image: [
                {
                  src: PurpleCircle,
                  height: 10,
                  width: 10,
                },
                {
                  src: RedCircle,
                  height: 10,
                  width: 10,
                },
                {
                  src: CrossSmall,
                  height: 10,
                  width: 10,
                },
                {
                  src: RedSquare,
                  height: 10,
                  width: 10,
                },
              ],
            },
            color: {
              value: "#CCC",
            },
            size: {
              value: 10,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 5,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
    </div>
  );
};
