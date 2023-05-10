import React from 'react'
import './footer.css';
import logodesk from '../../assets/CSI-CCE Logo Desktop.svg';
import instagram from '../../assets/logo-instagram.svg';
import linkedin from '../../assets/logo-linkedin.svg';
import facebook from '../../assets/logo-facebook.svg';


const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className="footer-left">
          <img className="footer-left-img" src={logodesk}/>
          <div style={{display: "flex", padding:"0"}}>
            <a href="./Privacy Policy.html" style={{display:"inline-block", color: "#183883" , FontWeight: "semibold", fontSize:"medium" }}>Privacy Policy </a>
            <p style={{display: 'inline-block'}}>|</p>
            <a href="./Disclaimer.html" style={{display:'inline-block', textdecoration:'none', color: '#183883', fontWeight: '400', fontSize: 'medium'}}>Disclaimer</a>
          </div>
        </div>
        <div className="footer-center">

        </div>
        <div className="footer-right">
          <div className="footer-right-imgs">
            <a href="">
              <img src={instagram} alt=""/> 
            </a>
            <a href="">
              <img src={linkedin} alt=""/>
            </a>
            <a href="">
              <img src={facebook} alt=""/>
            </a>
          </div>
          <a style={{color: '#183883', fontWeight:"semibold", fontSize:"large"}} href="cce.edu.in">cce.edu.in</a>
        </div>
      </div>
      <p style={{textAlign:"center", padding:"15px", fontSize:"small"}}>Copyright © CSI CCE 2023. All Rights Reserved</p>
    </div>
  )
}

export default Footer