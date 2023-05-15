import React from 'react'
import './history.css';
import history1 from '../../assets/history1.JPG';
import history2 from '../../assets/history2.JPG';


const History = () => {
  return (
    <div>
      <div className="history">
        <h1>History</h1>
        <img className="history-img" src={history1} alt="history-img"/>
        <p style={{textAlign:"justify",textIndent: 50}}>
          <br/><t/>
          Computer Society of India (CSI) Student Chapter at Christ College of Engineering Irinjalakuda (CCE). Established in 2015, we are a thriving community of over 300 members who are passionate about technology and constantly strive to enhance our technical skills.CSI Student Branch CSI CCE is one of the active technical society of Christ College of Engineering Irinjalakuda (CCE)
          <br/>CSI CCE Student-Chapter was inaugurated by the Kerala state student coordinator Dr. M V Rajesh. He shared his expertise and experiences on being a member of the CSI and apprised the students of its advantages and the various opportunities it offers. He appreciated the endeavors  undertaken by the college and its keen interest in such pursuits..
          <br/>Our student chapter is run by a dedicated Student Council and faculty from the Department of Computer Science and Engineering.The first ex-com was lead by the student branch chairman Mr.Lazar Tony. We organize various technical activities such as workshops, competitions, technical symposiums, and guest lectures to provide our members with a platform to grow in the field of IT. 
          <br/><br/>
        </p>
        <img className="history-img" src={history2} alt="history-img"/>
        <p style={{textAlign:"justify"}}>
          <br/>    
          Being a part of the CCE CSI Student Chapter has been an incredible experience for our members, as it allows us to learn and grow alongside like-minded individuals. We are committed to providing our members with the resources and opportunities they need to succeed in the ever-evolving world of technology.
          <br/>The CSI Student Chapter at Christ College of Engineering Irinjalakuda (CCE) has also conducted numerous events during our flagship event, Beach Hack 5. This event has provided an excellent opportunity for our members to showcase their skills and creativity through various competitions and challenges.
          <br/>In 2023 we included three new post in our executive commitee.The fore mentioned post were technical head,creative head and content head. This made easier to exchange views and information, to learn and share ideas among professionals. The wide spectrum of members in the society is committed to the advancement of the theory and practice of Computer Engineering and Technology Systems, Science and Engineering, Information Processing and related Arts and Sciences.
          <br/>
        </p>
      </div>
    </div>
  )
}

export default History