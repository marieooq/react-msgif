import React, { Component } from "react";
import PushBtn from "./PushBtn";
import "./PushBtn.css";

class Download extends Component {
  render() {
    return (
      <div id="download">
        <PushBtn id="download-btn" action="" name="Download" />
      </div>
    );
  }
}

export default Download;
