import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './sec4.css';
import Event1 from '../../assets/Events/Posters/Event1.png';
import Event2 from '../../assets/Events/Posters/Event2.png';
import Event3 from '../../assets/Events/Posters/Event3.png';
import Eventimg1 from '../../assets/Events/Images/Event1.jpg';
import Eventimg2 from '../../assets/Events/Images/Event2.jpg';
import Eventimg3 from '../../assets/Events/Images/Event3.jpg';
import { Link } from 'react-router-dom';
const Datasets = [
  {
    title: '_Boot Up',
    poster: Event1,
    Eventimg:Eventimg1,
    Description:'An offline overnight bootcamp on web development.',
    text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Student Master Program',
    poster: Event2,
    Eventimg:Eventimg2,
    Description:'One day offline workshop on web development.',
    text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Game Development',
    poster: Event3,
    Eventimg:Eventimg3,
    Description:'One day game development workshop in Unity.',
    text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
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
                    <h1 style={{textAlign: "left",fontSize: 20, fontWeight: 600, margin: 0, width:300}}>{item.title}</h1>
                    <p style={{ textAlign: "left", height: "fit-content", overflow: "hidden", fontSize:"medium", width: 300, height:"50px"}}>{item.Description}</p>
                    <button onClick={()=>handle(item)} style={{textAlign: "left", textDecoration: "none", color: "#183883",fontSize:"medium", fontWeight: 500, width:300, border:"None", backgroundColor:"white"}}>Read More</button>
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