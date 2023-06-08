import React from 'react'
import './sec3.css';
import Bhlogo from '../../assets/BH5 logo.svg';
import BH1 from '../../assets/BH51.jpg';
import BH2 from '../../assets/BH52.JPG';
import BH3 from '../../assets/BH53.JPG';
import BH4 from '../../assets/BH54.JPG';
import BH5 from '../../assets/BH55.JPG';
import BH6 from '../../assets/BH56.jpg';
import Rightslider from '../rightslider/Rightslider';



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
          <p style={{textAlign: "justify", fontSize:"large"}}>Beach Hack is the flagship event hosted by  Community Of Developers(CODe), association of computer science  of Christ College Of Engineering, Irinjalakuda. The 5th edition of beach hack titled BEACH HACK 5 was held on 29th and 30th of December 2022. Beach hack is a 24 hour  beach hackathon, providing a platform for students to solve various problems faced by our society simultaneously improving their critical and creative thinking. Various students from all over India participated for the event. The theme of Beach Hack 5 was marine and fisheries development.</p>
          <p style={{textAlign: "justify", fontSize:"large"}}>There were around 1000+ registrations,among these individual registration 13 teams were selected for the final level. Students competed with each other and developed solutions to various emerging issues that this(marine and fisheries) sector was facing in our society. Team from CUSAT named BYTECODE consisting of 5 members emerged as winners oF BH5. Participants were made to choose problem statements of their own. The idea of providing signals and essential information to the fishermen when they are danger bagged the first prize. Prizes were distributed to all the winners.</p>
        </div>
        <Rightslider/>
      </div>
    </div>
  )
}

export default Sec3