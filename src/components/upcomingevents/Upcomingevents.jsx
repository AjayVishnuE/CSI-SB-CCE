import React from 'react'
import './upcomingevents.css';

const Upcomingevents = () => {
  return (
    <div>
      <div class="Upcoming-events">
        <h1 style={{margin:"10px 0 20px 0"}}>
          Upcoming Events
        </h1>
        <iframe class="airtable-embed" src="https://airtable.com/embed/shruxz6yZPQY2gNQx?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" ></iframe>
      </div>
    </div>
  )
}

export default Upcomingevents