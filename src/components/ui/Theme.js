import { createTheme } from '@mui/material/styles';

const arcBlue = '#0B72B2';
const arcOrange = '#FFBA60';

export const theme = createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico !important',
      fontSize: '1rem !important',
      textTransform: 'none !important',
      color: 'white !important',
    },
  },
});
