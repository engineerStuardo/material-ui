import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  useMediaQuery,
  IconButton,
  Button,
  Dialog,
  DialogContent,
  TextField,
} from '@mui/material';
import { cloneDeep } from 'lodash';

import check from '../assets/check.svg';
import send from '../assets/send.svg';
import software from '../assets/software.svg';
import mobile from '../assets/mobile.svg';
import website from '../assets/website.svg';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import backArrowDisabled from '../assets/backArrowDisabled.svg';
import forwardArrowDisabled from '../assets/forwardArrowDisabled.svg';
import camera from '../assets/camera.svg';
import upload from '../assets/upload.svg';
import person from '../assets/person.svg';
import persons from '../assets/persons.svg';
import people from '../assets/people.svg';
import info from '../assets/info.svg';
import bell from '../assets/bell.svg';
import users from '../assets/users.svg';
import iphone from '../assets/iphone.svg';
import gps from '../assets/gps.svg';
import customized from '../assets/customized.svg';
import data from '../assets/data.svg';
import android from '../assets/android.svg';
import globe from '../assets/globe.svg';
import biometrics from '../assets/biometrics.svg';

import estimateAnimation from '../animations/estimateAnimation/data.json';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  icon: {
    width: '12em',
    height: '10em',
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: '50px !important',
    backgroundColor: `${theme.palette.common.orange} !important`,
    height: '50px !important',
    width: '225px !important',
    fontSize: '1.25rem !important',
    marginTop: '5em !important',
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.light} !important`,
    },
  },
  message: {
    marginTop: '5em !important',
    borderRadius: '5 !important',
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: 'Which service are you interested in?',
    active: true,
    options: [
      {
        id: 1,
        title: 'Custom Software Development',
        subtitle: null,
        icon: software,
        iconAlt: 'Three floating screens',
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: 'iOS/Android App Development',
        subtitle: null,
        icon: mobile,
        iconAlt: 'phones and tablet outline',
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: 'Website Development',
        subtitle: null,
        icon: website,
        iconAlt: 'computer outline',
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: 'Which platforms do you need supported?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Web Application',
        subtitle: null,
        icon: website,
        iconAlt: 'computer outline',
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: 'iOS Application',
        subtitle: null,
        icon: iphone,
        iconAlt: 'outline of iphone',
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: 'Android Application',
        subtitle: null,
        icon: android,
        iconAlt: 'outlines of android phone',
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Photo/Video',
        subtitle: null,
        icon: camera,
        iconAlt: 'camera outline',
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'GPS',
        subtitle: null,
        icon: gps,
        iconAlt: 'gps pin',
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: 'File Transfer',
        subtitle: null,
        icon: upload,
        iconAlt: 'outline of cloud with arrow pointing up',
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Users/Authentication',
        subtitle: null,
        icon: users,
        iconAlt: 'outline of a person with a plus sign',
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'Biometrics',
        subtitle: null,
        icon: biometrics,
        iconAlt: 'fingerprint',
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: 'Push Notifications',
        subtitle: null,
        icon: bell,
        iconAlt: 'outline of a bell',
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: 'What type of custom features do you expect to need?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Low Complexity',
        subtitle: '(Informational)',
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'Medium Complexity',
        subtitle: '(Interactive, Customizable, Realtime)',
        icon: customized,
        iconAlt: 'two toggle switches',
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: 'High Complexity',
        subtitle: '(Data Modeling and Computation)',
        icon: data,
        iconAlt: 'outline of line graph',
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: 'How many users do you expect?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: '0-10',
        subtitle: null,
        icon: person,
        iconAlt: 'person outline',
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: '10-100',
        subtitle: null,
        icon: persons,
        iconAlt: 'outline of two people',
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: '100+',
        subtitle: null,
        icon: people,
        iconAlt: 'outline of three people',
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: 'Which type of website are you wanting?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Basic',
        subtitle: '(Informational)',
        icon: info,
        iconAlt: 'person outline',
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: 'Interactive',
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: 'outline of two people',
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: 'E-Commerce',
        subtitle: '(Sales)',
        icon: globe,
        iconAlt: 'outline of three people',
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

export const Estimate = () => {
  const [questions, setQuestions] = useState(defaultQuestions);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const classes = useStyles();
  const theme = useTheme();

  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };

  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter(question => question.active);
    const isLastIndex = currentlyActive[0].id - 1 === questions.length - 1;
    if (isLastIndex) {
      return true;
    }
    return false;
  };

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter(question => question.active);
    const isLastIndex = currentlyActive[0].id - 1 === 0;
    if (isLastIndex) {
      return true;
    }
    return false;
  };

  const handleSelect = id => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const newSelected = newQuestions[activeIndex].options[id - 1];
    const previousSelected = currentlyActive[0].options.filter(
      option => option.selected
    );
    if (currentlyActive[0].subtitle === 'Select one.') {
      if (previousSelected[0]) {
        previousSelected[0].selected = !previousSelected[0].selected;
      }
      newSelected.selected = !newSelected.selected;
    } else {
      newSelected.selected = !newSelected.selected;
      if (newSelected.title === 'Custom Software Development') {
        setQuestions(softwareQuestions);
        return;
      }
      if (newSelected.title === 'iOS/Android App Development') {
        setQuestions(softwareQuestions);
        return;
      }
      if (newSelected.title === 'Website Development') {
        setQuestions(websiteQuestions);
        return;
      }
      setQuestions(newQuestions);
    }
    setQuestions(newQuestions);
  };

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
      <Grid item container direction={'column'} lg>
        <Grid item style={{ marginTop: '2em', marginLeft: '5em' }}>
          <Typography variant='h2'>Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight: '10em', maxWidth: '50em', marginTop: '7.5em' }}
        >
          <Lottie options={defaultOptions} width={'100%'} height={'100%'} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={'column'}
        alignItems='center'
        style={{ marginRight: '2em', marginBottom: '25em' }}
        lg
      >
        {questions
          .filter(question => question.active)
          .map((question, index) => (
            <>
              <Grid item>
                <Typography
                  variant='h2'
                  align='center'
                  style={{
                    fontWeight: 500,
                    marginTop: '5em',
                    fontSize: '2.25rem',
                    lineHeight: 1.25,
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant='body1'
                  align='center'
                  style={{ marginBottom: '2.5em' }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option, index) => (
                  <Grid
                    item
                    container
                    direction={'column'}
                    md
                    component={Button}
                    style={{
                      display: 'grid',
                      textTransform: 'none',
                      backgroundColor: option.selected
                        ? theme.palette.common.orange
                        : null,
                      borderRadius: 0,
                    }}
                    onClick={() => handleSelect(option.id)}
                  >
                    <Grid item style={{ maxWidth: '14em' }}>
                      <Typography
                        variant='h6'
                        align='center'
                        marginBottom={'1em'}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant='caption' align='center'>
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </>
          ))}

        <Grid
          item
          container
          style={{
            justifyContent: 'space-between',
            width: '18em',
            marginTop: '3em',
          }}
        >
          <Grid item>
            <IconButton
              onClick={previousQuestion}
              disabled={navigationPreviousDisabled()}
            >
              <img
                src={
                  navigationPreviousDisabled() ? backArrowDisabled : backArrow
                }
                alt='Previous question'
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={nextQuestion}
              disabled={navigationNextDisabled()}
            >
              <img
                src={
                  navigationNextDisabled() ? forwardArrowDisabled : forwardArrow
                }
                alt='Next question'
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            className={classes.estimateButton}
            onClick={() => setIsDialogOpen(true)}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <Grid container justifyContent={'center'}>
          <Grid item>
            <Typography variant='h2' align='center'>
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container>
            <Grid item container direction={'column'}>
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
                  value={phone}
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
            <Grid item>
              <Typography variant='body1' paragraph>
                We can create this digital solution for an estimated
              </Typography>
              <Typography variant='body1' paragraph>
                Fill out your name, phone number and email, place your request,
                and we'll get back to you with details moving forward and a
                final price.
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};
