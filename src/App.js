import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Home } from './containers';
import { Footer, Navbar, Upcomingevents, Ourteam , Gallery, History, Events , PrivacyPolicy, Disclaimer, Eventdetails} from './components';

const App = () => {
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