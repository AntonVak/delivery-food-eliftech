import { red, } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#09473f',
    },
    secondary: {
      main: '#11d421',
      
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;