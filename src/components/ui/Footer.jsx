import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

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
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em !important',
  },
}));

export const Footer = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.mainContainer} justifyContent='center'>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/'
              onClick={() => setValue(0)}
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/services'
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
            >
              Services
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/customsoftware'
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/mobileapps'
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              Mobile App Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/websites'
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/revolution'
              onClick={() => setValue(2)}
            >
              The Revolution
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/revolution'
              onClick={() => setValue(2)}
            >
              Vision
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/revolution'
              onClick={() => setValue(2)}
            >
              Technology
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='revolution'
              onClick={() => setValue(2)}
            >
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/about'
              onClick={() => setValue(3)}
            >
              About Us
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/about'
              onClick={() => setValue(3)}
            >
              History
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='about'
              onClick={() => setValue(3)}
            >
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='contact'
              onClick={() => setValue(4)}
            >
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        alt='black decorative slash'
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
};
