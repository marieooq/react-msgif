import React, { Component } from "react";
import "./Textarea.css";

class Textarea extends Component {
  render() {
    return (
      <textarea
        id="textareaMsg"
        name="user-msg"
        rows="5"
        cols="26"
        value=""
        maxlength="140"
        oninput="displayMessage(this.value)"
        placeholder="Type your message here."
      ></textarea>
    );
  }
}

export default Textarea;
