import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#BAFF39",
    },
    secondary: {
      main: "#6E6E6E",
    },
    background: {
      default: "#e8e8ed",
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;
