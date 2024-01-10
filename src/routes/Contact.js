import React from 'react';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer';
import Img2 from '../Components/Img2.js';
import Form from '../Components/Form.js';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <Img2 heading="CONTACT" text="Let's have a coffee chat?"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact