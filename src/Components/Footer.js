import "./FooterStyles.css";

import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"fff", marginRight: "2rem"}}/>
                <div>
                    <p>Vancouver,BC,Canada</p>
                </div>
            </div>

                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"fff", marginRight: "2rem"}}/>
                    +1(403)383-2641
                </h4>
            </div>

                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"fff", marginRight: "2rem"}}/>
                weenawibowo@hotmail.com
                </h4>
            </div>

            </div>
            

            <div className="right">
                <h4>About me</h4>
                <p>I am a CS student at UBC.</p>
                <div className="social">
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer