import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './ui/Header';
import { theme } from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/customsoftware' element={<CustomSoftware />} />
          <Route exact path='/mobileapps' element={<MobileApps />} />
          <Route exact path='/websites' element={<WebSites />} />
          <Route exact path='/revolution' element={<Revolution />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/estimate' element={<Estimate />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const Home = () => {
  return <div>HOME</div>;
};
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