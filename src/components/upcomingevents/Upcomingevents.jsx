import React from 'react'
import './upcomingevents.css';

const Upcomingevents = () => {
  return (
    <div>
      <div className="Upcoming-events">
        <h1 style={{margin:"10px 0 20px 0"}}>
          Upcoming Events
        </h1>
        <iframe className="airtable-embed" src="https://airtable.com/embed/shruxz6yZPQY2gNQx?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" ></iframe>
        {/* <iframe className="airtable-embed" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&src=Y3NpYnJhbmNoQGNjZS5lZHUuaW4&color=%23039BE5"  frameborder="0" scrolling="no"></iframe> */}
      </div>
    </div>
  )
}

export default Upcomingevents