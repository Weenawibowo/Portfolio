import React from 'react';
import Navbar from '../Components/Navbar.js';
import Img from '../Components/Img.js'; 
import Footer from '../Components/Footer';
import Work from '../Components/Work.js';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Img />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
