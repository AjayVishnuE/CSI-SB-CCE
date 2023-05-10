import React from 'react';
import { ReactDOM } from 'react-dom';

import { Navbar, Footer } from './components' ;
import { Home } from './containers';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
      </div>
      <Home />
      <Footer />
    </div>
  )
}

export default App
