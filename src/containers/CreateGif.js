import React, { Component } from "react";
import PushBtn from "../components/PushBtn";
import "../components/PushBtn.css";

class CreateGif extends Component {
  render() {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <PushBtn
        id={this.props.id}
        class={this.props.class}
        action={this.props.action}
        name={this.props.name}
      />
    );
  }
}

export default CreateGif;
