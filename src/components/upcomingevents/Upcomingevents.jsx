import React from 'react'
import './upcomingevents.css';
import { useEffect } from 'react';

const Upcomingevents = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[]);
  return (
    <div>
      <div className="Upcoming-events">
        <h1 style={{margin:"10px 0 20px 0"}}>
          Upcoming Events
        </h1>
        <iframe className="airtable-embed" src="https://airtable.com/embed/shruxz6yZPQY2gNQx?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" ></iframe>
      </div>
    </div>
  )
}

export default Upcomingevents