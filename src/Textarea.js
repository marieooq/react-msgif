import React, { Component } from "react";
import "./Textarea.css";

class Textarea extends Component {
  handleInput = e => {
    console.log("inside handleInput");
    this.props.onTextAreaChange(e);
  };

  render() {
    return (
      <textarea
        id="textareaMsg"
        name="user-msg"
        rows="5"
        cols="26"
        value={this.props.textAreaVal}
        maxLength="140"
        onChange={this.handleInput}
        placeholder="Type your message here."
      ></textarea>
    );
  }
}

export default Textarea;
