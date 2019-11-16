import React, { Component } from "react";
import PushBtn from "./PushBtn";
import "./PushBtn.css";

class CreateGif extends Component {
  render() {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <PushBtn id="createGif-btn" action="createGIF()" name="Create GIF" />
    );
  }
}

export default CreateGif;
