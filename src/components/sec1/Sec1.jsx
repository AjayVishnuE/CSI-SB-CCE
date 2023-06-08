import React from 'react'
import './sec1.css';
import Spotlight from '../../assets/Spotlight.JPG';
import Crown from '../../assets/About-crown.svg';
import Aim from '../../assets/About-aim.svg';
import Rocket from '../../assets/About-rocket.svg';


const Sec1 = () => {
  return (
    <div>
      <div className="spotlight">
        <img className="spotlight-img" src={Spotlight}/>
        <h1 className="Desktopview">Computer Society of India<br/>CCE Student Branch</h1>
        <h1 className="Mobileview">CSI<br/>CCE Student Branch</h1>
      </div>
      <h1 style={{textAlign: "center" , padding: "40px"}}>About CSI</h1>
      <div className="about-csi">
        <div className="about-csi-content">
            <img className="about-csi-content-img" src={Crown}/>
            <h1 className="about-csi-content-h1" >Value</h1>
            <p className="about-csi-content-p" >one of the most valued professional bodies in the world.</p>
        </div>
        <div className="about-csi-content">
            <img className="about-csi-content-img" src={Aim}/>
            <h1 className="about-csi-content-h1" >Learn</h1>
            <p className="about-csi-content-p" >Learn about technologies along with the Computer Society of India.</p>
        </div>
        <div className="about-csi-content">
            <img className="about-csi-content-img" src={Rocket}/>
            <h1 className="about-csi-content-h1" >Connect</h1>
            <p className="about-csi-content-p" >Build and grow your connections around the globe with us.</p>
        </div>
      </div>
    </div>
  )
}

export default Sec1