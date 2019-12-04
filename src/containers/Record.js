import React, { Component } from "react";
import PushBtn from "../components/PushBtn";
import "../components/PushBtn.css";

class Record extends Component {
  render() {
    return (
      <PushBtn
        id={this.props.id}
        class={this.props.class}
        action={this.props.action}
        name={this.props.name}
      />
    );
  }
}

export default Record;
