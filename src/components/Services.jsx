import { makeStyles, useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, useMediaQuery } from '@mui/material';

import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
  serviceContainer: {
    marginTop: '10em !important',
    [theme.breakpoints.down('md')]: {
      padding: '25px',
    },
  },
  subtitle: {
    marginBottom: '1rem !important',
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
}));

export const Services = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction={'column'}>
      <Grid
        item
        marginLeft={matchesMD ? 0 : '5em'}
        marginTop={matchesMD ? '1em' : '4em'}
      >
        <Typography
          variant='h2'
          gutterBottom
          align={matchesMD ? 'center' : undefined}
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction='row'
          spacing={matchesMD ? 5 : 10}
          className={classes.serviceContainer}
          justifyContent={matchesMD ? 'center' : 'flex-end'}
          marginTop={'0 !important'}
        >
          <Grid
            item
            width={'35em'}
            style={{
              textAlign: matchesMD && 'center',
            }}
          >
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone{' '}
              {matchesMD && <br />} with either mobile platform.
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
          <Grid item style={{ marginRight: matchesMD ? '0px' : '5em' }}>
            <img alt='mobile phone icon' src={mobileAppsIcon} width={'250em'} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction='row'
        spacing={matchesMD ? 5 : 10}
        className={classes.serviceContainer}
        justifyContent={matchesMD && 'center'}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? '0px' : '5em',
            textAlign: matchesMD && 'center',
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
      <Grid item>
        <Grid
          container
          direction='row'
          spacing={matchesMD ? 5 : 10}
          className={classes.serviceContainer}
          justifyContent={matchesMD ? 'center' : 'flex-end'}
          marginBottom={'10em !important'}
        >
          <Grid
            item
            width={'35em'}
            style={{
              textAlign: matchesMD && 'center',
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
          <Grid item style={{ marginRight: matchesMD ? '0px' : '5em' }}>
            <img alt='website icon' src={websiteIcon} width={'250em'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
