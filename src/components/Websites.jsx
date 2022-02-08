import { makeStyles, useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Grid, Typography, useMediaQuery, IconButton } from '@mui/material';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import analytics from '../assets/analytics.svg';
import seo from '../assets/seo.svg';
import outreach from '../assets/outreach.svg';
import ecommerce from '../assets/ecommerce.svg';
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
  paragraphContainer: {
    maxWidth: '30em',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '1.75em',
    },
  },
}));

export const Websites = ({ setValue, setSelectedIndex }) => {
  const classes = useStyle();
  const theme = useTheme();

  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

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
            to='/mobileapps'
            onClick={() => setSelectedIndex(2)}
          >
            <img
              src={backArrow}
              alt='Back to iOS/Android app Development page'
            />
          </IconButton>
        </Grid>
        <Grid item container direction={'column'} className={classes.heading}>
          <Grid item>
            <Typography variant='h2' align={matchesLG ? 'center' : undefined}>
              Websites Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              paragraph
              align={matchesLG ? 'center' : undefined}
            >
              Having a website is a necessity in today's business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you're the best at it.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesLG ? 'center' : undefined}
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to='/services'
            onClick={() => setSelectedIndex(0)}
          >
            <img src={forwardArrow} alt='Forward to Websites Page' />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        alignItems={'center'}
        className={classes.rowContainer}
        style={{ marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction={'column'}>
            <Grid item>
              <Typography
                variant='h4'
                gutterBottom
                align={matchesLG ? 'center' : 'inherit'}
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                alt="graph with magnifying glass revealing 1's and 0's"
                style={{ marginLeft: '-2.75em' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.paragraphContainer} item>
          <Typography variant='body1' align={matchesLG ? 'center' : 'inherit'}>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        alignItems={'center'}
        className={classes.rowContainer}
        justifyContent={'flex-end'}
        style={{ marginBottom: '15em', marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction={'column'}>
            <Grid item>
              <Typography variant='h4' align='center' gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt='world outline made of dollar signs' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesLG ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant='body1'
            paragraph
            align={matchesLG ? 'center' : 'inherit'}
          >
            It's no secret that people like to shop online.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesLG ? 'center' : 'inherit'}
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it's time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        alignItems={'center'}
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction={'column'}>
            <Grid item>
              <Typography
                variant='h4'
                gutterBottom
                align={matchesLG ? 'center' : 'inherit'}
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt='megaphone' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesLG ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography variant='body1' align={matchesLG ? 'center' : 'inherit'}>
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what's right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        alignItems={'center'}
        className={classes.rowContainer}
        justifyContent={'flex-end'}
        style={{ marginBottom: '15em', marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction={'column'}>
            <Grid item>
              <Typography variant='h4' align='center' gutterBottom>
                Search Engine <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt='website standing on winners podium' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesLG ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant='body1'
            paragraph
            align={matchesLG ? 'center' : 'inherit'}
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesLG ? 'center' : 'inherit'}
          >
            If you're like us, probably never.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesLG ? 'center' : 'inherit'}
          >
            Customers don't go there, so we make sure your website is designed
            to end up on top.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};
