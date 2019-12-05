import React, { Component } from "react";
import "./Textarea.css";

class Textarea extends Component {
  // handleInput = e => {
  //   this.props.onTextAreaChange(e);
  // };

  state = {
    textAreaVal: ""
  };

  displayScreen;

  componentDidMount() {
    this.displayScreen = document.getElementById("display-screen");
  }

  componentDidUpdate(prevState) {
    if (this.state.textAreaVal !== prevState.textAreaVal) {
      this.displayScreen.textContent = this.state.textAreaVal;
    }
  }

  displayMessage = async e => {
    // document.addEventListener("keydown", e => {
    //   console.log(`keydown: ${e}`);
    // });
    // document.addEventListener("keypress", e => {
    //   //
    //   //日本語の場合はkeypressイベントが発動しない
    //   console.log(`keypress: ${e}`);
    // });
    // document.addEventListener("keyup", e => {
    //   console.log(`keyup: ${e}`);
    // });
    this.setState({ textAreaVal: e.target.value });
    if (this.props.isRec) {
      await this.captureScreen();
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

  render() {
    return (
      <textarea
        id="textareaMsg"
        name="user-msg"
        rows="5"
        cols="26"
        value={this.state.textAreaVal}
        maxLength="140"
        onChange={this.displayMessage}
        placeholder="Type your message here."
      ></textarea>
    );
  }
}

export default Textarea;
