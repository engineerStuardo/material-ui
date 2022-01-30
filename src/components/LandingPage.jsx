import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button, Typography } from '@mui/material';

import animationData from '../animations/landinganimation/data';
import ButtonArrow from '../components/ui/ButtonArrow';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '50em !important',
    minWidth: '21em !important',
    marginTop: '2em !important',
    marginLeft: '10% !important',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em !important',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: `${theme.palette.common.orange} !important`,
    borderRadius: '50px !important',
    height: '45px !important',
    width: '145 !important',
    marginRight: '40px !important',
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.light} !important`,
    },
    buttonContainer: {
      marginTop: '1em !important',
    },
  },
  buttonContainer: {
    marginTop: '1em !important',
  },
  learnButtonHero: {
    borderColor: `${theme.palette.common.blue} !important`,
    color: `${theme.palette.common.blue} !important`,
    borderWidth: '2px !important',
    textTransform: 'none !important',
    borderRadius: '50px !important',
    fontFamily: 'Roboto !important',
    fontWeight: 'bold !important',
    fontSize: '0.9rem !important',
    height: '45px !important',
    width: '145px !important',
  },
  mainContainer: {
    marginTop: '5em !important',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em !important',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em !important',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0 !important',
    },
  },
}));

export const LandingPage = () => {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const theme = useTheme();

  return (
    <>
      <Grid container direction={'column'} className={classes.mainContainer}>
        <Grid item>
          <Grid
            container
            flexDirection={'row'}
            justifyContent='flex-end'
            alignItems='center'
          >
            <Grid item sm className={classes.heroTextContainer}>
              <Typography align='center' variant='h2'>
                Bringing West Coast Technology
                <br />
                to the Midwest
              </Typography>
              <Grid
                container
                justifyContent={'center'}
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    variant='contained'
                    className={classes.estimateButton}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: '10px' }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm className={classes.animation}>
              <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      );
    </>
  );
};
