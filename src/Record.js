import React, { Component } from "react";
import PushBtn from "./PushBtn";
import "./PushBtn.css";

class Record extends Component {
  render() {
    return <PushBtn id="record-btn" action="startRec()" name="Record" />;
  }
}

export default Record;
