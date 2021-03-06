import { createTheme } from '@mui/material/styles';

const arcBlue = '#0B72B2';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';

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
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: arcBlue,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: arcBlue,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: 'Raleway',
      color: arcBlue,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: '300',
    },
    learnButton: {
      borderColor: `${arcBlue} !important`,
      color: `${arcBlue} !important`,
      borderWidth: '2px !important',
      textTransform: 'none !important',
      borderRadius: '50px !important',
      fontFamily: 'Roboto !important',
      fontWeight: 'bold !important',
    },
    body1: {
      fontSize: '1.25rem',
      color: arcGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: arcGrey,
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          color: `${arcBlue}`,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottom: `2px solid ${arcBlue}`,
          },
          '&:hover:not($disabled):not(focused):not($error):before': {
            borderBottom: `2px solid ${arcBlue}`,
          },
        },
        root: {
          color: arcGrey,
          fontWeight: 300,
          fontSize: '1.25rem',
        },
      },
    },
  },
});
