import "./ImgStyle.css"; 

import React from "react";
import IntroImg from "../assets/background.jpg";
import { Link } from "react-router-dom";

const Img = () => {
  return (
    <div className="Img">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Welcome!</p>
            <h1>Software Engineer in the making</h1>
            <div>
                <Link to="/project"
                className="btn">Projects</Link>
                <Link to="/contact"
                className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  );
};

export default Img;