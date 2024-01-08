import React from 'react';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer';
import Img2 from '../Components/Img2.js';
import Work from '../Components/Work.js';


const Project = () => {
  return (
    <div>
      <Navbar />
      <Img2 heading="PROJECTS" text="My most recent works" />
      <Work />
      <Footer />
    </div>
  )
}

export default Project