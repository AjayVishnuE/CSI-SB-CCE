import React from 'react'
import './sec4.css';
import Event1 from '../../assets/Events/Event1.png';
import Event2 from '../../assets/Events/Event2.png';
import Event3 from '../../assets/Events/Event3.png';
import { Link } from 'react-router-dom';


const Sec4 = () => {
  return (
    <div>
      <h1 style={{textAlign: "center", padding: "20px"}}>Events so far</h1>
      <div className="events">
        <div className="events-div">
          <img src={Event1} alt="event1-img"/>
          <h1 style={{fontSize: "20px", fontWeight: 600, margin: 0}}>Heading 1</h1>
          <p style={{textAlign: "justify", paddingRight: "20px", height: "70px", overflow: "hidden"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cumque quae, fugiat error quibusdam eveniet a maxime quo excepturi</p>
          <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event1.html">Read More</a>
        </div>
        <div className="events-div">
          <img src={Event2} alt="event2-img"/>
          <h1 style={{fontSize: "20px", fontWeight: 600, margin: 0}}>Heading 2</h1>
          <p style={{textAlign: "justify", paddingRight: "20px", height: "70px", overflow: "hidden"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cumque quae, fugiat error quibusdam eveniet a maxime quo excepturi</p>
          <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event2.html">Read More</a>
        </div>
        <div className="events-div">
          <img src={Event3} alt="event3-img"/>
          <h1 style={{fontSize: "20px", fontWeight: 600, margin: 0}}>Heading 3</h1>
          <p style={{textAlign: "justify", paddingRight: "20px", height: "70px", overflow: "hidden"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cumque quae, fugiat error quibusdam eveniet a maxime quo excepturi</p>
          <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event3.html">Read More</a>
        </div>
      </div>
      <div className="event-btn-container">
        <Link to="/EventsPage">
          <div className="event-btn">
            <p>View more events from us</p>        
          </div>
        </Link>
      </div>
      <div className="reach-us">
        <h1 style={{textAlign: "center", margin: 0}}>Reach Us</h1>
        <div className="reach-us-inside">
          <div className="reach-us-left">
            <h1 style={{fontSize:"x-large", fontWeight: 600, margin: 0}}>Faculty Coordinators:</h1>
            <br/>
            <h3 style={{margin:0, fontSize: "medium", fontWeight: 500, lineHeight: 1}}>DR. Remya K Sasi</h3>
            <h4 style={{margin:0, fontSize: "medium", fontWeight: 400, lineHeight: 1}}>97320578370</h4>
            <br/>
            <h3 style={{margin:0, fontSize: "medium", fontWeight: 500, lineHeight: 1}}>Jasmine Jolly</h3>
            <h4 style={{margin:0, fontSize: "medium", fontWeight: 400, lineHeight: 1}}>97320578370</h4>
          </div>
          <div className="reach-us-right">
            <h1 style={{fontSize:"x-large", fontWeight: 600, margin: 0}}>Student Coordinators:</h1>
            <br/>
            <h3 style={{margin:0, fontSize: "medium", fontWeight: 500, lineHeight: 1}}>Krishnanad U</h3>
            <h4 style={{margin:0, fontSize: "medium", fontWeight: 400, lineHeight: 1}}>97320578370</h4>
            <br/>
            <h3 style={{margin:0, fontSize: "medium", fontWeight: 500, lineHeight: 1}}>Paveena Peter</h3>
            <h4 style={{margin:0, fontSize: "medium", fontWeight: 400, lineHeight: 1}}>97320578370</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec4