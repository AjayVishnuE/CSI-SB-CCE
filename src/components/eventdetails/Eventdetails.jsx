import React from 'react'
import './eventdetails.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Eventdetails = ({ dataset }) => {
  const data=useLocation()
  console.log(data)
  return (
    <div>
      <div className="Eventdetails">
        <h1>{data.state.data.title}</h1>
        <p>{data.state.data.Date}</p>
        <img src={data.state.data.Eventimg} alt="event-img"/>
        <p>{data.state.data.text}</p>
        <br/>

        <div className="event-btn-container">
        <Link to="/Events">
          <div className="event-btn">
            <p>Go to Events page</p>        
          </div>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Eventdetails