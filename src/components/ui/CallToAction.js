import { Grid, Typography, Button, useMediaQuery } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';

import ButtonArrow from './ButtonArrow';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem !important',
    height: '45px !important',
    width: '145px !important',
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: '50px !important',
    height: '80px !important',
    width: '205px !important',
    backgroundColor: `${theme.palette.common.orange} !important`,
    fontSize: '1.5rem !important',
    marginRight: '5em !important',
    marginLeft: '2em !important',
    [theme.breakpoints.down('md')]: {
      marginRight: '0 !important',
      marginLeft: '0 !important',
      marginTop: '2em !important',
    },
  },
}));

export const CallToAction = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      alignItems='center'
      className={classes.background}
      justifyContent={matchesMD ? 'center' : 'space-between'}
      direction={matchesMD ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesMD ? '0' : '5em',
          textAlign: matchesMD ? 'center' : 'inherit',
        }}
      >
        <Grid container direction={'column'}>
          <Grid item>
            <Typography variant='h2'>
              Simple Software. <br />
              Revolutionary Results.
            </Typography>
            <Typography variant='subtitle2' style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid
              container
              item
              justifyContent={matchesMD ? 'center' : 'inherit'}
            >
              <Button variant='outlined' className={classes.learnButtonHero}>
                <span style={{ marginRight: '5px' }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant='contained' className={classes.estimateButton}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};
