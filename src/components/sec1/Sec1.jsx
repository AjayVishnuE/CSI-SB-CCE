import React from 'react'
import './sec1.css';
import Spotlight from '../../assets/Spotlight.svg';
import Crown from '../../assets/About-crown.svg';
import Aim from '../../assets/About-aim.svg';
import Rocket from '../../assets/About-rocket.svg';


const Sec1 = () => {
  return (
    <div>
      <div class="spotlight">
        <img class="spotlight-img" src={Spotlight}/>
      </div>
      <h1 style={{textAlign: "center" , padding: "40px"}}>About CSI</h1>
      <div class="about-csi">
        <div class="about-csi-content">
            <img src={Crown}/>
            <h1 style={{margin: 0, lineHeight: 1}}>Value</h1>
            <p style={{textAlign: "center", padding:"0px 25px", fontSize: "large", lineHeight: "1.2"}}>one of the most valued professional bodies in the world</p>
        </div>
        <div class="about-csi-content">
            <img src={Aim}/>
            <h1 style={{margin: 0, lineHeight: 1}}>Learn</h1>
            <p style={{textAlign: "center", padding:"0px 25px", fontSize: "large", lineHeight: "1.2"}}>one of the most valued professional bodies in the world</p>
        </div>
        <div class="about-csi-content">
            <img src={Rocket}/>
            <h1 style={{margin: 0, lineHeight: 1}}>Connect</h1>
            <p style={{textAlign: "center", padding:"0px 25px", fontSize: "large", lineHeight: "1.2"}}>one of the most valued professional bodies in the world</p>
        </div>
      </div>
    </div>
  )
}

export default Sec1