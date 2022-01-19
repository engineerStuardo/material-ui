import React from 'react';
import { AppBar, Toolbar, Typography, useScrollTrigger } from '@mui/material';

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

const Header = () => {
  return (
    <ElevationScroll>
      <AppBar position='fixed' color='primary'>
        <Toolbar>
          <Typography variant='h3'>Arc Development</Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
