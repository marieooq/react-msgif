import React, { Component } from "react";
import PushBtn from "../components/PushBtn";
import store from "../reducers/store";
import "../components/PushBtn.css";

class Record extends Component {
  state = {
    id: "record-btn",
    class: "btn-push default",
    name: "Record"
  };

  // startRec = e => {
  //   if (e.target.textContent === "Record") {
  //     //change state.isRec to true
  //     this.props.startRec();

  //     //display "Recording..." while recording
  //     e.target.textContent = "Recording...";
  //     e.target.id = "recording-btn";
  //     e.target.classList.add("recording");
  //     e.target.classList.remove("default");
  //     e.target.classList.remove("invalid");

  //     //erase the screen
  //     this.props.changeTextAreaVal("");

  //     //shows the reset button
  //     const resetBtn = document.getElementById("reset-btn");
  //     resetBtn.classList.remove("hide");
  //   } else {
  //     return;
  //   }
  // };

  componentDidUpdate(prevState) {
    if (store.getState().isRec !== prevState.isRec) {
      if (!store.getState().isRec) {
        this.setState({
          id: "record-btn",
          class: "btn-push default",
          action: this.startRec,
          name: "Record"
        });

        //erase the screen
        this.props.changeTextAreaVal("");
      } else {
        this.setState({
          id: "reset-btn",
          class: "btn-push default",
          action: this.startRec,
          name: "Reset"
        });

        //erase the screen
        this.props.changeTextAreaVal("");
      }
    }
  }

  startRec = e => {
    e.preventDefault();
    if (!store.getState().isRec) {
      console.log(store.getState().isRec);
      //change state.isRec to true
      this.props.startRec(!store.getState().isRec);

      // this.setState({
      //   id: "record-btn",
      //   class: "btn-push default",
      //   action: this.startRec,
      //   name: "Record"
      // });

      // //erase the screen
      // this.props.changeTextAreaVal("");
    } else {
      console.log(store.getState().isRec);
      //change state.isRec to false
      this.props.endRec();

      //   this.setState({
      //     id: "reset-btn",
      //     class: "btn-push default",
      //     action: this.startRec,
      //     name: "Reset"
      //   });

      //   //erase the screen
      //   this.props.changeTextAreaVal("");
    }
  };

  render() {
    return (
      <PushBtn
        id={this.state.id}
        class={this.state.class}
        action={this.startRec}
        name={this.state.name}
      />
    );
  }
}

export default Record;
