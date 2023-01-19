import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Create a theme instance.
const theme = createTheme({
palette: {
   primary: {
      main: '#35b1de',
   },
   secondary: {
     main: '#0f5adb',
   },background:{
      default:'#e8e8ed',
   },
   error: {
   main: red.A400,
   },
  },
});
export default theme;