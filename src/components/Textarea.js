import React, { Component } from "react";
import store from "../reducers/store";
import "./Textarea.css";

class Textarea extends Component {
  displayScreen;

  componentDidMount() {
    this.displayScreen = document.getElementById("display-screen");
  }

  componentDidUpdate(prevState) {
    if (store.getState().textAreaVal !== prevState.textAreaVal) {
      this.displayScreen.textContent = store.getState().textAreaVal;
    }
  }

  displayMessage = async e => {
    if (store.getState().isRec) {
      await this.props.captureScreen();
    } else {
      console.log("before recording.");
    }

    if (this.displayScreen.className !== "") {
      this.removeClass();
    }
  };

  removeClass = () => {
    const isClassName = this.displayScreen.className;
    if (isClassName.includes("coloredText")) {
      this.displayScreen.classList.remove("coloredText");
    }
    if (isClassName.includes("textShadow")) {
      this.displayScreen.classList.remove("textShadow");
    }
  };

  setTextAreaVal = e => {
    this.props.changeTextAreaVal(e.target.value);
    this.displayMessage();
  };

  render() {
    return (
      <div>
        <textarea
          id="textareaMsg"
          name="user-msg"
          rows="5"
          cols="26"
          value={store.getState().textAreaVal}
          maxLength="140"
          onChange={this.setTextAreaVal}
          placeholder="Type your message here."
        ></textarea>
      </div>
    );
  }
}

export default Textarea;
