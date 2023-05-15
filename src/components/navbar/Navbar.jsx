import React from 'react';

import { Link } from "react-router-dom";

import { Home } from '../../containers';

import logodesk from '../../assets/CSI-CCE Logo Desktop.svg';
import logomv from '../../assets/CSI-CCE Logo mobileview.svg';
import './navbar.css';

function Navbar () {
  return (
    <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            <Link to="/">
              <img className="nav-logo-desktop" src={logodesk}/>
              <img className="nav-logo-mobileview" src={logomv}/>
            </Link>
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
            <Link to="/Upcomingevents">UPCOMING EVENTS</Link>
            <Link to="/Ourteam">Our Team</Link>
            <Link to="/Gallery">Gallery</Link>
            <Link to="/History">History</Link>
        </div>
      </div>
  );
}

export default Navbar;

