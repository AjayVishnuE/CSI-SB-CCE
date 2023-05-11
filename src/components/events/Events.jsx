import React from 'react'
import './events.css';



const Events = () => {
  return (
    <div class="events-container">
        <h2>Events So Far</h2>
        <div class="events">
            <div class="events-div">
                <img src="./images/Events/Event1.png" alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>_bootUp </h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}> An offline overnight bootcamp on web development.</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event1.html">Read More</a>
            </div>
            <div class="events-div">
                <img src="./images/Events/Event2.png" alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>Student Master Program  </h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>one day offline workshop on web development.</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event2.html">Read More</a>
            </div>
            <div class="events-div">
                <img src="./images/Events/Event3.png" alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>Game Development</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>One day game development workshop in Unity.</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event3.html">Read More</a>
            </div>
            <div class="events-div">
                <img src="./images/Events/Event4.png" alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>Django Worskshop</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>One day workshop on Hands on training in Django Frame...</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event1.html">Read More</a>
            </div>
            <div class="events-div">
                <img src="./images/Events/Event5.png" alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>Laravel Workshop</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>One day workshop on Larvel Web application framework </p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event2.html">Read More</a>
            </div>
            <div class="events-div">
                <img src="./images/Events/Event6.png" alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>Ideathon</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>An idea pitching competition which was conducted in both ...</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event3.html">Read More</a>
            </div>
            <div class="events-div">
                <img src="./images/Events/Event7.png" alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>IoT Workshop</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>An offline workshop on Implementations of IOT and ..... </p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event1.html">Read More</a>
            </div>
            <div class="events-div">
                <img src="./images/Events/Event8.png" alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>IoT Project Expo</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>A project expo which unveiled the IOT projects created by.......</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event2.html">Read More</a>
            </div>
            <div class="events-div">
                <img src="./images/Events/Event9.png" alt="event-img"/>
                <h1 style={{fontSize: 20, fontWeight: 600, margin: 0}}>Code-a-thon</h1>
                <p style={{ textAlign: "justify", paddingRight: 20, height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>A coding competition conducted in online platform.... </p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500}} href="./event3.html">Read More</a>
            </div>
        </div>
    </div>
  )
}

export default Events