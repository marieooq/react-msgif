import React, { Component } from "react";
import PushBtn from "../components/PushBtn";
import store from "../reducers/store";
import "../components/PushBtn.css";

class RecordAndReset extends Component {
  state = {
    id: "record-btn",
    class: "btn-push default",
    name: "Record"
  };

  outputScreen;
  componentDidMount() {
    this.outputScreen = document.getElementById("output");
  }

  componentDidUpdate(prevState) {
    if (store.getState().isRec !== prevState.isRec) {
      if (!store.getState().isRec) {
        this.setState({
          id: "record-btn",
          class: "btn-push default",
          action: this.startRec,
          name: "Record"
        });
      } else {
        this.setState({
          id: "reset-btn",
          class: "btn-push default",
          action: this.startRec,
          name: "Reset"
        });
      }
    }
  }

  reset = e => {
    //erase the textarea
    const textAreaScreen = document.getElementById("textareaMsg");
    textAreaScreen.textContent = "";

    //before creating a gif animation
    if (
      store.getState().captureCount.counter > 0 &&
      store.getState().createGifCount.counter === 0
    ) {
      //hide the create gif button
      const createGifBtn = document.getElementById("createGif-btn");
      createGifBtn.classList.add("hide");

      //reset captureCount
      this.props.captureCountDecrement();
    }

    //after creating a gif animation
    if (store.getState().createGifCount.counter > 0) {
      //hide the create gif button and makes it valid
      const createGifBtn = document.getElementById("createGif-btn-pushed");
      createGifBtn.id = "createGif-btn";
      createGifBtn.classList.add("default");
      createGifBtn.classList.add("hide");
      createGifBtn.classList.remove("invalid");

      //reset createGifCount
      this.props.createGifCountDecrement();

      //delete the output image
      const outputImg = document.getElementById("outputImg");
      outputImg.parentNode.removeChild(outputImg);

      this.outputScreen.style.padding = "30px 60px";
      this.outputScreen.style.border = "dashed 5px rgba(204, 204, 204, 0.7)";

      //hide the download button
      const donwloadBtn = document.getElementById("ssgif");
      donwloadBtn.classList.add("hide");

      //hide the output screen
      this.outputScreen.classList.remove("output-show");
      this.outputScreen.classList.add("output-hide");

      //reset captureCount
      this.props.captureCountDecrement();

      //erase the screen
      this.props.changeMode("note");

      //hide the div which has down-to-here-hide class
      //so that the user can't scroll down to the download button
      const downToHere = document.getElementById("down-to-here");
      downToHere.classList.remove("down-to-here-show");
      downToHere.classList.add("down-to-here-hide");
    }

    // this.setState({ isRec: false });
    this.props.endRec();
    this.props.changeTextAreaVal("");
    // this.setState({ textAreaVal: "" });
    this.props.deleteAllFromFrames();
  };

  startRec = e => {
    //go to top
    window.scrollTo(0, 0);

    e.preventDefault();
    const textAreaScreen = document.getElementById("textareaMsg");
    textAreaScreen.textContent = "";
    if (!store.getState().isRec) {
      //when the RECORD button has been pushed

      //change state.isRec to true
      this.props.startRec();

      //call a snackbar notifies it's recording
      this.props.setNotification("success", "Recording now...");

      //close the snackbar notifies it's resetting
      // this.props.closeNotification("warning", "Reset the setting.");
    } else {
      //when the RESET button has been pushed

      //change state.isRec to false
      this.props.endRec();

      //close the snackbar notifies it's recording
      // this.props.closeNotification("success", "Recording now...");

      //call a snackbar notifies it's resetting
      this.props.setNotification("warning", "Reset the setting.");

      this.reset();
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

export default RecordAndReset;
