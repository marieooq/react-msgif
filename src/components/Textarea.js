import React, { Component } from "react";
import store from "../reducers/store";
import "./Textarea.css";
import { log } from "handlebars";

class Textarea extends Component {
  conponentDidUpdate() {}

  displayMessage = async () => {
    console.log("inside displayMessage in Textarea.js");
    if (store.getState().isRec) {
      const textAreaScreen = document.getElementById("textareaMsg");
      textAreaScreen.textContent = "";
      textAreaScreen.addEventListener("input", async () => {
        console.log("input something!");
        await this.props.captureScreen();
      });
    } else {
      //when it's creating GIF show a snap bar
      this.props.setNotification(
        "warning",
        "It's a demo until you push the Record button."
      );
    }
  };

  handleChange = e => {
    console.log("handleChange");
  };

  render() {
    return (
      <div
        id="textareaMsg"
        contentEditable="true"
        onChange={this.displayMessage()}
      ></div>
    );
  }
}

export default Textarea;
