import React, { Component } from "react";
import store from "../reducers/store";
import "./Textarea.css";

class Textarea extends Component {
  textAreaScreen;
  componentDidMount() {
    this.textAreaScreen = document.getElementById("textareaMsg");

    this.textAreaScreen.addEventListener("input", async () => {
      if (store.getState().isRec) {
        await this.props.captureScreen();
      } else {
        //when it's creating GIF show a snap bar
        this.props.setNotification(
          "warning",
          "It's a demo unless you push the Record button."
        );

        this.props.changeTextAreaVal(this.textAreaScreen.textContent);
      }
    });
  }

  render() {
    return <div id="textareaMsg" contentEditable="true"></div>;
  }
}

export default Textarea;
