import React from 'react'
import './events.css';

import Event1 from '../../assets/Events/Event1.png';
import Event2 from '../../assets/Events/Event2.png';
import Event3 from '../../assets/Events/Event3.png';
import Event4 from '../../assets/Events/Event4.png';
import Event5 from '../../assets/Events/Event5.png';
import Event6 from '../../assets/Events/Event6.png';
import Event7 from '../../assets/Events/Event7.png';
import Event8 from '../../assets/Events/Event8.png';
import Event9 from '../../assets/Events/Event9.png';

const Events = () => {
  return (
    <div class="events-container">
        <h2>Events So Far</h2>
        <div class="events">
            <div class="events-div">
                <img src={Event1} alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>_bootUp </h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}> An offline overnight bootcamp on web development.</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event1.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event2} alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>Student Master Program  </h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>one day offline workshop on web development.</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event2.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event3} alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>Game Development</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>One day game development workshop in Unity.</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event3.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event4} alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>Django Worskshop</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>One day workshop on Hands on training in Django Frame...</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event1.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event5} alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>Laravel Workshop</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>One day workshop on Larvel Web application framework </p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event2.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event6} alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>Ideathon</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>An idea pitching competition which was conducted in both ...</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event3.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event7} alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>IoT Workshop</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>An offline workshop on Implementations of IOT and ..... </p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event1.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event8} alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>IoT Project Expo</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>A project expo which unveiled the IOT projects created by.......</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event2.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event9} alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>Code-a-thon</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>A coding competition conducted in online platform.... </p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event3.html">Read More</a>
            </div>
        </div>
    </div>
  )
}

export default Events