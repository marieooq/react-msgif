import React, { Component } from "react";
import Description from "./components/Description";
import Note from "./components/Note";
import OutputScreen from "./components/OutputScreen";
import ScreenSize from "./containers/ScreenSize";
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
// import "@material/react-snackbar/dist/snackbar.css";
// import Snackbar from "@material/react-snackbar";
// import SnackBarControl from "./components/SnackBarControl";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordingFlg: false,
      encoder: "",
      // outputScreenStatus: "",
      gifAnimation: ""
    };
  }

  // displayScreen;
  textArea;
  outputScreen;
  donwloadBtn;

  componentDidMount() {
    this.textArea = document.getElementById("textareaMsg");
    this.outputScreen = document.getElementById("output");
    this.donwloadBtn = document.getElementById("ssgif");

    //initiate mode
    this.setState({ mode: store.getState().mode });

    //go to top
    window.scrollTo(0, 0);
  }

  ////CAPTURE/////////////////////////////////////////////////////

  captureScreen = async () => {
    console.log("inside captureScreen");
    if (store.getState().captureCount.counter === 0) {
      //shows the create gif button
      const createGifBtn = document.getElementById("createGif-btn");
      createGifBtn.classList.remove("hide");
      this.props.captureCountIncrement();
    }

    const textAreaCanvas = await html2canvas(this.textArea);
    const imgData = textAreaCanvas.toDataURL();
    const imgTag = document.createElement("img");
    imgTag.src = `${imgData}`;
    console.log(imgTag);
    this.props.pushToFrames(imgTag);
    console.log(store.getState().frames);
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
      //when it's creating GIF show a snap bar
      this.props.setNotification("info", "Creating GIF...");

      //make the createGIF button invalid
      const createGifBtn = document.getElementById("createGif-btn");
      createGifBtn.id = "createGif-btn-pushed";
      createGifBtn.classList.remove("default");
      createGifBtn.classList.add("invalid");

      //increment createGIF counter
      this.props.createGifCountIncrement();

      //start loading
      // this.switchLoading("start");

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
      // this.switchLoading("stop");

      this.setState({
        gifAnimation:
          "data:image/gif;base64," + encode64(encoder.stream().getData())
      });

      //set width and height of the output image
      const outputImgWidth = getComputedStyle(document.documentElement)
        .getPropertyValue("--screenWidth")
        .substring(0, 3);
      const outputImgHeight = getComputedStyle(document.documentElement)
        .getPropertyValue("--screenHeight")
        .substring(0, 3);

      console.log(outputImgWidth);
      console.log(outputImgHeight);

      //create an output image
      const img = document.createElement("img");
      img.id = "outputImg";
      img.src = this.state.gifAnimation;
      img.width = outputImgWidth;
      img.height = outputImgHeight;

      //set a style to outputScreen
      this.outputScreen.style.padding = 0;
      this.outputScreen.style.border = "none";
      this.outputScreen.appendChild(img);
      this.outputScreen.classList.remove("output-hide");
      this.outputScreen.classList.add("output-show");

      //show the div which has down-to-here-hide class
      //so that scroll down to the download button
      const downToHere = document.getElementById("down-to-here");
      downToHere.classList.remove("down-to-here-hide");
      downToHere.classList.add("down-to-here-show");

      //scroll down to the top of the output screen
      this.ScrollDown();

      //when it finish creating GIF erase the old snap bar and show new one
      this.props.closeNotification("info", "Creating GIF...");
      this.props.setNotification("info", "Done!");

      //shows a download button
      this.donwloadBtn.classList.remove("hide");
    } else {
      return;
    }
  };

  ScrollDown = () => {
    const rect = document
      .getElementById("down-to-here")
      .getBoundingClientRect();
    console.log(rect);
    // const rect = this.outputScreen.getBoundingClientRect();
    const position = rect.top;
    console.log("---");
    console.log(position);
    console.log("---");
    window.scrollTo(0, position);
  };

  render() {
    return (
      <div id="container">
        <Notification />
        <header>
          <img src={logo} alt="logo" id="logo" />
        </header>

        <div id="inner">
          <div className="wrapper-by-step">
            <Description
              step="1"
              title="Choose the size of the text area and style of design."
            />
            <div id="size-mode-wrapper">
              <ScreenSize />
              <ModeContainer />
            </div>
          </div>

          <div className="wrapper-by-step">
            <Description
              step="2"
              title="Press the Record button and type your message in the textarea below. Once you finish typing, press the Create GIF button."
            />
            <Note
              number="1"
              noteDescription="It's a demo unless you press the Record button."
            />
            <Note
              number="2"
              noteDescription="If you press the reset button, everything is reset. (including the size of the text area, design, and a message you typed)"
            />
            <div className="btn-wrapper">
              <RecordResetContainer />
              <CreateGif
                id="createGif-btn"
                class="btn-push default hide"
                action={this.createGIF}
                name="Create GIF"
              />
            </div>
            <TextareaContainer captureScreen={this.captureScreen} />
          </div>

          <div className="wrapper-by-step">
            <Description
              step="3"
              title="Download the GIF animation you've created."
            />
            <OutputScreen />
            <Download href={this.state.gifAnimation} />
            <div id="down-to-here" className="down-to-here-hide"></div>
          </div>
        </div>
      </div>
    );
  }
}
