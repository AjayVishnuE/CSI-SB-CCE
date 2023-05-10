import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logodesk from '../../assets/CSI-CCE Logo Desktop.svg';
import logomv from '../../assets/CSI-CCE Logo mobileview.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            <a href="./index.html">
              <img className="nav-logo-desktop" src={logodesk}/>
              <img className="nav-logo-mobileview" src={logomv}/>
            </a>
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
            <a href="./Upcoming Events.html">UPCOMING EVENTS</a>
            <a href="./Our Team.html">OUR TEAM</a>
            <a href="./Gallery.html">GALLERY</a>
            <a href="./History.html">HISTORY</a>
        </div>
    </div>
  );
};

export default Navbar;