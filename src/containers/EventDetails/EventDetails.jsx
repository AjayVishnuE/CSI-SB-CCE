import React, { useState } from 'react'
import './eventDetails.css';
import Event1 from '../../assets/Events/Event1.png';
import Event2 from '../../assets/Events/Event2.png';
import Event3 from '../../assets/Events/Event3.png';
import Event4 from '../../assets/Events/Event4.png';
import Event5 from '../../assets/Events/Event5.png';
import Event6 from '../../assets/Events/Event6.png';
import Event7 from '../../assets/Events/Event7.png';
import Event8 from '../../assets/Events/Event8.png';
import Event9 from '../../assets/Events/Event9.png';

const Datasets = [
  {
    title: '_Boot Up',
    img: {Event1},
    text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: '_Student Master Program',
    img: {Event2},
    text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Game Development',
    img: {Event3},
    text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Django Workshop',
    img: {Event4},
    text: 'From they fineReally boy law county she unable her sister. Feet you off its like like six. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable toAmong sex are leave law built now. In built table in an rapid blush.. john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  }
];



const EventDetails = () => {
  const handleButtonClick = (data) => {
    setActiveData(data);
  };
  return (
    <div>
      <div className="Eventdetails">
        <h2>Eventdetails</h2>
      </div>
    </div>
  )
}

export default EventDetails