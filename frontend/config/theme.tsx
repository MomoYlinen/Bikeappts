import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import "@fontsource/akaya-kanadaka";
import "@fontsource/combo";
import "@fontsource/fjalla-one";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#fcbc19",
    },
    secondary: {
      main: "#e21f25",
    },
    background: {
      default: "#f7cf77",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      "Fjalla One",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "Comic Neue",
      "Akaya Kanadaka",
      "Combo",
    ].join(","),
  },
});
export default theme;
