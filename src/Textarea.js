import React, { Component } from "react";
import "./Textarea.css";

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  displayMessage = e => {};

  render() {
    return (
      <textarea
        id="textareaMsg"
        name="user-msg"
        rows="5"
        cols="26"
        value=""
        maxlength="140"
        onInput={this.displayMessage}
        placeholder="Type your message here."
      ></textarea>
    );
  }
}

export default Textarea;
