import React, { Component } from "react";
import Screen from "./components/Screen";
import ScreenSize from "./containers/ScreenSize";
import ModeContainer from "./components/ModeContainer";
import TextareaContainer from "./components/TextareaContainer";
import Record from "./containers/Record";
import Reset from "./containers/Reset";
import CreateGif from "./containers/CreateGif";
import Download from "./components/Download";
// import Loading from "./Loading";
import html2canvas from "html2canvas";
/* eslint-disable no-undef */
// import GIFEncoder from "./GIFEncoder";
import "./App.css";
import encode64 from "./b64";
import store from "./reducers/store";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.frames = [];
    this.captureCount = 0;
    this.createGifCount = 0;
    this.state = {
      recordingFlg: false,
      encoder: "",
      outputScreenStatus: "",
      gifAnimation: "",
      isComposing: false
    };
  }

  // displayScreen;
  textArea;
  outputScreen;

  componentDidMount() {
    this.textArea = document.getElementById("textareaMsg");
    this.outputScreen = document.getElementById("output");

    //initiate mode
    this.setState({ mode: store.getState().mode });
  }

  startRec = e => {
    if (e.target.textContent === "Record") {
      // this.setState({ isRec: true });
      this.props.startRec();

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

  reset = e => {
    console.log("here");
    console.log(e);
    //before creating a gif animation
    if (this.captureCount > 0 && this.createGifCount === 0) {
      //hide the create gif button
      const createGifBtn = document.getElementById("createGif-btn");
      createGifBtn.classList.add("hide");
      this.captureCount = 0;
    }

    //after creating a gif animation
    if (this.createGifCount > 0) {
      //hide the create gif button and makes it valid
      const createGifBtn = document.getElementById("createGif-btn-pushed");
      createGifBtn.id = "createGif-btn";
      createGifBtn.classList.add("default");
      createGifBtn.classList.add("hide");
      createGifBtn.classList.remove("invalid");
      this.createGifCount = 0;

      //delete the output image
      const outputImg = document.getElementById("outputImg");
      outputImg.parentNode.removeChild(outputImg);

      this.outputScreen.style.padding = "30px 60px";
      this.outputScreen.style.border = "dashed 5px rgba(204, 204, 204, 0.7)";

      //hide the download button
      const donwloadBtn = document.getElementById("ssgif");
      donwloadBtn.classList.add("hide");

      //reset captureCount
      this.captureCount = 0;
    }

    //hide the reset button itself
    e.target.classList.add("hide");

    //reset values
    // this.setState({ isRec: false });
    this.props.endRec();
    this.props.changeTextAreaVal("");
    // this.setState({ textAreaVal: "" });
    this.frames = [];

    //shows the record button
    const recordingBtn = document.getElementById("recording-btn");
    recordingBtn.textContent = "Record";
    recordingBtn.classList.remove("recording");
    recordingBtn.classList.add("default");
    recordingBtn.id = "record-btn";
  };

  ////CAPTURE/////////////////////////////////////////////////////

  captureScreen = async () => {
    console.log("here");
    if (this.captureCount === 0) {
      //shows the create gif button
      const createGifBtn = document.getElementById("createGif-btn");
      createGifBtn.classList.remove("hide");
      this.captureCount++;
    }

    //capture the canvas
    const canvas = await html2canvas(document.getElementById("display-screen"));
    const imgData = canvas.toDataURL();
    const imgTag = document.createElement("img");
    imgTag.src = `${imgData}`;
    this.frames.push(imgTag);
  };

  ////CREATE GIF//////////////////////////////////////////////////
  switchLoading = status => {
    if (status === "start") {
      this.setState({ outputScreenStatus: "loading" });
    } else if (status === "stop") {
      this.setState({ outputScreenStatus: "" });
    }
  };

  createGIF = async () => {
    if (this.createGifCount === 0) {
      //make the createGIF button invalid
      const createGifBtn = document.getElementById("createGif-btn");
      createGifBtn.id = "createGif-btn-pushed";
      createGifBtn.classList.remove("default");
      createGifBtn.classList.add("invalid");
      this.createGifCount++;

      //display "creating..."
      const recordBtn = document.getElementsByClassName("recording")[0];
      recordBtn.textContent = "Creating...";

      //start loading
      this.switchLoading("start");

      await this.captureScreen();

      //get canvas
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      //initiate GiTEncoder
      const encoder = new GIFEncoder();
      encoder.setRepeat(0); //infinite loop
      encoder.setDelay(100); //delay

      const proseccing = () => {
        return new Promise(resolve => {
          encoder.start();

          //fit the size of canvas to the first image
          canvas.width = this.frames[0].naturalWidth;
          canvas.height = this.frames[0].naturalHeight;

          //draw all the images to the canvas
          for (let frame_no = 0; frame_no < this.frames.length; frame_no++) {
            ctx.drawImage(this.frames[frame_no], 0, 0);
            encoder.addFrame(ctx);
          }

          //create a gif animation
          encoder.finish();

          resolve("ok");
        });
      };

      await proseccing();

      //stop loading
      this.switchLoading("stop");

      this.setState({
        gifAnimation:
          "data:image/gif;base64," + encode64(encoder.stream().getData())
      });

      const img = document.createElement("img");
      img.id = "outputImg";
      img.src = this.state.gifAnimation;
      this.outputScreen.style.padding = 0;
      this.outputScreen.style.border = "none";
      this.outputScreen.appendChild(img);

      //display "Done!"
      recordBtn.textContent = "Done!";
      recordBtn.classList.remove("recording");
      recordBtn.classList.add("invalid");

      //shows a download button
      const donwloadBtn = document.getElementById("ssgif");
      donwloadBtn.classList.remove("hide");
    } else {
      return;
    }
  };

  render() {
    return (
      <div id="container">
        <div id="inner">
          <div id="left">
            <div id="left-left">
              <Screen id="display-screen" status="" />
              <ScreenSize />
              <ModeContainer />
            </div>
            <div id="left-right">
              <TextareaContainer captureScreen={this.captureScreen} />
              <div className="btn-wrapper">
                <Reset
                  id="reset-btn"
                  class="btn-push default hide"
                  action={this.reset}
                  name="Reset"
                />
                <Record
                  id="record-btn"
                  class="btn-push default"
                  action={this.startRec}
                  name="Record"
                />
                <CreateGif
                  id="createGif-btn"
                  class="btn-push default hide"
                  action={this.createGIF}
                  name="Create GIF"
                />
              </div>
            </div>
          </div>

          <div id="right">
            <Screen id="output" status={this.state.outputScreenStatus} />
            <Download href={this.state.gifAnimation} />
          </div>
        </div>
      </div>
    );
  }
}
