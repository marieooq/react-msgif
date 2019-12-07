import React, { Component } from "react";
import PushBtn from "../components/PushBtn";
import "../components/PushBtn.css";

class Record extends Component {
  startRec = e => {
    if (e.target.textContent === "Record") {
      //change state.isRec to true
      this.props.startRec();

      //display "Recording..." while recording
      e.target.textContent = "Recording...";
      e.target.id = "recording-btn";
      e.target.classList.add("recording");
      e.target.classList.remove("default");
      e.target.classList.remove("invalid");

      //erase the screen
      this.props.changeTextAreaVal("");

      //shows the reset button
      const resetBtn = document.getElementById("reset-btn");
      resetBtn.classList.remove("hide");
    } else {
      return;
    }
  };

  render() {
    return (
      <PushBtn
        id="record-btn"
        class="btn-push default"
        action={this.startRec}
        name="Record"
      />
    );
  }
}

export default Record;
