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
            <img src={Crown}/>
            <h1 style={{margin: 0, lineHeight: 1}}>Value</h1>
            <p style={{textAlign: "center", padding:"0px 25px", fontSize: "large", lineHeight: "1.2"}}>one of the most valued professional bodies in the world</p>
        </div>
        <div className="about-csi-content">
            <img src={Aim}/>
            <h1 style={{margin: 0, lineHeight: 1}}>Learn</h1>
            <p style={{textAlign: "center", padding:"0px 25px", fontSize: "large", lineHeight: "1.2"}}>one of the most valued professional bodies in the world</p>
        </div>
        <div className="about-csi-content">
            <img src={Rocket}/>
            <h1 style={{margin: 0, lineHeight: 1}}>Connect</h1>
            <p style={{textAlign: "center", padding:"0px 25px", fontSize: "large", lineHeight: "1.2"}}>one of the most valued professional bodies in the world</p>
        </div>
      </div>
    </div>
  )
}

export default Sec1