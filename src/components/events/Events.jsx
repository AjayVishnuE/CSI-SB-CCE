import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './events.css';
import Eventdetails from '../eventdetails/Eventdetails';
import { Link } from 'react-router-dom';
import Event1 from '../../assets/Events/Posters/Event1.png';
import Event2 from '../../assets/Events/Posters/Event2.png';
import Event3 from '../../assets/Events/Posters/Event3.png';
import Event4 from '../../assets/Events/Posters/Event4.png';
import Event5 from '../../assets/Events/Posters/Event5.png';
import Event6 from '../../assets/Events/Posters/Event6.png';
import Event7 from '../../assets/Events/Posters/Event7.png';
import Event8 from '../../assets/Events/Posters/Event8.png';
import Event9 from '../../assets/Events/Posters/Event9.png';
import Eventimg1 from '../../assets/Events/Images/Event1.jpg';
import Eventimg2 from '../../assets/Events/Images/Event2.jpg';
import Eventimg3 from '../../assets/Events/Images/Event3.jpg';
import Eventimg4 from '../../assets/Events/Images/Event4.jpg';
import Eventimg5 from '../../assets/Events/Images/Event5.jpg';
import Eventimg6 from '../../assets/Events/Images/Event6.jpg';
import Eventimg7 from '../../assets/Events/Images/Event7.jpg';
import Eventimg8 from '../../assets/Events/Images/Event8.jpg';
import Eventimg9 from '../../assets/Events/Images/Event9.jpg';

const Events = () => {
    const [selectedContent, setSelectedContent] = useState(null);

    const [enable,setenable]=useState()
    const history=useNavigate()
    const Datasets = [
        {
            title: '_Boot Up',
            poster: Event1,
            Date:'10th & 11th March 2023',
            Eventimg:Eventimg1,
            Description:' An offline overnight bootcamp on web development.',
            text: 'CSI Student Chapter of Christ College Of Engineering,Irinjalakuda organized an offline overnight  bootcamp on web development.It was held on 10th and 11th of march 2023.The session started at 6:30 pm on 10th march and ended at 5:00 pm on 11th march 2023.A total of 30 students participated in the workshop.The session was led by Mr. Muhammad Sajad Front-end Development Head Tegain.The session was concluded with a valedictory ceremony.The ceremony was held in the presence of executive director Rev.Fr.John Palliakkara,faculty coordinator Ms.Jasmine Jolly ,resource person Mr.Muhammad Sajad and the Talrop team.The event aimed to enrich the technical knowledge of students in the field of Web Development.',
        },
        {
            title: 'Student Master Program',
            poster: Event2,
            Date:'10th & 11th March 2023',
            Eventimg:Eventimg2,
            Description:'one day offline workshop on web development.',
            text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'Game Development',
            poster: Event3,
            Date:'10th & 11th March 2023',
            Eventimg:Eventimg3,
            Description:'One day game development workshop in Unity.',
            text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'Django Workshop',
            poster: Event4,
            Date:'10th & 11th March 2023',
            Eventimg:Eventimg4,
            Description:'One day workshop on Hands on training in Django Frame...',
            text: 'as household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'Laravel Workshop',
            poster: Event5,
            Date:'10th & 11th March 2023',
            Eventimg:Eventimg5,
            Description:'One day workshop on Larvel Web application framework ',
            text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'Ideathon',
            poster: Event6,
            Date:'10th & 11th March 2023',
            Eventimg:Eventimg6,
            Description:'An idea pitching competition which was conducted in both ...',
            text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'IoT Workshop',
            poster: Event7,
            Date:'10th & 11th March 2023',
            Eventimg:Eventimg7,
            Description:'An offline workshop on Implementations of IOT and ..... ',
            text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'IoT Project Expo',
            poster: Event8,
            Date:'10th & 11th March 2023',
            Eventimg:Eventimg8,
            Description:'A project expo which unveiled the IOT projects created by.......',
            text: 'as household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
        },
        {
            title: 'Code-a-thon',
            poster: Event9,
            Date:'10th & 11th March 2023',
            Eventimg:Eventimg9,
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
                            <img src={item.poster} alt="event-img"/>
                            <h1 style={{textAlign: "left",fontSize: 20, fontWeight: 600, margin: 0, width:300}}>{item.title}</h1>
                            <p style={{ textAlign: "left", height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300, height:"50px"}}>{item.Description}</p>
                            <button onClick={()=>handle(item)} style={{textAlign: "left", textDecoration: "none", color: "#183883",fontSize:"medium", fontWeight: 500, width:300, border:"None", backgroundColor:"white"}}>Read More</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
};

export default Events;