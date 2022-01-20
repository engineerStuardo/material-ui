import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

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
    height: '8em',
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
  logo_container: {
    padding: '0 !important',
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
  },
}));

const Header = () => {
  const classes = useStyle();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    }
    if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    }
    if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    }
    if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    }
    if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    }
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to='/'
              className={classes.logo_container}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img src={logo} alt='componay logo' className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor='secondary'
            >
              <Tab
                label='Home'
                className={classes.tab}
                component={Link}
                to='/'
              />
              <Tab
                label='Services'
                className={classes.tab}
                component={Link}
                to='/services'
              />
              <Tab
                label='The Revolution'
                className={classes.tab}
                component={Link}
                to='/revolution'
              />
              <Tab
                label='About Us'
                className={classes.tab}
                component={Link}
                to='/about'
              />
              <Tab
                label='Contact Us'
                className={classes.tab}
                component={Link}
                to='/contact'
              />
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
