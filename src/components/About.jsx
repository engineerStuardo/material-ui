import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Typography, useMediaQuery, Avatar } from '@mui/material';

import history from '../assets/history.svg';
import profile from '../assets/profile.jpeg';
import eccomerce from '../assets/eccomerce.png';
import turtle from '../assets/turtle.jpeg';
import { CallToAction } from '../components/ui/CallToAction';

const useStyle = makeStyles(theme => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',

    [theme.breakpoints.down('md')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  avatar: {
    height: '25em !important',
    width: '25em !important',
    [theme.breakpoints.down('md')]: {
      height: '100% !important',
      width: '100% !important',
    },
  },
  xlHidden: {
    maxWidth: '45em !important',
    padding: '1.25em !important',
    [theme.breakpoints.down('xl')]: {
      display: 'none !important',
    },
  },
  xlShow: {
    maxWidth: '45em !important',
    padding: '1.25em !important',
    [theme.breakpoints.up('xl')]: {
      display: 'none !important',
    },
  },
}));

export const About = ({ setValue, setSelectedIndex }) => {
  const classes = useStyle();
  const theme = useTheme();

  const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction={'column'}>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? '1em' : '2em' }}
      >
        <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent={'center'}
        className={classes.rowContainer}
        style={{ marginTop: '3em' }}
      >
        <Typography
          variant='h4'
          align='center'
          className={classes.missionStatement}
        >
          Whether it be to person, business to consumer, or an individual to
          their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justifyContent={'space-around'}
        direction={matchesLG ? 'column' : 'row'}
        alignItems={matchesLG ? 'center' : undefined}
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item>
          <Grid
            item
            container
            direction={'column'}
            style={{ maxWidth: '35em' }}
            lg
          >
            <Grid item>
              <Typography
                variant='h4'
                align={matchesLG ? 'center' : undefined}
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
                align={matchesLG ? 'center' : undefined}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesLG ? 'center' : undefined}
              >
                Founded in 2019, we're ready to get our hands on the world's
                business problems.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesLG ? 'center' : undefined}
              >
                It all started with one question: Why aren't all businesses
                using available technology? There are many different answer to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesLG ? 'center' : undefined}
              >
                We aim to be powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesLG ? 'center' : undefined}
              >
                All this change can be a lot to keep up with, and that's where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            item
            container
            justifyContent={'center'}
            style={{ marginLeft: '10px' }}
            lg
          >
            <img
              src={history}
              alt='quill pen sitting on top of book'
              style={{ maxHeight: matchesMD ? '150px' : '22em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={'column'}
        className={classes.rowContainer}
        alignItems='center'
        style={{ marginBottom: '15em' }}
      >
        <Grid item>
          <Typography variant='h4' gutterBottom align='center'>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph align='center'>
            Italo Cortez, Founder
          </Typography>
          <Typography variant='body1' paragraph align='center'>
            I started coding in the University. 9 years ago.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt='founder' src={profile} className={classes.avatar} />
        </Grid>
        <Grid
          item
          container
          direction={matchesXL ? 'column' : 'row'}
          alignItems={matchesXL ? 'center' : undefined}
        >
          <Grid
            item
            container
            direction={'column'}
            alignItems={'center'}
            className={classes.xlShow}
            marginTop={10}
            md
          >
            <Typography variant='body1' align='center' paragraph>
              I was into coding since I got my first computer, and ever since
              then my passion has solely been set on learning - learning about
              computers, learning about mathematics and coding in general,
              studying a little bit of design, always just learning
            </Typography>
            <Typography variant='body1' align='center' paragraph>
              Now I'm ready to apply everything I've learned, and to help others
              with the intuition I have developed.
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction={'column'}
            alignItems='center'
            style={{ marginBottom: matchesXL ? '2.5em' : 0 }}
            md
          >
            <Grid item>
              <img
                src={eccomerce}
                alt='about founder'
                style={{ width: 500, maxWidth: matchesMD ? 300 : 475 }}
              />
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={'column'}
            alignItems={'center'}
            className={classes.xlHidden}
            md
          >
            <Typography variant='body1' align='center' paragraph>
              I was into coding since I got my first computer, and ever since
              then my passion has solely been set on learning - learning about
              computers, learning about mathematics and coding in general,
              studying a little bit of design, always just learning
            </Typography>
            <Typography variant='body1' align='center' paragraph>
              Now I'm ready to apply everything I've learned, and to help others
              with the intuition I have developed.
            </Typography>
          </Grid>
          <Grid item container direction={'column'} alignItems='center' md>
            <Grid item>
              <img
                src={turtle}
                alt='cute turtle'
                style={{ width: 475, maxWidth: matchesMD ? 300 : 475 }}
              />
            </Grid>
            <Grid item>
              <Typography variant='caption'>My cute little turtle</Typography>
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
