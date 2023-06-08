import React from 'react'
import './ourteam.css';
import Staff1 from '../../assets/Team/Remya.png';
import Staff2 from '../../assets/Team/Jasmine.png';
import President from '../../assets/Team/Krishnanand.jpg';
import VicePresident from '../../assets/Team/paveena.jpg';
import Secretary from '../../assets/Team/Amal C P.jpg';
import JointSecretary from '../../assets/Team/varsha.jpg';
import Treasurer from '../../assets/Team/Neha.jpg';
import TecnicalLead from '../../assets/Team/Ajay Vishnu.jpg';
import TechnicalMemeber1 from '../../assets/Team/Enric.jpg';
import TechnicalMemeber2 from '../../assets/Team/Roshan Paul.jpg';
import TechnicalMemeber3 from '../../assets/Team/Navneeth.jpg';
import CreativeLead from '../../assets/Team/Surya Kiran.jpg';
import CreativeMember1 from '../../assets/Team/Noah.jpg';
import CreativeMember2 from '../../assets/Team/Amal Manoj.jpg';
import CreativeMember3 from '../../assets/Team/Minna.jpg';
import ContentLead from '../../assets/Team/varsha.jpg';
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
        img:Staff2,
        name:'Jasmine Jolly',
        position:'Faculty-in-charge'
    }
]
const Excom = [
    {
        img:President,
        name:'Krishnanand U',
        position:'President'
    },
    {
        img:VicePresident,
        name:'Paveena Peter',
        position:'Vice President'
    },
    {
        img:Secretary,
        name:'Amal C P',
        position:'Secretary'
    },
    {
        img:JointSecretary,
        name:'Varsha Babu Akkara',
        position:'Joint Secretary'
    },    
    {
        img:Treasurer,
        name:'Neha Johnson',
        position:'Treasurer'
    }
]
const Techteam = [
    {
        img:TecnicalLead,
        name:'Ajay Vishnu E',
        position:'Technical Lead'
    },
    {
        img: TechnicalMemeber1,
        name:'Enric S Neelamkavil',
        position:'Team Member'
    },
    {
        img: TechnicalMemeber2,
        name:'Roshan Paul',
        position:'Team Member'
    },    
    {
        img: TechnicalMemeber3,
        name:'Navaneeth K U',
        position:'Team Member'
    }
]
const CreativeTeam = [
    {
        img:CreativeLead,
        name:'Surya Kiran P M',
        position:'Creative Lead'
    },
    {
        img: CreativeMember1,
        name:'Noah Johny',
        position:'Team Member'
    },
    {
        img: CreativeMember2,
        name:'Amal Manoj',
        position:'Team Member'
    },    
    {
        img: CreativeMember3,
        name:'Minna Elizabeth Martin',
        position:'Team Member'
    }
]
const ContentTeam = [
    {
        img:ContentLead,
        name:'Varsha Babu Akkara',
        position:'Content Lead'
    },
    {
        img: ContentMember1,
        name:'Aastin Wilson',
        position:'Team Member'
    },
    {
        img: ContentMember2,
        name:'Anna Maria Rony',
        position:'Team Member'
    },    
    {
        img: ContentMember3,
        name:'Nikhit Kumar N S',
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
        {
            CreativeTeam.map((item) => {
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
        <h2>Content Team</h2>
        <div className="technical-team">
        {
            ContentTeam.map((item) => {
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
    </div>
    </div>
  )
}

export default Ourteam