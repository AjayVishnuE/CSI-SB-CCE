import React from 'react'
import './gallery.css';
import img1 from '../../assets/Gallery/img1.png';
import img2 from '../../assets/Gallery/img2.png';
import img3 from '../../assets/Gallery/img3.png';
import img4 from '../../assets/Gallery/img4.png';
import img5 from '../../assets/Gallery/img5.png';
import img6 from '../../assets/Gallery/img6.png';
import img7 from '../../assets/Gallery/img7.png';
import img8 from '../../assets/Gallery/img8.png';


const Gallery = () => {
  return (
    <div>
      <div className="gallery">
        <h2>Gallery</h2>
        <div class="gallery-imgs">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Gallery