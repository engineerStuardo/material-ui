import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

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
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('sm')]: {
      height: '5.5em',
    },
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
  menu: {
    backgroundColor: `${theme.palette.common.blue} !important`,
    color: 'white !important',
  },
  menuItem: {
    ...theme.typography.tab,
    height: '50px !important',
    opacity: 0.5,
    '&:hover': {
      opacity: '1 !important',
    },
  },
  menuItemSelected: {
    backgroundColor: `${theme.palette.common.orange} !important`,
  },
  drawerIconContainer: {
    marginLeft: 'auto !important',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px !important',
    width: '50px !important',
    color: 'white !important',
  },
}));

const Header = () => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
    console.log(i);
  };

  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/customsoftware' },
    { name: 'Mobile App Development', link: '/mobileapps' },
    { name: 'Websites Development', link: '/websites' },
  ];

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
    if (window.location.pathname === '/customsoftware' && value !== 1) {
      setValue(1);
      setSelectedIndex(1);
    }
    if (window.location.pathname === '/mobileapps' && value !== 1) {
      setValue(1);
      setSelectedIndex(2);
    }
    if (window.location.pathname === '/websites' && value !== 1) {
      setValue(1);
      setSelectedIndex(3);
    }
  }, [value]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor='secondary'
      >
        <Tab label='Home' className={classes.tab} component={Link} to='/' />
        <Tab
          id='basic-button'
          aria-controls={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          aria-expanded={anchorEl ? 'true' : undefined}
          label='Services'
          className={classes.tab}
          component={Link}
          to='/services'
          onMouseOver={e => handleClick(e)}
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
      <Button variant='contained' color='secondary' className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        classes={{ paper: classes.menu }}
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        elevation={0}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          onMouseLeave: handleClose,
        }}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={index}
            onClick={e => {
              handleMenuItemClick(e, index);
              handleClose();
              setValue(1);
            }}
            selected={index === selectedIndex && value === 1}
            classes={{
              root: classes.menuItem,
              selected: classes.menuItemSelected,
            }}
            component={Link}
            to={option.link}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        example drawer
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.tollbarMargin} />
    </>
  );
};

export default Header;
