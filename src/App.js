import React, { Component } from "react";
import Screen from "./Screen";
import ScreenSize from "./ScreenSize";
import Mode from "./Mode";
import Textarea from "./Textarea";
import Record from "./Record";
import Reset from "./Reset";
import CreateGif from "./CreateGif";
import Download from "./Download";
// import Loading from "./Loading";
import html2canvas from "html2canvas";
/* eslint-disable no-undef */
// import GIFEncoder from "./GIFEncoder";
import "./App.css";
import encode64 from "./b64";
import { connect } from 'react-redux'
import { startRec, endRec } from './actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.frames = [];
    this.captureCount = 0;
    this.createGifCount = 0;
    this.state = {
      recordingFlg: false,
      encoder: "",
      textAreaVal: "",
      size: "twitter",
      mode: "note",
      outputScreenStatus: "",
      gifAnimation: "",
      isComposing: false
    };
  }

  displayScreen;
  textArea;
  outputScreen;

  componentDidMount() {
    this.displayScreen = document.getElementById("display-screen");
    this.textArea = document.getElementById("textareaMsg");
    this.outputScreen = document.getElementById("output");
  }

  componentDidUpdate(prevState) {
    if (this.state.textAreaVal !== prevState.textAreaVal) {
      this.displayScreen.textContent = this.state.textAreaVal;
    }

    if (this.state.mode !== prevState.mode) {
      this.switchMode(this.state.mode);
    }

    if (this.state.size !== prevState.size) {
      this.changeScreenSize(this.state.size);
    }
  }

  displayMessage = async e => {
    document.addEventListener("keydown", e => {
      console.log(`keydown: ${e}`);
    });
    document.addEventListener("keypress", e => {
      //
      //日本語の場合はkeypressイベントが発動しない
      console.log(`keypress: ${e}`);
    });
    document.addEventListener("keyup", e => {
      console.log(`keyup: ${e}`);
    });
    this.setState({ textAreaVal: e.target.value });
    if (this.props.isRec) {
      await this.captureScreen();
    }

    if (this.displayScreen.className !== "") {
      this.removeClass();
    }

    this.switchMode(this.state.mode);
  };

  setScreenSize = e => {
    this.setState({ size: e.target.value });
  };

  changeScreenSize(size) {
    let docStyle = document.documentElement.style;
    let container = document.getElementById("container");
    let left = document.getElementById("left");
    let leftLeft = document.getElementById("left-left");
    let leftRight = document.getElementById("left-right");
    let textArea = document.getElementById("textareaMsg");
    let right = document.getElementById("right");

    if (size === "twitter") {
      container.style.width = "1080px";
      left.style.width = "512px";
      left.style.display = "block";
      left.style.justifyContent = "";
      leftLeft.style.width = "100%";
      leftRight.style.width = "100%";
      textArea.style.marginTop = "0px";
      right.style.width = "512px";
      docStyle.setProperty("--screenWidth", "512px");
      docStyle.setProperty("--screenHeight", "256px");
    } else if (size === "social") {
      container.style.width = "1280px";
      left.style.width = "840px";
      left.style.display = "flex";
      left.style.justifyContent = "space-between";
      leftLeft.style.width = "400px";
      leftRight.style.width = "400px";
      textArea.style.marginTop = "20px";
      right.style.width = "400px";
      docStyle.setProperty("--screenWidth", "400px");
      docStyle.setProperty("--screenHeight", "400px");
    }
  }

  isMode = e => {
    this.setState({ mode: e.target.value });
  };

  startRec = e => {
    if (e.target.textContent === "Record") {
      // this.setState({ isRec: true });
      this.props.startRec()
      this.setState({ textAreaVal: "" });
      e.target.textContent = "Recording...";
      e.target.id = "recording-btn";
      e.target.classList.add("recording");
      e.target.classList.remove("default");
      e.target.classList.remove("invalid");

      //shows the reset button
      const resetBtn = document.getElementById("reset-btn");
      resetBtn.classList.remove("hide");
    } else {
      return;
    }
  };

  reset = e => {
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
    this.props.endRec()
    this.setState({ textAreaVal: "" });
    this.frames = [];

    //shows the record button
    const recordingBtn = document.getElementById("recording-btn");
    recordingBtn.textContent = "Record";
    recordingBtn.classList.remove("recording");
    recordingBtn.classList.add("default");
    recordingBtn.id = "record-btn";
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
        if (this.state.isComposing) {
          this.displayScreen.style.fontFamily = "'Kosugi Maru', sans-serif";
        } else {
          this.displayScreen.style.fontFamily = "'Anton', sans-serif";
        }

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
              <ScreenSize
                size={this.state.size}
                onScreenSizeChange={this.setScreenSize}
              />
              <Mode mode={this.state.mode} onModeChange={this.isMode} />
            </div>
            <div id="left-right">
              <Textarea
                textAreaVal={this.state.textAreaVal}
                onTextAreaChange={this.displayMessage}
              />
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

const mapStateToProps = state => {
  return {
    isRec: state.isRec
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startRec: () => dispatch(startRec),
    endRec: () => dispatch(endRec),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
