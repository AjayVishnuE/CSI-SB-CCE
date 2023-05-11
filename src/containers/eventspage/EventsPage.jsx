import React from 'react'
import './eventspage.css';
import { Navbar,Events,Footer } from '../../components';

const EventsPage = () => {
  return (
    <div>
      <Navbar/>
      <Events/>
      <Footer/>
    </div>
  )
}

export default EventsPage