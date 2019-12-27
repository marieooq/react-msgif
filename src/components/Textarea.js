import React, { Component } from "react";
import store from "../reducers/store";
import "./Textarea.css";

class Textarea extends Component {
  displayMessage = async e => {
    if (store.getState().isRec) {
      await this.props.captureScreen();
    } else {
      //when it's creating GIF show a snap bar
      this.props.setNotification(
        "warning",
        "It's a demo until you push the Record button."
      );
    }
  };

  setTextAreaVal = e => {
    this.props.changeTextAreaVal(e.target.value);
    this.displayMessage();
  };

  render() {
    return (
      <div
        id="textareaMsg"
        contenteditable="true"
        onChange={this.displayMessage()}
      ></div>
    );
  }
}

export default Textarea;
