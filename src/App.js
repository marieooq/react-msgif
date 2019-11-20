import React, { Component } from "react";
import Screen from "./Screen";
import Mode from "./Mode";
import Textarea from "./Textarea";
import Record from "./Record";
import CreateGif from "./CreateGif";
import Download from "./Download";
import html2canvas from "html2canvas";
import GIFEncoder from "./GIFEncoder";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRec: false,
      frames: [],
      gifAnimation: "",
      encoder: "",
      textAreaVal: "",
      mode: "note"
    };
  }

  displayScreen;

  componentDidMount() {
    this.displayScreen = document.getElementById("display-screen");
  }

  componentDidUpdate(prevState) {
    if (this.state.textAreaVal !== prevState.textAreaVal) {
      this.updateDisplay();
    }
  }

  displayMessage = e => {
    console.log("inside displayScreen");
    this.setState({ textAreaVal: e.target.value });
    console.log(`textareaVal: ${this.state.textAreaVal}`);
    console.log(`mode: ${this.state.mode}`);

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

  // startRec = () => {
  //   isRec = true;
  //   const textArea = document.getElementById("textareaMsg");
  //   textArea.value = "";
  //   displayScreen.textContent = "";
  // };
  updateDisplay = () => {
    this.displayScreen.textContent = this.state.textAreaVal;
    console.log(this.displayScreen.textContent);
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

  captureScreen = () => {
    html2canvas(document.getElementById("display-screen"), {
      onrendered: canvas => {
        const imgData = canvas.toDataURL();
        const imgTag = document.createElement("img");
        imgTag.src = `${imgData}`;
        this.state.frames.push(imgTag);

        console.log(this.state.frames);
      }
    });
  };

  createGIF = () => {
    //get canvas
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //initiate GiTEncoder
    this.state.encoder = new GIFEncoder();
    this.state.encoder.setRepeat(0); //infinite loop
    // encoder.setDelay(document.getElementById("anime_speed").value);
    this.state.encoder.start();

    //get images
    // frames = document.getElementById("anime").getElementsByTagName("img");

    //fit the size of canvas to the first image
    canvas.width = this.state.frames[0].naturalWidth;
    canvas.height = this.state.frames[0].naturalHeight;

    //draw all the images to the canvas
    for (let frame_no = 0; frame_no < this.state.frames.length; frame_no++) {
      ctx.drawImage(this.state.frames[frame_no], 0, 0);
      this.state.encoder.addFrame(ctx);
    }

    //create a gif animation
    this.state.encoder.finish();
    this.state.gifAnimation =
      "data:image/gif;base64," +
      this.encode64(this.state.encoder.stream().getData());
    document.getElementById("anime_gif").src = this.state.gifAnimation;
    // document.getElementById("download").style.display = "block";

    // const downloadGIF = () => {
    //   encoder.download("download.gif");
    // };
    document.getElementById("ssgif").href = this.state.gifAnimation;
  };

  encode64 = input => {
    var output = "",
      i = 0,
      l = input.length,
      key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      chr1,
      chr2,
      chr3,
      enc1,
      enc2,
      enc3,
      enc4;
    while (i < l) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) enc3 = enc4 = 64;
      else if (isNaN(chr3)) enc4 = 64;
      output =
        output +
        key.charAt(enc1) +
        key.charAt(enc2) +
        key.charAt(enc3) +
        key.charAt(enc4);
    }
    return output;
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
            <Screen id="output" />
            <Download />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
