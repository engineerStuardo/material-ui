import { useState } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import {
  Grid,
  Typography,
  useMediaQuery,
  TextField,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ButtonArrow from './ui/ButtonArrow';
import mobileBackground from '../assets/mobileBackground.jpg';

const useStyle = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('lg')]: {
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
    [theme.breakpoints.down('lg')]: {
      marginRight: '0 !important',
      marginLeft: '0 !important',
      marginTop: '2em !important',
    },
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.light} !important`,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem !important',
    height: '45px !important',
    width: '145px !important',
  },
  message: {
    marginTop: '5em !important',
    borderRadius: '5 !important',
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: '50px !important',
    height: 45,
    width: 245,
    fontSize: '1rem !important',
    backgroundColor: `${theme.palette.common.orange} !important`,
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.light} !important`,
    },
  },
  disabledButton: {
    ...theme.typography.estimate,
    borderRadius: '50px !important',
    height: 45,
    width: 245,
    fontSize: '1rem !important',
    backgroundColor: `#D3D3D3 !important`,
  },
}));

export const Contact = ({ setValue }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const classes = useStyle();
  const theme = useTheme();

  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

  const onChange = e => {
    let valid;

    if (e.target.id === 'email') {
      setEmail(e.target.value);
      valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        e.target.value
      );

      if (!valid) {
        setEmailHelper('Invalid email');
      } else {
        setEmailHelper('');
      }
      return;
    }

    if (e.target.id === 'phone') {
      setPhone(e.target.value);
      valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
        e.target.value
      );

      if (!valid) {
        setPhoneHelper('Invalid Phone');
      } else {
        setPhoneHelper('');
      }
      return;
    }
  };

  return (
    <Grid container direction={'row'}>
      <Grid
        item
        container
        direction={'column'}
        justifyContent={'center'}
        alignItems='center'
        style={{
          marginBottom: matchesLG ? '5em' : 0,
          marginTop: matchesLG ? '5em' : 0,
        }}
        md={4}
        lg={3}
      >
        <Grid item>
          <Grid container direction={'column'}>
            <Grid item>
              <Typography
                variant='h2'
                align={matchesLG ? 'center' : undefined}
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant='body1'
                align={matchesLG ? 'center' : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid
              item
              container
              style={{ marginTop: '2em' }}
              alignItems={'center'}
            >
              <Grid item>
                <img
                  src={phoneIcon}
                  alt='phone'
                  style={{ marginRight: '0.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href='tel:5555555555'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              style={{ marginBottom: '2em' }}
              alignItems={'center'}
            >
              <Grid item>
                <img
                  src={emailIcon}
                  alt='email'
                  style={{ marginRight: '0.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href='mailto:ingeniero.stuardo@gmail.com'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    ingeniero.stuardo@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction={'column'}
              style={{ maxWidth: '30em' }}
            >
              <Grid item>
                <TextField
                  variant='standard'
                  className={classes.input}
                  label='Name'
                  id='name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  variant='standard'
                  label='Email'
                  id='email'
                  value={email}
                  onChange={onChange}
                  fullWidth
                  style={{ marginTop: '1em', marginBottom: '1em' }}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant='standard'
                  label='Phone'
                  id='phone'
                  phone={phone}
                  onChange={onChange}
                  fullWidth
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '30em' }}>
              <TextField
                className={classes.message}
                value={message}
                id='message'
                multiline
                rows={10}
                onChange={e => setMessage(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid
              item
              container
              style={{ marginTop: '2em' }}
              justifyContent={'center'}
            >
              <Button
                variant='contained'
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  email.length === 0 ||
                  emailHelper.length !== 0
                }
                className={
                  name.length === 0 ||
                  message.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  email.length === 0 ||
                  emailHelper.length !== 0
                    ? classes.disabledButton
                    : classes.sendButton
                }
              >
                Send Message{' '}
                <img
                  style={{ marginLeft: '1em' }}
                  src={airplane}
                  alt='paper airplane'
                />{' '}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesLG ? 'column' : 'row'}
        alignItems={'center'}
        justifyContent={matchesLG ? 'center' : 'inherit'}
        className={classes.background}
        md={8}
        lg={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesLG ? '0' : '3em',
            textAlign: matchesLG ? 'center' : 'inherit',
          }}
        >
          <Grid container direction={'column'}>
            <Grid item>
              <Typography align={matchesLG ? 'center' : undefined} variant='h2'>
                Simple Software. <br />
                Revolutionary Results.
              </Typography>
              <Typography
                align={matchesLG ? 'center' : undefined}
                variant='subtitle2'
                style={{ fontSize: '1.5rem' }}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid
                container
                item
                justifyContent={matchesLG ? 'center' : 'inherit'}
              >
                <Button
                  variant='outlined'
                  className={classes.learnButtonHero}
                  component={Link}
                  to='/revolution'
                  onClick={() => setValue(2)}
                >
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
      </Grid>
    </Grid>
  );
};
