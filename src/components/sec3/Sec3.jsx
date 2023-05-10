import React from 'react'
import './sec3.css';
import Bhlogo from '../../assets/BH5 logo.svg';
import BH1 from '../../assets/BH51.jpg';
import BH2 from '../../assets/BH52.JPG';
import BH3 from '../../assets/BH53.JPG';
import BH4 from '../../assets/BH54.JPG';
import BH5 from '../../assets/BH55.JPG';


const Sec3 = () => {
  return (
    <div>
      <h1 style={{textAlign:"center",padding:"40px"}}>Flagship Event</h1>
      <div className="beachhack">
        <div className="beachhack-title">
          <img className="beachhack-logo-img" src={Bhlogo}/>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <h1 className="BEACH-HACKATHON">BEACH HACKATHON</h1>
            <h1 className="BEACH-HACK-5" >BEACH HACK 5</h1>
          </div>
        </div>
        <div className="beachhack-paragraphs">
          <p style={{textAlign: "justify"}}>beach hack uyir full data evdennelum chavar maari ezhthi itto beach hack uyir full data vdennelum chavar maari ezhthi itto beach hack uyir full data evdennelum chavar maari ezhthi itto beach hack uyir full data evdennelum chavar maari ezhthi itto beach hack uyir full data vdennelum chavar maari ezhthi itto beach hack uyir full data evdennelum chavar maari ezhthi itto beach hack uyir full data evdennelum chavar maari ezhthi itto beach hack uyir full data vdennelum chavar maari ezhthi itto beach hack uyir full data evdennelum </p>
          <p style={{textAlign: "justify"}}>beach hack uyir full data evdennelum chavar maari ezhthi itto beach hack uyir full data vdennelum chavar maari ezhthi itto beach hack uyir full data evdennelum chavar maari ezhthi itto beach hack uyir full data evdennelum chavar maari ezhthi itto beach hack uyir full data vdennelum chavar maari ezhthi itto beach hack uyir full data evdennelum chavar maari ezhthi itto beach hack uyir full data evdennelum chavar maari ezhthi itto beach hack uyir full data vdennelum chavar maari ezhthi itto beach hack uyir full data evdennelum </p>
        </div>
        <div className="beachhack-slider-container">
          <div className="beachhack-slider">
            <div className="beachhack-slide-track">
                <div className="beachhack-slide">
                    <img className="beachhack-slider-imgs" src={BH1} alt="" />
                </div>
                <div className="beachhack-slide">
                    <img className="beachhack-slider-imgs" src={BH2} alt="" />
                </div>
                <div className="beachhack-slide">
                    <img className="beachhack-slider-imgs" src={BH3} alt="" />
                </div>
                <div className="beachhack-slide">
                    <img className="beachhack-slider-imgs" src={BH4} alt="" />
                </div>
                <div className="beachhack-slide">
                    <img className="beachhack-slider-imgs" src={BH5} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec3