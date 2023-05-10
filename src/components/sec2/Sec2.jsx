import React from 'react'
import './sec2.css';
import ourjourney from '../../assets/Our-journey.svg';
import CCE from '../../assets/CCE-logo.svg';
import CODe from '../../assets/CODe-logo.svg';


const Sec2 = () => {
  return (
    <div>
        <div className="our-journey">
        <div className="our-journey-img">
            <img style={{width: "90%", height:"350px", objectFit: "cover" }} src={ourjourney}/>
        </div>
        <div className="our-journey-description">
            <h1 style={{color:"#183883", margin:"0 0 20px 0", lineHeight: 1}}>Our Journey</h1>
            <p style={{fontSize: "large", textAlign: "justify"}}>
              Ivide nammak nammade csi de history evdenn aanelum thappi pidich kond varanam. vannee pattu. Ivide nammak nammade csi de history evdenn aanelum thappi pidich kond varanam. vannee pattu.Ivide nammak nammade csi de history evdenn aanelum thappi pidich kond varanam. vannee pattu. Ivide nammak nammade csi de history evdenn aanelum thappi pidich kond varanam. vannee pattu.</p>
        </div>
      </div>
      <div className="supporting-organizations">
        <h1 style={{textAlign: "center"}}>Supporting Organizations</h1>
        <div className="supporting-organizations-logos">
          <img src={CCE} alt=""/>
          <img src={CODe} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Sec2