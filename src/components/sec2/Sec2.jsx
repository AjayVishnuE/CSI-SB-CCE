import React from 'react'
import './sec2.css';
import ourjourney from '../../assets/ourjourney.JPG';
import CCE from '../../assets/CCE-logo.svg';
import CODe from '../../assets/CODe-logo.svg';


const Sec2 = () => {
  return (
    <div>
      <div className="our-journey">
        <div className="our-journey-img-container">
            <img class="our-journey-img" src={ourjourney}/>
        </div>
        <div className="our-journey-description">
            <h1 style={{color:"#183883", margin:"0 0 20px 0", lineHeight: 1}}>Our Journey</h1>
            <p style={{fontSize: "larger", textAlign: "justify"}}>
            Computer Society of India Student Chapter at the Christ College of Engineering, Irinjalakuda was established on March 4th, 2020 Inaugurated by the Kerala state student coordinator Dr. M V Rajesh. CSI CCE is an open forum that helps students through various programs like quizzes, talks, discussions, workshops, and other events. Our mission is to facilitate research, learning, and career enhancement for all categories of IT professionals. We strive to provide high quality knowledge through our workshops.</p>
        </div>
      </div>
      <div className="supporting-organizations">
        <h1 style={{textAlign: "center"}}>Supporting Organizations</h1>
        <div className="supporting-organizations-logos">
          <a href="https://cce.edu.in" target='_blank'>
            <img src={CCE} alt=""/>
          </a>
          <a href="https://cce.edu.in/department/associations/1" target='_blank'>
            <img src={CODe} alt=""/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sec2