import React, { Component } from "react";
import Screen from "./components/Screen";
import ScreenSizeContainer from "./containers/ScreenSizeContainer";
import ModeContainer from "./components/ModeContainer";
import TextareaContainer from "./components/TextareaContainer";
import RecordResetContainer from "./containers/RecordResetContainer";
import CreateGif from "./containers/CreateGif";
import Download from "./components/Download";
// import Loading from "./Loading";
import html2canvas from "html2canvas";
/* eslint-disable no-undef */
// import GIFEncoder from "./GIFEncoder";
import "./App.css";
import logo from "./img/logo.png";
import encode64 from "./b64";
import store from "./reducers/store";
import Notification from "./containers/Notification";
import { log } from "util";
import changeScreenSize from "./containers/changeScreenSize";
// import "@material/react-snackbar/dist/snackbar.css";
// import Snackbar from "@material/react-snackbar";
// import SnackBarControl from "./components/SnackBarControl";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordingFlg: false,
      encoder: "",
      outputScreenStatus: "",
      gifAnimation: ""
    };
  }

  // displayScreen;
  textArea;
  outputScreen;
  donwloadBtn;
  mq480;

  componentDidMount() {
    this.textArea = document.getElementById("textareaMsg");
    this.outputScreen = document.getElementById("output");
    this.donwloadBtn = document.getElementById("ssgif");

    //excecute if the width of window is less than 480px
    this.mq480 = window.matchMedia("(max-width: 480px)");
    this.handleMediaQuery(this.mq480);
    this.mq480.addListener(this.handleMediaQuery);

    //initiate mode
    this.setState({ mode: store.getState().mode });

    //go to top
    window.scrollTo(0, 0);
  }

  handleMediaQuery = mq => {
    const docStyle = document.documentElement.style;
    const inner = document.getElementById("inner");
    const side = document.getElementById("side");
    const logo = document.getElementById("logo");
    const left = document.getElementById("left");
    const leftLeft = document.getElementById("left-left");
    const leftRight = document.getElementById("left-right");
    const textArea = document.getElementById("textareaMsg");
    const right = document.getElementById("right");

    changeScreenSize(store.getState().screenSize);
    if (mq.matches) {
      console.log("LESS THAN 480px");

      if (store.getState().screenSize === "twitter") {
        // inner.style.width = "256px";
        // side.style.width = "0";
        // // logo.style.width = "70px";
        // // left.style.width = "512px";
        // // left.style.display = "block";
        // // left.style.justifyContent = "";
        // // leftLeft.style.width = "100%";
        // // leftRight.style.width = "100%";
        // // textArea.style.marginTop = "0px";
        // // right.style.width = "512px";
        docStyle.setProperty("--screenWidth", "256px");
        docStyle.setProperty("--screenHeight", "128px");
      } else if (store.getState().screenSize === "social") {
        docStyle.setProperty("--screenWidth", "200px");
        docStyle.setProperty("--screenHeight", "200px");
      }
    } else {
      console.log("MORE THAN 480px");
      if (store.getState().screenSize === "twitter") {
        docStyle.setProperty("--screenWidth", "512px");
        docStyle.setProperty("--screenHeight", "256px");
      } else if (store.getState().screenSize === "social") {
        docStyle.setProperty("--screenWidth", "400px");
        docStyle.setProperty("--screenHeight", "400px");
      }
    }
  };

  reset = e => {
    //before creating a gif animation
    if (
      store.getState().captureCount.counter > 0 &&
      store.getState().createGifCount.counter === 0
    ) {
      //hide the create gif button
      const createGifBtn = document.getElementById("createGif-btn");
      createGifBtn.classList.add("hide");
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
      this.props.createGifCountDecrement();

      //delete the output image
      const outputImg = document.getElementById("outputImg");
      outputImg.parentNode.removeChild(outputImg);

      this.outputScreen.style.padding = "30px 60px";
      this.outputScreen.style.border = "dashed 5px rgba(204, 204, 204, 0.7)";

      //hide the download button
      this.donwloadBtn.classList.add("hide");

      //reset captureCount
      this.props.captureCountDecrement();

      //erase the screen
      this.props.changeMode("note");
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
    if (store.getState().captureCount.counter === 0) {
      //shows the create gif button
      const createGifBtn = document.getElementById("createGif-btn");
      createGifBtn.classList.remove("hide");
      this.props.captureCountIncrement();
    }

    //capture the canvas
    const canvas = await html2canvas(document.getElementById("display-screen"));
    const imgData = canvas.toDataURL();
    const imgTag = document.createElement("img");
    imgTag.src = `${imgData}`;
    this.props.pushToFrames(imgTag);
  };

  ////CREATE GIF//////////////////////////////////////////////////
  switchLoading = status => {
    if (status === "start") {
      this.setState({ outputScreenStatus: "loading" });
    } else if (status === "stop") {
      this.setState({ outputScreenStatus: "" });
    }
  };

  createGIF = async e => {
    e.preventDefault();
    if (store.getState().createGifCount.counter === 0) {
      //make the createGIF button invalid
      const createGifBtn = document.getElementById("createGif-btn");
      createGifBtn.id = "createGif-btn-pushed";
      createGifBtn.classList.remove("default");
      createGifBtn.classList.add("invalid");

      //increment createGIF counter
      this.props.createGifCountIncrement();

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
          canvas.width = store.getState().frames[0].naturalWidth;
          canvas.height = store.getState().frames[0].naturalHeight;

          //draw all the images to the canvas
          for (
            let frame_no = 0;
            frame_no < store.getState().frames.length;
            frame_no++
          ) {
            ctx.drawImage(store.getState().frames[frame_no], 0, 0);
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

      //set width and height of the output image
      const outputImgWidth = getComputedStyle(document.documentElement)
        .getPropertyValue("--screenWidth")
        .substring(0, 3);
      const outputImgHeight = getComputedStyle(document.documentElement)
        .getPropertyValue("--screenHeight")
        .substring(0, 3);

      img.width = outputImgWidth;
      img.height = outputImgHeight;

      //set a style of outputScreen
      this.outputScreen.style.padding = 0;
      this.outputScreen.style.border = "none";
      this.outputScreen.appendChild(img);

      //when it's creating GIF show a snap bar
      this.props.setNotification("info", "Done!");

      //scroll down to the top of the output screen
      this.ScrollDown();

      //shows a download button
      this.donwloadBtn.classList.remove("hide");
    } else {
      return;
    }
  };

  ScrollDown = () => {
    const rect = this.outputScreen.getBoundingClientRect();
    const position = rect.top;
    window.scrollTo(0, position);
  };

  render() {
    return (
      <div id="container">
        <Notification />
        <div id="side">
          <img src={logo} alt="logo" width="70px" id="logo" />
        </div>
        <div id="inner">
          <div id="left">
            <div id="left-left">
              <Screen id="display-screen" status="" />
              <ScreenSizeContainer />
              <ModeContainer />
            </div>
            <div id="left-right">
              <TextareaContainer captureScreen={this.captureScreen} />
              <div className="btn-wrapper">
                <RecordResetContainer />
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
