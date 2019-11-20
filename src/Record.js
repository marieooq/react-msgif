import React, { Component } from "react";
import PushBtn from "./PushBtn";
import "./PushBtn.css";

class Record extends Component {
  render() {
    return (
      <PushBtn
        id={this.props.id}
        action={this.props.action}
        name={this.props.name}
      />
    );
  }
}

export default Record;
