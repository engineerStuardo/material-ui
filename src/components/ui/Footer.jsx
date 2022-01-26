import { makeStyles } from '@mui/styles';

import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em !important',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('lg')]: {
      width: '21em !important',
    },
    [theme.breakpoints.down('md')]: {
      width: '15em !important',
    },
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img
        alt='black decorative slash'
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
};
