import React from 'react';
import { AppBar, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
  },
}));

const Header = () => {
  const classes = useStyle();

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar>
            <Typography variant='h3'>Arc Development</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.tollbarMargin} />
    </>
  );
};

export default Header;
