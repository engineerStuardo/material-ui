import React, { useState, useEffect, useMemo } from 'react';
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
  List,
  ListItem,
  ListItemText,
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
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.light} !important`,
    },
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
    marginRight: '20px !important',
  },
  drawer: {
    backgroundColor: `${theme.palette.common.blue} !important`,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white !important',
    opacity: 0.5,
  },
  drawerEstimate: {
    ...theme.typography.tab,
    color: 'white !important',
    opacity: 0.5,
    backgroundColor: `${theme.palette.common.orange} !important`,
  },
  drawerItemSelected: {
    border: '1px solid white !important',
    opacity: `1 !important`,
  },
  appBar: {
    zIndex: `${theme.zIndex.modal + 1} !important`,
  },
}));

const Header = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
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
  };

  const menuOptions = useMemo(() => {
    return [
      { name: 'Services', link: '/services' },
      { name: 'Custom Software Development', link: '/customsoftware' },
      { name: 'iOS/Android Development', link: '/mobileapps' },
      { name: 'Websites Development', link: '/websites' },
    ];
  }, []);

  const routes = useMemo(() => {
    return [
      { name: 'Home', link: '/' },
      { name: 'Services', link: '/services' },
      { name: 'Revolution', link: '/revolution' },
      { name: 'About Us', link: '/about' },
      { name: 'Contact Us', link: '/contact' },
    ];
  }, []);

  useEffect(() => {
    routes.forEach((item, index) => {
      if (window.location.pathname === item.link && value !== index) {
        setValue(index);
      }
    });

    menuOptions.forEach((item, index) => {
      if (window.location.pathname === item.link && value !== 1) {
        setValue(1);
        setSelectedIndex(index);
      }
    });

    if (window.location.pathname === '/estimate' && value !== 5) {
      setValue(5);
    }
  }, [value, routes, setValue, setSelectedIndex, menuOptions]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor='secondary'
      >
        {routes.map(item =>
          item.name !== 'Services' ? (
            <Tab
              key={item.name}
              label={item.name}
              className={classes.tab}
              component={Link}
              to={item.link}
            />
          ) : (
            <Tab
              key={item.name}
              id='basic-button'
              aria-controls={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup={anchorEl ? 'true' : undefined}
              aria-expanded={anchorEl ? 'true' : undefined}
              onMouseOver={e => handleClick(e)}
              label={item.name}
              className={classes.tab}
              component={Link}
              to={item.link}
            />
          )
        )}
      </Tabs>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        component={Link}
        to={'/estimate'}
        onClick={() => setValue(5)}
      >
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
        keepMounted
        style={{ zIndex: 1302 }}
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
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.tollbarMargin}></div>
        <List disablePadding>
          {routes.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => {
                setOpenDrawer(false);
                setValue(index);
              }}
              divider
              button
              component={Link}
              to={item.link}
              classes={{ selected: classes.drawerItemSelected }}
              className={classes.drawerItem}
              selected={value === index}
            >
              <ListItemText disableTypography>{item.name}</ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to='/estimate'
            classes={{ selected: classes.drawerItemSelected }}
            className={classes.drawerEstimate}
            selected={value === 5}
          >
            <ListItemText disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
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
        <AppBar position='fixed' color='primary' className={classes.appBar}>
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
