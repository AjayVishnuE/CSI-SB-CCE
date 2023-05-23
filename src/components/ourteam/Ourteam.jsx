import React from 'react'
import './ourteam.css';
import Staff1 from '../../assets/Team/Remya.jpg';
import Staff2 from '../../assets/Team/jasmine.jpg';
import President from '../../assets/Team/Krishnanand.jpg';
import VicePresident from '../../assets/Team/paveena.jpg';
import Secretary from '../../assets/Team/Amal C P.jpg';
import JointSecretary from '../../assets/Team/Varsha Babu Akkara.jpg';
import Treasurer from '../../assets/Team/Neha.jpg';
import TecnicalLead from '../../assets/Team/Ajay Vishnu.jpg';
import TechnicalMemeber1 from '../../assets/Team/Enric.jpg';
import TechnicalMemeber2 from '../../assets/Team/Roshan Paul.jpg';
import TechnicalMemeber3 from '../../assets/Team/Navneeth.jpg';
import CreativeLead from '../../assets/Team/Surya Kiran.jpg';
import CreativeMember1 from '../../assets/Team/Noah.jpg';
import CreativeMember2 from '../../assets/Team/Amal Manoj.jpg';
import CreativeMember3 from '../../assets/Team/Minna.jpg';
import ContentLead from '../../assets/Team/Varsha Babu Akkara.jpg';
import ContentMember1 from '../../assets/Team/Aastin Wilson.jpg';
import ContentMember2 from '../../assets/Team/Anna Maria.jpg';
import ContentMember3 from '../../assets/Team/Nikhit Kumar.jpg';

const Faculty = [
    {
        img:Staff1,
        name:'Remya K sasi',
        position:'Faculty-in-charge'
    },
    {
        img:'../../assets/Team/jasmine.jpg',
        name:'Jasmine Jolly',
        position:'Faculty-in-charge'
    }
]
const Excom = [
    {
        img:'../../assets/Team/Krishnanand.jpg',
        name:'Krishnanand U',
        position:'President'
    },
    {
        img:'../../assets/Team/paveena.jpg',
        name:'Paveena Peter',
        position:'Vice President'
    },
    {
        img:'../../assets/Team/Amal C P.jpg',
        name:'Amal C P',
        position:'Secretary'
    },
    {
        img:'../../assets/Team/Varsha Babu Akkara.jpg',
        name:'Varsha Babu Akkara',
        position:'Joint Secretary'
    },    
    {
        img:'../../assets/Team/Neha.jpg',
        name:'Neha Johnson',
        position:'Treasurer'
    }
]
const Techteam = [
    {
        img:'../../assets/Team/paveena.jpg',
        name:'Ajay Vishnu E',
        position:'Team Lead'
    },
    {
        img:'../../assets/Team/Amal C P.jpg',
        name:'Enric S Neelamkavil',
        position:'Team Member'
    },
    {
        img:'../../assets/Team/Varsha Babu Akkara.jpg',
        name:'Roshan Paul',
        position:'Team Member'
    },    
    {
        img:'../../assets/Team/Neha.jpg',
        name:'Navneeth K U',
        position:'Team Member'
    }
]

const Ourteam = () => {
  return (
    <div>
        <div className="our-team">
        <h1>Our Team</h1>
        <h2>Executive Committee</h2>
        <div className="faculty-in-charge">
        {
            Faculty.map((item) => {
                return(
                    <div className="ex-com-member">
                        <img className="ex-com-member-img" src={item.img} alt=""/>
                        <h3>{item.name}</h3>
                        <p>{item.position}</p>
                    </div>
                )
            })
        }
        </div>

        <div className="ex-com">
        {
            Excom.map((item) => {
                return(
                    <div className="ex-com-member">
                        <img className="ex-com-member-img" src={item.img} alt=""/>
                        <h3>{item.name}</h3>
                        <p>{item.position}</p>
                    </div>
                )
            })
        }
        </div>
        <h2>Technical Team</h2>
        <div className="technical-team">
        {
            Techteam.map((item) => {
                return(
                    <div className="team-member">
                        <img className="team-member-img" src={item.img} alt=""/>
                        <h3>{item.name}</h3>
                        <p>{item.position}</p>
                    </div>
                )
            })
        }
        </div>
        <h2>Creative Team</h2>
        <div className="technical-team">
            <div className="team-member">
                <img className="team-member-img" src={CreativeLead} alt=""/>
                <h3>Surya Kiran P M</h3>
                <p>Team Lead</p>
            </div>
            <div className="team-member">
                <img className="team-member-img" src={CreativeMember1} alt=""/>
                <h3>Noah Johny</h3>
                <p>Team Member</p>
            </div>
            <div className="team-member">
                <img className="team-member-img" src={CreativeMember2} alt=""/>
                <h3>Amal Manoj</h3>
                <p>Team Member</p>
            </div>
            <div className="team-member">
                <img className="team-member-img" src={CreativeMember3} alt=""/>
                <h3>Minna Elizabeth Martin</h3>
                <p>Team Member</p>
            </div>
        </div>
        <h2>Content Team</h2>
        <div className="technical-team">
            <div className="team-member">
                <img className="team-member-img" src={ContentLead} alt=""/>
                <h3>Varsha Babu Akkara</h3>
                <p>Team Lead</p>
            </div>
            <div className="team-member">
                <img className="team-member-img" src={ContentMember1} alt=""/>
                <h3>Aastin Wilson</h3>
                <p>Team Member</p>
            </div>
            <div className="team-member">
                <img className="team-member-img" src={ContentMember2} alt=""/>
                <h3>Anna Maria Rony</h3>
                <p>Team Member</p>
            </div>
            <div className="team-member">
                <img className="team-member-img" src={ContentMember3} alt=""/>
                <h3>Nikhit Kumar N S</h3>
                <p>Team Member</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Ourteam