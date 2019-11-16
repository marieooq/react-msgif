import React, { Component } from "react";
import "./Screen.css";

class Screen extends Component {
  render() {
    return <div className="screen" id={this.props.id}></div>;
  }
}

export default Screen;
