import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './ui/Header';
import { theme } from './ui/Theme';
import { Footer } from './ui/Footer';
import { LandingPage } from './LandingPage';
import { Services } from './Services';
import { CustomSoftware } from './CustomSoftware';
import { MobileApps } from './MobileApps';
import { Websites } from './Websites';
import { Revolution } from './Revolution';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  const valueSetProps = {
    value,
    setValue,
    selectedIndex,
    setSelectedIndex,
  };

  const setProps = {
    setValue,
    setSelectedIndex,
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header {...valueSetProps} />
        <Routes>
          <Route exact path='/' element={<LandingPage {...setProps} />} />
          <Route exact path='/services' element={<Services {...setProps} />} />
          <Route
            exact
            path='/customsoftware'
            element={<CustomSoftware {...setProps} />}
          />
          <Route
            exact
            path='/mobileapps'
            element={<MobileApps {...setProps} />}
          />
          <Route exact path='/websites' element={<Websites {...setProps} />} />
          <Route
            exact
            path='/revolution'
            element={<Revolution {...setProps} />}
          />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/estimate' element={<Estimate />} />
        </Routes>
        <Footer {...setProps} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

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
