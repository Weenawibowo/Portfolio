import React from 'react';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer';
import Img2 from '../Components/Img2.js';

const About = () => {
  return (
    <div>
      <Navbar />
      <Img2 heading="ABOUT" text="A CS student at UBC Vancouver"/>
      <Footer />
    </div>
  )
}

export default About