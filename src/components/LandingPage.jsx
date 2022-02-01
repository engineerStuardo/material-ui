import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@mui/styles';
import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
} from '@mui/material';
import { Link } from 'react-router-dom';

import animationData from '../animations/landinganimation/data';
import ButtonArrow from '../components/ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';
import { CallToAction } from './ui/CallToAction';

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
    ...theme.typography.learnButton,
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
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem !important',
    height: '35px !important',
    padding: '5px !important',
  },
  subtitle: {
    marginBottom: '1rem !important',
  },
  serviceContainer: {
    marginTop: '12em !important',
    [theme.breakpoints.down('md')]: {
      padding: '25px',
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: '15px',
    padding: '10em',
    [theme.breakpoints.down('lg')]: {
      padding: '2em',
      paddingTop: '5em',
      paddingBottom: '5em',
      borderRadius: '0px',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  infoButton: {
    color: 'white !important',
    borderColor: 'white !important',
  },
}));

export const LandingPage = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSMLL = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Grid container direction={'column'} className={classes.mainContainer}>
        {/* Hero section */}
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
                    component={Link}
                    to='/estimate'
                    onClick={() => setValue(5)}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButtonHero}
                    component={Link}
                    to='/revolution'
                  >
                    <span
                      style={{ marginRight: '10px' }}
                      component={Link}
                      to='/revolution'
                      onClick={() => setValue(2)}
                    >
                      Learn More
                    </span>
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
        {/* ----------------- */}
        {/* Services section */}
        <Grid item>
          <Grid
            container
            direction='row'
            spacing={matchesSM ? 5 : 10}
            className={classes.serviceContainer}
            justifyContent={matchesSM && 'center'}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? '0px' : '5em',
                textAlign: matchesSM && 'center',
              }}
            >
              <Typography variant='h4'>Custom Software Development</Typography>
              <Typography variant='subtitle1' className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant='subtitle1'>
                Complete digital solutions, from investigation to{' '}
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button
                variant='outlined'
                className={classes.learnButton}
                component={Link}
                to='/customsoftware'
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                <span style={{ marginRight: '10px' }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img alt='custom software icon' src={customSoftwareIcon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='row'
            spacing={matchesSM ? 5 : 10}
            className={classes.serviceContainer}
            justifyContent={matchesSM ? 'center' : 'flex-end'}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM && 'center',
              }}
            >
              <Typography variant='h4'>iOS/Android App Development</Typography>
              <Typography variant='subtitle1' className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant='subtitle1'>
                Integrate your web experience or create a standalone{' '}
                {matchesSM && <br />} with either mobile platform.
              </Typography>
              <Button
                variant='outlined'
                className={classes.learnButton}
                component={Link}
                to='/mobileapps'
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                <span style={{ marginRight: '10px' }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? '0px' : '5em' }}>
              <img alt='mobile phone icon' src={mobileAppsIcon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='row'
            spacing={matchesSM ? 5 : 10}
            className={classes.serviceContainer}
            justifyContent={matchesSM && 'center'}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? '0px' : '5em',
                textAlign: matchesSM && 'center',
              }}
            >
              <Typography variant='h4'>Website Development</Typography>
              <Typography variant='subtitle1' className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant='subtitle1'>
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button
                variant='outlined'
                className={classes.learnButton}
                component={Link}
                to='/websites'
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                <span style={{ marginRight: '10px' }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img alt='website icon' src={websiteIcon} />
            </Grid>
          </Grid>
        </Grid>
        {/* ----------------- */}
        {/* Revolution block */}
        <Grid item>
          <Grid
            container
            alignItems={'center'}
            justifyContent='center'
            style={{ height: '100em', marginTop: '12em' }}
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction={'column'}
                  style={{ textAlign: 'center' }}
                >
                  <Grid Item>
                    <Typography variant='h3' gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant='subtitle1' gutterBottom>
                      Visionary insights coupled with cutting-edge technology is
                      a recipe for revolution.
                    </Typography>
                    <Button
                      variant='outlined'
                      className={classes.learnButtonHero}
                      component={Link}
                      to='/revolution'
                      onClick={() => setValue(2)}
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
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>
        {/* ----------------- */}
        {/* Information block */}
        <Grid item>
          <Grid
            container
            direction={'row'}
            style={{ height: '80em' }}
            alignItems='center'
          >
            <Grid
              item
              container
              style={{
                position: 'absolute',
                textAlign: matchesSMLL ? 'center' : 'inherit',
              }}
              direction={matchesSM ? 'column' : 'row'}
            >
              <Grid
                item
                style={{
                  marginLeft: matchesSMLL ? 0 : matchesSM ? '2em' : '5em',
                }}
                sm
              >
                <Grid container direction={'column'}>
                  <Typography variant='h2' style={{ color: 'white' }}>
                    About Us
                  </Typography>
                  <Typography variant='subtitle2'>
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      variant='outlined'
                      className={`${classes.learnButtonHero} ${classes.infoButton}`}
                      component={Link}
                      to='/about'
                      onClick={() => setValue(3)}
                    >
                      <span style={{ marginRight: '10px' }}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill={'white'} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                style={{
                  marginRight: matchesSMLL ? 0 : matchesSM ? '2em' : '5em',
                  textAlign: matchesSMLL ? 'center' : 'right',
                  marginTop: matchesSMLL ? '5em' : '',
                }}
                sm
              >
                <Grid container direction={'column'}>
                  <Typography variant='h2' style={{ color: 'white' }}>
                    Contact Us
                  </Typography>
                  <Typography variant='subtitle2'>
                    Say hello!{' '}
                    <span role={'img'} aria-label='waving hand'>
                      👋🏻
                    </span>
                  </Typography>
                  <Grid item>
                    <Button
                      variant='outlined'
                      className={`${classes.learnButtonHero} ${classes.infoButton}`}
                      component={Link}
                      to='/contact'
                      onClick={() => setValue(4)}
                    >
                      <span style={{ marginRight: '10px' }}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill={'white'} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <div className={classes.infoBackground} />
          </Grid>
        </Grid>
        {/* ----------------- */}
        {/* Call to action */}
        <Grid item>
          <CallToAction setValue={setValue} />
        </Grid>
        {/* ----------------- */}
      </Grid>
    </>
  );
};
