import React from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyle = makeStyles(theme => ({
  tollbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '7em',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    '&.MuiButtonBase-root.MuiTab-root': {
      ...theme.typography.tab,
      color: 'white !important',
      minWidth: 10,
      marginLeft: '25px',
    },
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px !important',
    height: '45px !important',
    marginLeft: '50px !important',
    marginRight: '25px !important',
  },
}));

const Header = () => {
  const classes = useStyle();

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar disableGutters>
            <img src={logo} alt='componay logo' className={classes.logo} />
            <Tabs className={classes.tabContainer}>
              <Tab label='Home' className={classes.tab} />
              <Tab label='Services' className={classes.tab} />
              <Tab label='The Revolution' className={classes.tab} />
              <Tab label='About Us' className={classes.tab} />
              <Tab label='Contact Us' className={classes.tab} />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.tollbarMargin} />
    </>
  );
};

export default Header;
