import React from 'react';
import { BrowserRouter, 
  Routes, 
  Route, 
 } from "react-router-dom";

 import {useEffect} from 'react';


import {Home } from './containers';
import { Footer, Navbar, Upcomingevents, Ourteam , Gallery, History, Events , PrivacyPolicy, Disclaimer, Eventdetails, Loader } from './components';

import './App.css';

const App = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <BrowserRouter>
    <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Upcomingevents" element={<Upcomingevents />} />
            <Route path="/Ourteam" element={<Ourteam />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/History" element={<History />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Disclaimer" element={<Disclaimer />} />
            <Route path="/Eventdetails" element={<Eventdetails />} />
          </Routes>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;