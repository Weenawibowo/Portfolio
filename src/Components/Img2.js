import "./Img2Style.css";

import React, { Component } from 'react';

class Img2 extends Component {
    render() {
        return (
            <div className="img2">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
                    
            </div>
          )
    }
  
}

export default Img2