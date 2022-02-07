import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Grid, Typography, useMediaQuery, IconButton } from '@mui/material';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import roots from '../assets/root.svg';
import automationAnimation from '../animations/automationAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data';
import { CallToAction } from '../components/ui/CallToAction';

const useStyles = makeStyles(theme => ({
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
  itemContainer: {
    maxWidth: '40em !important',
  },
}));

export const CustomSoftware = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
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
            to='/services'
            onClick={() => setSelectedIndex(0)}
          >
            <img src={backArrow} alt='Back to Services Page' />
          </IconButton>
        </Grid>
        <Grid item container direction={'column'} className={classes.heading}>
          <Grid item>
            <Typography variant='h2' align={matchesLG ? 'center' : undefined}>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              paragraph
              align={matchesLG ? 'center' : undefined}
            >
              Whether we're replacing old software or inventing new solutions,
              Arc Development is here to help you business tackle technology.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesLG ? 'center' : undefined}
            >
              Using regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings fom increased efficiency.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesLG ? 'center' : undefined}
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing coast than generalized
              options.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesLG ? 'center' : undefined}
            >
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to='/mobileapps'
            onClick={() => setSelectedIndex(2)}
          >
            <img
              src={forwardArrow}
              alt='Forward to iOS/Android App Development Page'
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={'row'}
        justifyContent={'center'}
        style={{ marginTop: '15em', marginBottom: '20em' }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction={'column'}
          md
          style={{ maxWidth: '40em' }}
          alignItems={'center'}
        >
          <Grid item>
            <Typography variant='h4'>Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt='lightbulb' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={'column'}
          md
          style={{
            maxWidth: '40em',
            marginBottom: matchesMD ? '10em' : '0',
            marginTop: matchesMD ? '10em' : '0',
          }}
          alignItems={'center'}
        >
          <Grid item>
            <Typography variant='h4'>Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt='lightbulb' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={'column'}
          md
          style={{ maxWidth: '40em' }}
          alignItems={'center'}
        >
          <Grid item>
            <Typography variant='h4'>Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt='lightbulb' />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent='space-between'
        direction={matchesLG ? 'column' : 'row'}
        alignItems={matchesLG ? 'center' : undefined}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesLG ? '15em' : '0' }}
          md
        >
          <Grid item container direction={'column'} md>
            <Grid item>
              <Typography variant='h4' align={matchesMD ? 'center' : undefined}>
                Digital Documentes & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                Reduce Errors. Reduce Waste. Reduce Cost.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                Billions are spent annually on the purchasing, printing, and
                distribution on paper. On top the massive environmental impact
                this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              width: matchesMD ? '100%' : undefined,
              marginTop: matchesMD ? '5em' : 0,
            }}
            md
          >
            <Lottie
              options={documentsOptions}
              style={{
                maxHeight: '275px',
                maxWidth: '275px',
                minHeight: '250px',
              }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} md>
          <Grid
            item
            style={{
              width: matchesMD ? '100%' : undefined,
              marginBottom: matchesMD ? '5em' : 0,
            }}
            md
          >
            <Lottie
              options={scaleOptions}
              style={{
                maxHeight: '260px',
                maxWidth: '280px',
              }}
            />
          </Grid>
          <Grid item container direction={'column'} md>
            <Grid item>
              <Typography variant='h4' align={matchesMD ? 'center' : 'right'}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : 'right'}
              >
                Whether you're a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={'row'}
        style={{ marginTop: '20em', marginBottom: '20em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction={'column'} alignItems='center'>
          <Grid item>
            <img
              src={roots}
              alt='tree with roots extending out'
              height={matchesMD ? '300em' : '450em'}
              width={matchesMD ? '300em' : '450em'}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant='h4' gutterBottom align='center'>
              Root-Cause Analysis
            </Typography>
            <Typography variant='body1' paragraph align='center'>
              Many problems are merely symptoms of large, underlying issues.
            </Typography>
            <Typography variant='body1' paragraph align='center'>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent='space-between'
        style={{ marginBottom: '10em' }}
        direction={matchesLG ? 'column' : 'row'}
        alignItems={matchesLG ? 'center' : undefined}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesLG ? '15em' : '0' }}
          md
        >
          <Grid item container direction={'column'} md>
            <Grid item>
              <Typography variant='h4' align={matchesMD ? 'center' : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                Why waste time when you don't have to?
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              width: matchesMD ? '100%' : undefined,
              marginTop: matchesMD ? '5em' : 0,
            }}
            md
          >
            <Lottie
              options={automationOptions}
              style={{
                maxHeight: '290px',
                maxWidth: '280px',
              }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} md>
          <Grid
            item
            style={{
              width: matchesMD ? '100%' : undefined,
              marginBottom: matchesMD ? '5em' : 0,
            }}
            md
          >
            <Lottie
              options={uxOptions}
              style={{
                maxHeight: '310px',
                maxWidth: '155px',
              }}
            />
          </Grid>
          <Grid item container direction={'column'} md>
            <Grid item>
              <Typography variant='h4' align={matchesMD ? 'center' : 'right'}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : 'right'}
              >
                A good design that isn't usable ins't a good design.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : 'right'}
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : 'right'}
              >
                By prioritizing users and the real ways the interact with
                technology we're able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};
