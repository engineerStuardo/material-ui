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
    h3: {
      fontWeight: 300,
    },
  },
});
