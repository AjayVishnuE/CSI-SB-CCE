import React from 'react'
import './footer.css';
import logodesk from '../../assets/CSI-CCE Logo Desktop.svg';
import instagram from '../../assets/logo-instagram.svg';
import linkedin from '../../assets/logo-linkedin.svg';
import facebook from '../../assets/logo-facebook.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className="footer-left">
          <img className="footer-left-img" src={logodesk}/>
          <div style={{display: "flex", padding:"0"}}>
            <Link to="/PrivacyPolicy" style={{display:"inline-block", color: "#183883" , FontWeight: "semibold", fontSize:"medium" }}>Privacy Policy </Link>
            <p style={{display: 'inline-block'}}>|</p>
            <Link to="/Disclaimer" style={{display:'inline-block', textdecoration:'none', color: '#183883', fontWeight: '400', fontSize: 'medium'}}>Disclaimer</Link>
          </div>
        </div>
        <div className="footer-center">

        </div>
        <div className="footer-right">
          <div className="footer-right-imgs">
            <a href="https://www.instagram.com/csi_cce/" target="_blank">
              <img src={instagram} alt=""/> 
            </a>
            <a href="https://www.linkedin.com/in/csicce/" target="_blank">
              <img src={linkedin} alt=""/>
            </a>
            <a href="" target="_blank">
              <img src={facebook} alt=""/>
            </a>
          </div>
          <a style={{color: '#183883', fontWeight:"semibold", fontSize:"large"}} href="cce.edu.in">cce.edu.in</a>
        </div>
      </div>
      <p style={{textAlign:"center", fontSize:"small"}}>Copyright © CSI CCE 2023. All Rights Reserved.</p>
      <p className="Credits">Designed and developed by <a style={{color:"#183883"}} href="https://www.linkedin.com/in/enricsneelamkavil/" target='_blank'>Enric S Neelamkavil</a> and <a style={{color:"#183883"}} href="https://www.linkedin.com/in/ajayvishnue/" target='_blank'>Ajay Vishnu E</a>.</p>
    </div>
  )
}

export default Footer