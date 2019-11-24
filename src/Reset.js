import React, { Component } from "react";
import PushBtn from "./PushBtn";
import "./PushBtn.css";

class Reset extends Component {
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

export default Reset;
