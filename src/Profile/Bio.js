import React, { Component } from "react";
import img from "./Images/myphoto.jpg";

class Bio extends Component {
  render() {
    const myStyle = { color: "violet", fontSize: "2rem", margin: "10px" };
    return (
      <div className="media">
        <img
          src={img}
          className="myphoto"
          alt="Myphoto"
          style={{ width: "20%", height: "20%", borderRadius: "50%" }}
        />
        <div className="body">
          <span style={myStyle}>Age: 27</span> {this.props.Age} <br />
          <span style={myStyle}>Gender: Femmel</span>
          {this.props.Gender}
          <br />
          <span style={myStyle}>Bio: Beauty, Fashion, Travel</span>
        </div>
      </div>
    );
  }
}

export default Bio;
