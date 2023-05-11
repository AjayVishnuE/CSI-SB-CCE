import React from 'react'
import './gallerypage.css';

import { Navbar,Gallery,Footer } from '../../components';

const GalleryPage = () => {
  return (
    <div>
      <Navbar/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default GalleryPage