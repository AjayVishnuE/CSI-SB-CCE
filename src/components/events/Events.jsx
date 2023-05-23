import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './events.css';
import Eventdetails from '../eventdetails/Eventdetails';
import { Link } from 'react-router-dom';
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
    const [selectedContent, setSelectedContent] = useState(null);

    // Function to handle content selection
    const handleContentSelect = (content) => {
        setSelectedContent(content);
    };
    const [enable,setenable]=useState()
    const history=useNavigate()
    const Datasets = [
        {
            title: '_Boot Up',
            img: Event1,
            Description:' An offline overnight bootcamp on web development.',
            text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'Student Master Program',
            img: Event2,
            Description:'one day offline workshop on web development.',
            text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'Game Development',
            img: Event3,
            Description:'One day game development workshop in Unity.',
            text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'Django Workshop',
            img: Event4,
            Description:'One day workshop on Hands on training in Django Frame...',
            text: 'as household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'Laravel Workshop',
            img: Event5,
            Description:'One day workshop on Larvel Web application framework ',
            text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'Ideathon',
            img: Event6,
            Description:'An idea pitching competition which was conducted in both ...',
            text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'IoT Workshop',
            img: Event7,
            Description:'An offline workshop on Implementations of IOT and ..... ',
            text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'IoT Project Expo',
            img: Event8,
            Description:'A project expo which unveiled the IOT projects created by.......',
            text: 'as household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'Code-a-thon',
            img: Event9,
            Description:'A coding competition conducted in online platform.... ',
            text: 'as household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        }           
      ];
      
      const handle = (item) => {
        history("/Eventdetails",{state:{data:item}})
      }
  return (
    <div class="events-container">
        <h2>Events by CSI CCE</h2>
        <div class="events">
            {
                Datasets.map((item)=>{
                    return (
                        <div class="events-div">
                            <img src={item.img} alt="event-img"/>
                            <h1 style={{textAlign: "left",fontSize: 20, fontWeight: 600, margin: 0, width:300}}>{item.title}</h1>
                            <p style={{ textAlign: "left", height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300, height:"50px"}}>{item.Description}</p>
                            <button onClick={()=>handle(item)} style={{textAlign: "left", textDecoration: "none", color: "#183883",fontSize:"medium", fontWeight: 500, width:300, border:"None", backgroundColor:"white"}}>Read More</button>
                        </div>
                    )
                })
            }

            {/* <div class="events-div">
                <img src={Event2} alt="event-img"/>
                <h1 style={{textAlign: "left",fontSize: 20, fontWeight: 600, margin: 0, width:300}}>Student Master Program  </h1>
                <p style={{ textAlign: "left", height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>One day offline workshop on web development.</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500, width:300}} href="./event2.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event3} alt="event-img"/>
                <h1 style={{textAlign: "left",fontSize: 20, fontWeight: 600, margin: 0, width:300}}>Game Development</h1>
                <p style={{ textAlign: "left", height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>One day game development workshop in Unity.</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500, width:300}} href="./event3.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event4} alt="event-img"/>
                <h1 style={{textAlign: "left",fontSize: 20, fontWeight: 600, margin: 0, width:300}}>Django Worskshop</h1>
                <p style={{ textAlign: "left", height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>One day workshop on Hands on training in Django Frame...</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500, width:300}} href="./event1.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event5} alt="event-img"/>
                <h1 style={{textAlign: "left",fontSize: 20, fontWeight: 600, margin: 0, width:300}}>Laravel Workshop</h1>
                <p style={{ textAlign: "left", height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>One day workshop on Larvel Web application framework </p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500, width:300}} href="./event2.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event6} alt="event-img"/>
                <h1 style={{textAlign: "left",fontSize: 20, fontWeight: 600, margin: 0, width:300}}>Ideathon</h1>
                <p style={{ textAlign: "left", height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>An idea pitching competition which was conducted in both ...</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500, width:300}} href="./event3.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event7} alt="event-img"/>
                <h1 style={{textAlign: "left",fontSize: 20, fontWeight: 600, margin: 0, width:300}}>IoT Workshop</h1>
                <p style={{ textAlign: "left", height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>An offline workshop on Implementations of IOT and ..... </p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500, width:300}} href="./event1.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event8} alt="event-img"/>
                <h1 style={{textAlign: "left",fontSize: 20, fontWeight: 600, margin: 0, width:300}}>IoT Project Expo</h1>
                <p style={{ textAlign: "left", height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>A project expo which unveiled the IOT projects created by.......</p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500, width:300}} href="./event2.html">Read More</a>
            </div>
            <div class="events-div">
                <img src={Event9} alt="event-img"/>
                <h1 style={{textAlign: "left",fontSize: 20, fontWeight: 600, margin: 0, width:300}}>Code-a-thon</h1>
                <p style={{ textAlign: "left", height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300}}>A coding competition conducted in online platform.... </p>
                <a style={{textAlign: "left", textDecoration: "none", color: "#183883", fontWeight: 500, width:300}} href="./event3.html">Read More</a>
            </div> */}
        </div>
    </div>
  );
};

export default Events;