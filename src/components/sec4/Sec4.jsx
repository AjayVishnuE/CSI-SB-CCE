import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './sec4.css';
import Event9 from '../../assets/Events/Posters/Event9.png';
import Event8 from '../../assets/Events/Posters/Event8.png';
import Event7 from '../../assets/Events/Posters/Event7.png';
import Eventimg9 from '../../assets/Events/Images/Event9.jpg';
import Eventimg8 from '../../assets/Events/Images/Event8.jpg';
import Eventimg7 from '../../assets/Events/Images/Event7.jpg';
import { Link } from 'react-router-dom';
const Datasets = [
  {
      title: 'Game Development',
      poster: Event9,
      Date:'01 April 2023',
      Eventimg:Eventimg9,
      Description:'One day game development workshop in Unity.',
      text: 'The Computer Society Of India(CSI) of CCE and the Game Development Community of CCE jointly organized the workshop.The workshop was conducted by Mr. Elwin Jose, Technical Support Trainee at SOTI. A total of 35 participants attended the event.Registration fee was Rs.100 and certificates were provided to all the participants. Unity is a popular cross-platform game engine used to create 2D and 3D video games and other interactive content. It offers a range of tools and features for game development, including a powerful scripting language, a physics engine, asset management, and support for virtual reality and augmented reality. Unity is widely used in the gaming industry and has a large community of developers who share knowledge and resources.',
  },
  {
      title: '_Boot Up',
      poster: Event8,
      Date:'10th & 11th March 2023',
      Eventimg:Eventimg8,
      Description:' An offline overnight bootcamp on web development.',
      text: 'CSI Student Chapter of Christ College Of Engineering,Irinjalakuda organized an offline overnight  bootcamp on web development.It was held on 10th and 11th of march 2023.The session started at 6:30 pm on 10th march and ended at 5:00 pm on 11th march 2023.A total of 30 students participated in the workshop.The session was led by Mr. Muhammad Sajad Front-end Development Head Tegain.The session was concluded with a valedictory ceremony.The ceremony was held in the presence of executive director Rev.Fr.John Palliakkara,faculty coordinator Ms.Jasmine Jolly ,resource person Mr.Muhammad Sajad and the Talrop team.The event aimed to enrich the technical knowledge of students in the field of Web Development.',
  },
  {
      title: 'Student Master Program',
      poster: Event7,
      Date:'10th March 2023',
      Eventimg:Eventimg7,
      Description:'one day offline workshop on web development.',
      text: 'CSI CCE Student Chapter of Christ College Engineering,Irinjalakuda organized  a one day offline workshop as part of student master program on basics of HTML, CSS and JAVASCRIPT for 2nd year computer science students of christ college of engineering.The session started at 9:00 am and ended at 3:00pm.A total of 35 students participated in the event.The session was led by Mr.Ajil Ibrahim & Mr.Adithyakrishnan final year S8 students of christ college of engineering.The event aimed to enrich the technical knowledge of students. ',
  }
];

const Sec4 = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  const [enable,setenable]=useState()
  const history=useNavigate()

  const handle = (item) => {
    history("/Eventdetails",{state:{data:item}})
  }
  return (
    <div>
      <h1 style={{textAlign: "center", padding: "20px"}}>Events so far</h1>
      <div className="events">
      {
        Datasets.map((item)=>{
            return (
                <div class="events-div">
                    <img src={item.poster} alt="event-img"/>
                    <h1 style={{textAlign: "left",fontSize: 20, fontWeight: 600, margin: 0, width:290}}>{item.title}</h1>
                    <p style={{ textAlign: "left", height: "fit-content", overflow: "hidden", fontSize:"medium", width: 290, height:"50px"}}>{item.Description}</p>
                    <button onClick={()=>handle(item)} style={{textAlign: "left", textDecoration: "none", color: "#183883",fontSize:"medium", fontWeight: 500, width:290, border:"None", backgroundColor:"white", cursor:"pointer"}}>Read More</button>
                </div>
            )
        })
      }
      </div>
      <div className="event-btn-container">
        <Link to="/Events">
          <div className="event-btn">
            <p>View more events from us</p>        
          </div>
        </Link>
      </div>
      <div className="reach-us">
        <h1 style={{textAlign: "center", margin: 0}}>Reach Us</h1>
        <div className="reach-us-inside">
          <div className="reach-us-left">
            <h1 class="coordinator-h1" style={{fontSize:"x-large", fontWeight: 600, margin: 0}}>Faculty Coordinators:</h1>
            <br/>
            <h3 style={{margin:0, fontSize: "medium", fontWeight: 500, lineHeight: 1}}>DR. Remya K Sasi</h3>
            <h4 style={{margin:0, fontSize: "medium", fontWeight: 400, lineHeight: 1}}>9496812035</h4>
            <br/>
            <h3 style={{margin:0, fontSize: "medium", fontWeight: 500, lineHeight: 1}}>Jasmine Jolly</h3>
            <h4 style={{margin:0, fontSize: "medium", fontWeight: 400, lineHeight: 1}}>9539697291</h4>
          </div>
          <div className="reach-us-right">
            <h1 class="coordinator-h1" style={{fontSize:"x-large", fontWeight: 600, margin: 0}}>Student Coordinators:</h1>
            <br/>
            <h3 style={{margin:0, fontSize: "medium", fontWeight: 500, lineHeight: 1}}>Krishnanad U</h3>
            <h4 style={{margin:0, fontSize: "medium", fontWeight: 400, lineHeight: 1}}>9562962926</h4>
            <br/>
            <h3 style={{margin:0, fontSize: "medium", fontWeight: 500, lineHeight: 1}}>Paveena Peter</h3>
            <h4 style={{margin:0, fontSize: "medium", fontWeight: 400, lineHeight: 1}}>7994435771</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec4