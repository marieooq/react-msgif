import React, { Component } from "react";
import Screen from "./Screen";
import Mode from "./Mode";
import Textarea from "./Textarea";
import Record from "./Record";
import CreateGif from "./CreateGif";
import Download from "./Download";
// import Loading from "./Loading";
import html2canvas from "html2canvas";
/* eslint-disable no-undef */
// import GIFEncoder from "./GIFEncoder";
import "./App.css";
import encode64 from "./b64";

class App extends Component {
  constructor(props) {
    super(props);
    this.frames = [];
    this.captureCount = 0;
    this.state = {
      isRec: false,
      recordingFlg: false,
      encoder: "",
      textAreaVal: "",
      mode: "note",
      outputScreenStatus: "",
      gifAnimation: ""
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

    if (this.state.outputScreenStatus !== prevState.outputScreenStatus) {
      this.outputScreen.status = this.state.outputScreenStatus;
    }
  }

  displayMessage = async e => {
    this.setState({ textAreaVal: e.target.value });
    if (this.state.isRec) {
      await this.captureScreen();
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
      this.setState({ isRec: true });
      this.setState({ textAreaVal: "" });
      e.target.textContent = "Recording...";
      e.target.id = "";
      e.target.classList.add("recording");
      e.target.classList.remove("default");
    } else {
      return;
    }
  };

  // updateDisplay = () => {
  //   this.displayScreen.textContent = this.state.textAreaVal;
  // };

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
    if (this.captureCount === 0) {
      //shows the create gif button
      const createGifBtn = document.getElementById("createGif-btn");
      console.log(createGifBtn);
      createGifBtn.classList.remove("hide");
      this.captureCount++;
    }

    //capture the canvas
    const canvas = await html2canvas(document.getElementById("display-screen"));
    const imgData = canvas.toDataURL();
    const imgTag = document.createElement("img");
    imgTag.src = `${imgData}`;
    this.frames.push(imgTag);
    console.log(this.frames);
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
    //make the createGIF button invalid
    const createGifBtn = document.getElementById("createGif-btn");
    createGifBtn.id = "";
    createGifBtn.classList.remove("default");
    createGifBtn.classList.add("createGif-pushed");

    //display "creating..."
    const recordBtn = document.getElementsByClassName("recording")[0];
    console.log(recordBtn);
    recordBtn.textContent = "Creating...";

    await this.captureScreen();

    //start loading
    this.switchLoading("start");
    console.log("switchLoading has started!!");
    console.log(this.state.outputScreenStatus);

    //get canvas
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //initiate GiTEncoder
    const encoder = new GIFEncoder();
    encoder.setRepeat(0); //infinite loop
    // encoder.setDelay(document.getElementById("anime_speed").value);

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
    console.log("switchLoading has STOPPED!!");
    console.log(this.state.outputScreenStatus);

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

    //shows a download button
    const donwloadBtn = document.getElementById("ssgif");
    donwloadBtn.classList.remove("hide");
  };

  render() {
    return (
      <div id="container">
        <div id="inner">
          <div id="left">
            <Screen id="display-screen" status="" />
            <Mode mode={this.state.mode} onModeChange={this.isMode} />
            <Textarea
              textAreaVal={this.state.textAreaVal}
              onTextAreaChange={this.displayMessage}
            />
            <div className="btn-wrapper">
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

          <div id="right">
            <Screen id="output" status={this.state.outputScreenStatus} />
            <Download href={this.state.gifAnimation} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
