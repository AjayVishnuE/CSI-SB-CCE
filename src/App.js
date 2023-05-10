import React from 'react';
import { ReactDOM } from 'react-dom';

import { Navbar, Footer,Upcomingevents, Ourteam, Gallery, History } from './components' ;
import { Home } from './containers';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      < Upcomingevents/>
      <  Ourteam/>  
      < Gallery />
      < History />
      <Footer />
    </div>
  )
}

export default App
