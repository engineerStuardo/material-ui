import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './ui/Header';
import { theme } from './ui/Theme';
import { Footer } from './ui/Footer';
import { LandingPage } from './LandingPage';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  const headerProps = {
    value,
    setValue,
    selectedIndex,
    setSelectedIndex,
  };

  const landingFooterProps = {
    setValue,
    setSelectedIndex,
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header {...headerProps} />
        <Routes>
          <Route
            exact
            path='/'
            element={<LandingPage {...landingFooterProps} />}
          />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/customsoftware' element={<CustomSoftware />} />
          <Route exact path='/mobileapps' element={<MobileApps />} />
          <Route exact path='/websites' element={<WebSites />} />
          <Route exact path='/revolution' element={<Revolution />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/estimate' element={<Estimate />} />
        </Routes>
        <Footer {...landingFooterProps} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

const Services = () => {
  return <div>Services</div>;
};
const CustomSoftware = () => {
  return <div>Custom Software</div>;
};
const MobileApps = () => {
  return <div>Mobile Apps</div>;
};
const WebSites = () => {
  return <div>Web Sites</div>;
};
const Revolution = () => {
  return <div>Revolution</div>;
};
const About = () => {
  return <div>About</div>;
};
const Contact = () => {
  return <div>Contact</div>;
};
const Estimate = () => {
  return <div>Estimate</div>;
};

export default App;
