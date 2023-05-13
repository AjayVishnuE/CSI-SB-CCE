import React from 'react';
import { BrowserRouter, 
  Routes, 
  Route, 
 } from "react-router-dom";

 import {useEffect} from 'react';


import { EventsPage, GalleryPage, HistoryPage, Home, OurTeam, UpcomingEvents } from './containers';
import { Navbar } from './components';

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
            <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/GalleryPage" element={<GalleryPage />} />
            <Route path="/HistoryPage" element={<HistoryPage />} />
            <Route path="/EventsPage" element={<EventsPage />} />
          </Routes>
    </BrowserRouter>

  );
}

export default App;