import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './events.css';
import Eventdetails from '../eventdetails/Eventdetails';
import { Link } from 'react-router-dom';
import Event1 from '../../assets/Events/Posters/Event1.jpg';
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
import Eventimg4 from '../../assets/Events/Images/Event4.jpeg';
import Eventimg5 from '../../assets/Events/Images/Event5.jpg';
import Eventimg6 from '../../assets/Events/Images/Event6.jpeg';
import Eventimg7 from '../../assets/Events/Images/Event7.jpg';
import Eventimg8 from '../../assets/Events/Images/Event8.jpg';
import Eventimg9 from '../../assets/Events/Images/Event9.jpg';

const Events = () => {
    const [selectedContent, setSelectedContent] = useState(null);

    const [enable,setenable]=useState()
    const history=useNavigate()
    const Datasets = [
        {
            title: 'Game Development Workshop',
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
        },
        {
            title: 'Django Workshop',
            poster: Event6,
            Date:'20th February 2023',
            Eventimg:Eventimg6,
            Description:'One day workshop on Hands on training in Django Frame...',
            text: 'The one day add-on on “Django framework” was held at Common computing lab, St.Chavara block on 20th February, 2023. A total of 45 participants from S6 CSE (2020-2024 batch) participated in this training.  The purpose of this training was to train participants on the concept of Django-framework and to give a start kick to the world of development. Training included various topics such as HTML, Python, CSS along with the integration of all of these into a single framework.The resource person Mr. Anu C, Principal software engineer at Digitvy Technology Solutions who delivered sessions during the training. The training methodology was interactive as the trainer ensured that knowledge was not only disseminated but accurately perceived and understood by the participants. And in order to ensure this, the trainer engaged participants in discussions and kept the forum open for feedback, queries and suggestions. These discussions and interactive sessions were supported through training materials such as powerpoint presentations and handouts on Django.',
        },
        {
            title: 'Laravel Workshop',
            poster: Event5,
            Date:'07th February 2023',
            Eventimg:Eventimg5,
            Description:'One day workshop on Larvel Web application framework ',
            text: 'One day hands-on training in Laravel framework was organized by the CSI student chapter, Computer science and Engineering department, Christ College of Engineering was conducted on February 07 2023.The event was coordinated by Ms.Jasmine Jolly, Ms Nighila Ashok, Fernandes K J(student coordinator). The resource person of the training session was Ms. Ragi K.G. The training session was specially conducted for S5 CS students and faculty members. The session began at 9:30am. Students were introduced to the php framework- laravel,all the installation process and backend features required to build a web application were introduced.Every participants showed active participation throughout the session.the session concluded by 3:30pm. Ms.Jasmine Jolly and Ms Varsha babu delivered vote of thanks . The session was attended by 43 participants.',
        },
        {
            title: 'IoT Project Expo',
            poster: Event4,
            Date:'5th December 2022',
            Eventimg:Eventimg4,
            Description:'A project expo which unveiled the IOT projects created by.......',
            text: 'a Project Expo was organized by CSI CCE under the supervision of faculty coordinator: Ms. Jasmine Jolly, Asst. Professor, Department of CSE. The students presented various projects they have developed. The event had huge participation from students side.',
        },
        {
            title: 'Ideathon',
            poster: Event3,
            Date:'19th November 2022',
            Eventimg:Eventimg3,
            Description:'An idea pitching competition which was conducted in both ...',
            text: 'Ideathon was conducted in two rounds which was open to all colleges in India. Registrations  were accepted from 2nd November 2022 through google forms. The first-round was conducted in  the online mode on 19th November 2022. Out of 22 teams who registered 19 teams participated in  the first round. There were no constrains placed on the topic selection. 6 teams were shortlisted  after the first round. Second round was conducted in the offline mode on 1st December 2022. Program began from  2pm which was inaugurated by our executive director Rev. Fr. John Paliakara. A brief description of  the event was given by faculty co-ordinator Mrs. Jasmine Jolly. The judging panel included Mrs.  Remya Sajan, Mr. Roshan David and Mr. Vince Paul. Each team were given a time of 10 minutes for  their presentation which was followed by a 5 minutes session of Q&A by the judging panel. Out of the six teams, Team Ace from Sahardaya college of Engineering grabbed the first position  and was awarded with a cash prize of Rs.3000. The second and third positions were grabbed by  Team Swathanthra from MES college and Team Developers from Christ college of Engineering  respectively. The second position was awarded with cash prize of Rs1500 and third team was  awarded with Rs.500. During Validatory ceremony Dr. Vince Paul sir gave a description about ideathon and the ideas  presented. Prizes were distributed by our principal Dr.Sajeev John and vice principal Dr.V D John. ',
        },
        {
            title: 'IoT Workshop',
            poster: Event2,
            Date:'13th November 2022',
            Eventimg:Eventimg2,
            Description:'An offline workshop on Implementations of IOT. ',
            text: 'A hands-on workshop on IoT was organized by the CSI student chapter, Computer science and Engineering department, Christ College of Engineering. It was conducted on 13th November 2022 from 10:00 am to 4:00 pm. The staff coordinator for the workshop was Mrs. Jasmine Jolly. The resource person of the event was Mr. Sunil Paul. The event was exclusively for students of computer science department. The term IoT, or Internet of Things, refers to the collective network of connected devices and the technology that facilitates communication between devices and the cloud, as well as between the devices themselves. The Internet of Things gives businesses access to advanced analytics that uncover new opportunities. Mr. Sunil Paul gave a brief introduction to project development and the Arduino hardware and software ecosystem. He also taught how to control digital output devices and servo motor control. Participants were exposed to case studies on the automated irrigation system and digital thermometer. The workshop had a total of 18 participants. The workshop was a grand success and received very good feedback from the participants. This session was very useful for the students as it can be used for laboratory classes and several student projects. All the participants were able to grasp the concepts very well.',
        },
        {
            title: 'Blind Coding',
            poster: Event1,
            Date:'6th July 2022',
            Eventimg:Eventimg1,
            Description:'A coding competition conducted by students of CSI CCE',
            text: 'The second year students of the Computer Science Department of Christ College of Engineering, in association with CODe and CSI, organized a blind coding competition, open to all the students of CCE. The competition was conducted in the computer lab of St. Mary’s Block from 11:30 AM to 12:30 PM on 6 July. A total of 28 students participated in the event and Aneena Joseph Akkara of S4 CSE emerged as the winner, bagging a cash prize of Rs.1000. The event was well coordinated by Niya Ross Shaji, Anagha Sen and Neha Johnson of S4 CSE, along with staff coordinator Ms. Raisa Varghese. The participants had to code two questions with the monitors off within 45 minutes. The event helped students to improve and demonstrate their problem solving and programming skills.',
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