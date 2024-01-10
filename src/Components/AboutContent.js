import "./AboutContentStyles.css";
import aboutimg from "../assets/ubc id card.jpeg"

import React from 'react';
import { Link } from "react-router-dom"; 

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a second-year Computer Science student at UBC Vancouver. I hold a diploma in Supply Chain Management from SAIT and bring over three years of experience in the field of Supply Chain Management. Currently, I am pursuing my interests in Software Engineering, aiming to integrate my knowledge of Business and Technology for future endeavors.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
                </Link>

        </div>
        <div className="right">
            <div className="img-container">
                <div className="img3">
                    <img src={aboutimg} className="img" alt="true"></img>
                </div>

            </div>

        </div>
    </div>
  )
}

export default AboutContent;