import Lottie from 'react-lottie';
import { makeStyles } from '@mui/styles';

import animationData from '../animations/landinganimation/data';

const useStyles = makeStyles(theme => ({}));

export const LandingPage = () => {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={'100%'} width={'100%'} />;
};
