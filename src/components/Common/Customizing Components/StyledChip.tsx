import { withStyles, Theme } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

/* --- customized component Chip --- */

export const StyledChip = withStyles((theme: Theme) => ({
  label: {
    paddingRight: "48px",
    [theme.breakpoints.only("sm")]: {
      paddingRight: "23px",
    },
    [theme.breakpoints.only("xs")]: {
      paddingRight: "16px",
    },
  },
}))(Chip);
