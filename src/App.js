import React, { Component } from "react";
import Screen from "./Screen";
import Mode from "./Mode";
import Textarea from "./Textarea";
import Record from "./Record";
import CreateGif from "./CreateGif";
import Download from "./Download";
import html2canvas from "html2canvas";
/* eslint-disable no-undef */
// import GIFEncoder from "./GIFEncoder";
import "./App.css";
import encode64 from "./b64";

class App extends Component {
  constructor(props) {
    super(props);
    this.frames = [];
    this.state = {
      isRec: false,
      recordingFlg: false,
      gifAnimation: "",
      encoder: "",
      textAreaVal: "",
      mode: "note"
    };
  }

  displayScreen;
  textArea;
  // outputScreen;

  componentDidMount() {
    this.displayScreen = document.getElementById("display-screen");
    this.textArea = document.getElementById("textareaMsg");
    // this.outputScreen = document.getElementById("output");
  }

  componentDidUpdate(prevState) {
    if (this.state.textAreaVal !== prevState.textAreaVal) {
      this.updateDisplay();
    }
  }

  displayMessage = e => {
    this.setState({ textAreaVal: e.target.value });

    if (this.state.isRec) {
      this.captureScreen();
    }

    if (this.displayScreen.className !== "") {
      this.removeClass();
    }

    this.switchMode(this.state.mode);
  };

  isMode = e => {
    console.log(e);
    this.setState({ mode: e.target.value });
    console.log(`mode: ${this.state.mode}`);
  };

  startRec = e => {
    if (e.target.textContent === "Record") {
      e.target.textContent = "Stop";
      this.setState({ isRec: true });
      this.setState({ textAreaVal: "" });
    } else {
      e.target.textContent = "Recrod";
      this.setState({ isRec: false });
    }
  };

  updateDisplay = () => {
    this.displayScreen.textContent = this.state.textAreaVal;
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

  changeTextColor = mode => {
    this.displayScreen.classList.add("coloredText");
    const coloredTextClass = document.getElementsByClassName("coloredText");

    for (let i = 0; i < coloredTextClass.length; i++) {
      switch (mode) {
        case "developer":
          coloredTextClass[i].style.color = "#00c200";
          break;

        case "neon":
          coloredTextClass[i].style.color = "#fff";
          break;

        case "note":
          coloredTextClass[i].style.color = "#292929";
          break;

        case "pop":
          coloredTextClass[i].style.color = "#292929";
          break;

        default:
          console.log("mode is undefined");
      }
    }
  };

  changeTextShadow = mode => {
    const returnRanNum = () => {
      const runNum = Math.floor(Math.random() * 360);
      return runNum;
    };

    const returnRgb = () => {
      let rgb = `rgb(${returnRanNum()}, ${returnRanNum()}, ${returnRanNum()})`;
      return rgb;
    };

    if (mode === "neon") {
      this.displayScreen.classList.add("textShadow");
      const textShadowClass = document.getElementsByClassName("textShadow");
      for (let i = 0; i < textShadowClass.length; i++) {
        textShadowClass[i].style.textShadow = `2px 2px 15px ${returnRgb()}`;
      }
    } else {
      if (this.displayScreen.className.includes("textShadow")) {
        this.displayScreen.classList.remove("textShadow");
      }
      this.displayScreen.style.textShadow = "";
    }
  };

  changeFontFamily = mode => {
    switch (mode) {
      case "developer":
        this.displayScreen.style.fontFamily = '"Ubuntu Mono", monospace';
        break;

      case "neon":
        this.displayScreen.style.fontFamily = '"Lobster", cursive';
        break;

      case "note":
        this.displayScreen.style.fontFamily = '"Noto Serif", serif';
        break;

      case "pop":
        this.displayScreen.style.fontFamily = "'Anton', sans-serif";
        break;

      default:
        console.log("mode is undefined");
    }
  };

  changeBackground = mode => {
    switch (mode) {
      case "developer":
        this.displayScreen.style.backgroundColor = "rgb(12, 5, 32)";
        break;

      case "neon":
        this.displayScreen.style.backgroundColor = "rgb(12, 5, 32)";
        break;

      case "note":
        this.displayScreen.style.backgroundColor = "#fff";
        break;

      case "pop":
        this.displayScreen.style.backgroundColor = "#fef734";
        break;

      default:
        console.log("mode is undefined");
    }
  };

  switchMode = mode => {
    switch (mode) {
      case "developer":
        this.changeTextColor(mode);
        this.changeTextShadow(mode);
        this.changeFontFamily(mode);
        this.changeBackground(mode);
        break;

      case "neon":
        this.changeTextColor(mode);
        this.changeTextShadow(mode);
        this.changeFontFamily(mode);
        this.changeBackground(mode);
        break;

      case "note":
        this.changeTextColor(mode);
        this.changeTextShadow(mode);
        this.changeFontFamily(mode);
        this.changeBackground(mode);
        break;

      case "pop":
        this.changeTextColor(mode);
        this.changeTextShadow(mode);
        this.changeFontFamily(mode);
        this.changeBackground(mode);
        break;

      default:
        console.log("isMode returns undefined");
    }
  };

  ////CAPTURE/////////////////////////////////////////////////////

  captureScreen = async () => {
    const canvas = await html2canvas(document.getElementById("display-screen"));
    const imgData = canvas.toDataURL();
    const imgTag = document.createElement("img");
    imgTag.src = `${imgData}`;
    this.frames.push(imgTag);
    console.log(this.frames);
  };

  ////CREATE GIF//////////////////////////////////////////////////

  createGIF = () => {
    console.log("createGIF here");
    //get canvas
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //initiate GiTEncoder
    const encoder = new GIFEncoder();
    encoder.setRepeat(0); //infinite loop
    // encoder.setDelay(document.getElementById("anime_speed").value);
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
    const gifAnimation =
      "data:image/gif;base64," + encode64(encoder.stream().getData());
    this.setState({ gifAnimation });
    console.log(gifAnimation);

    const outputScreen = document.getElementById("output");
    const img = document.createElement("img");
    img.id = "outputImg";
    img.src = gifAnimation;
    outputScreen.style.padding = 0;
    outputScreen.style.border = "none";
    outputScreen.appendChild(img);
  };

  render() {
    return (
      <div id="container">
        <div id="inner">
          <div id="left">
            <Screen id="display-screen" />
            <Mode mode={this.state.mode} onModeChange={this.isMode} />
            <Textarea
              textAreaVal={this.state.textAreaVal}
              onTextAreaChange={this.displayMessage}
            />
            <div className="btn-wrapper">
              <Record id="record-btn" action={this.startRec} name="Record" />
              <CreateGif
                id="createGif-btn"
                action={this.createGIF}
                name="Create GIF"
              />
            </div>
          </div>

          <div id="right">
            <Screen id="output"></Screen>
            <Download href={this.state.gifAnimation} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
