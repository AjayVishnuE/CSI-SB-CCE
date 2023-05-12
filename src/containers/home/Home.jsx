import React from 'react'
import './home.css';
import { Footer, Navbar, Sec1, Sec2, Sec3, Sec4 } from '../../components' ;

function Home () {
  return (
    <div>
      <Navbar/>
      <Sec1/>
      <Sec2/>
      <Sec3/>
      <Sec4/>
      <Footer/>
    </div>
  )
}

export default Home;