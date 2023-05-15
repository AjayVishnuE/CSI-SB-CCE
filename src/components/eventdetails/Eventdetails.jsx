import React from 'react'
import './eventdetails.css';
import { Link } from 'react-router-dom';

const Eventdetails = ({ dataset }) => {
  return (
    <div>
      <div className="Eventdetails">
        <h1>{dataset.title}</h1>
        <img src={dataset.img} alt="event-img"/>
        <p>{dataset.text}</p>
        <br/>
        <h2>other events</h2>

        <div className="event-btn-container">
        <Link to="/Events">
          <div className="event-btn">
            <p>Go back to Events page</p>        
          </div>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Eventdetails