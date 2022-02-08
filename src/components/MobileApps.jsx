import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Grid, Typography, useMediaQuery, IconButton } from '@mui/material';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import integrationAnimation from '../animations/integrationAnimation/data.json';
import swiss from '../assets/swissKnife.svg';
import access from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';
import { CallToAction } from '../components/ui/CallToAction';

const useStyle = makeStyles(theme => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em !important',
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',

    [theme.breakpoints.down('md')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

export const MobileApps = ({ setValue, setSelectedIndex }) => {
  const classes = useStyle();
  const theme = useTheme();

  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction={'column'}>
      <Grid
        item
        container
        direction={'row'}
        justifyContent={matchesLG ? 'center' : undefined}
        className={classes.rowContainer}
        marginTop={matchesSM ? '1em' : '2em'}
      >
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: '1em', marginLeft: '-3.5em' }}
        >
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to='/customsoftware'
            onClick={() => setSelectedIndex(1)}
          >
            <img
              src={backArrow}
              alt='Back to Custom Software Development page'
            />
          </IconButton>
        </Grid>
        <Grid item container direction={'column'} className={classes.heading}>
          <Grid item>
            <Typography variant='h2' align={matchesLG ? 'center' : undefined}>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              paragraph
              align={matchesLG ? 'center' : undefined}
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesLG ? 'center' : undefined}
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build corss-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notification, and more.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesLG ? 'center' : undefined}
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to='/websites'
            onClick={() => setSelectedIndex(3)}
          >
            <img src={forwardArrow} alt='Forward to Websites Page' />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginBottom: '15em', marginTop: '15em' }}
      >
        <Grid item container direction={'column'} md>
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              align={matchesMD ? 'center' : undefined}
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              this allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: '20em' }} />
        </Grid>
        <Grid item container direction={'column'} md>
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              align={matchesMD ? 'center' : 'right'}
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'center' : 'right'}
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets - all at the same time.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'center' : 'right'}
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginBottom: '15em' }}
      >
        <Grid item container direction={'column'} alignItems='center' md>
          <Grid item>
            <Typography variant='h4' gutterBottom align='center'>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt='swiss army knife' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={'column'}
          alignItems='center'
          style={{
            marginTop: matchesLG ? '10em' : 0,
            marginBottom: matchesLG ? '10em' : 0,
          }}
          md
        >
          <Grid item>
            <Typography variant='h4' gutterBottom align='center'>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt='tear-one-off sign'
              style={{ maxWidth: matchesLG ? '20em' : '28em' }}
            />
          </Grid>
        </Grid>
        <Grid item container direction={'column'} alignItems='center' md>
          <Grid item>
            <Typography variant='h4' gutterBottom align='center'>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt='app with notification' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};
