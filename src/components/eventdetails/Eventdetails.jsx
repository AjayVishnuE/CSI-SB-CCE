import React, { useState } from 'react'
import './eventdetails.css';
import { Link } from 'react-router-dom';

function Eventdetails (title,img,eventdetails) {
  return (
    <div>
      <div className="Eventdetails">
        <h1>_bootup</h1>
        <img src={img} alt="event-img"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, mollitia. Ea, repellendus amet. Consequuntur, est veniam labore asperiores adipisci magni maiores similique culpa possimus, explicabo saepe corporis illo id iure?</p>
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