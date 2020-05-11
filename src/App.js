import React, { Component } from 'react';
import Description from './components/Description';
import Note from './components/Note';
import OutputScreen from './components/OutputScreen';
import ScreenSizeContainer from './containers/ScreenSizeContainer';
import ModeContainer from './components/ModeContainer';
import CustomizedModeContainer from './components/CustomizedMode/CustomizedModeContainer';
import FontSelectorContainer from './components/CustomizedMode/CustomizedModeComponents/FontSelectorContainer';
import BackgroundColorPickerContainer from './components/CustomizedMode/CustomizedModeComponents/ColorPicker/BackgroundColorPickerContainer';
import FontColorPickerContainer from './components/CustomizedMode/CustomizedModeComponents/ColorPicker/FontColorPickerContainer';
import ColorPicker from './components/CustomizedMode/CustomizedModeComponents/ColorPicker/ColorPicker';
import TextareaContainer from './components/TextareaContainer';
import RecordResetContainer from './containers/RecordResetContainer';
import CreateGif from './containers/CreateGif';
import Download from './components/Download';
// import Loading from "./Loading";
import html2canvas from 'html2canvas';
/* eslint-disable no-undef */
// import GIFEncoder from "./GIFEncoder";
import './App.css';
import logo from './img/logo.png';
import encode64 from './b64';
import store from './reducers/store';
import ModalWindow from './components/ModalWindow';
import Notification from './containers/Notification';
import Footer from './components/Footer';
// import { blockStatement } from "@babel/types";
// import handleMediaQuery from "./containers/handleMediaQuery";
// import htmlToImage from "html-to-image";
// import domtoimage from "dom-to-image";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordingFlg: false,
      encoder: '',
      // outputScreenStatus: "",
      gifAnimation: ''
    };
  }

  // displayScreen;
  textArea;
  outputScreen;
  donwloadBtn;

  componentDidMount() {
    this.textArea = document.getElementById('textareaMsg');
    this.outputScreen = document.getElementById('output');
    this.donwloadBtn = document.getElementById('ssgif');

    //initiate mode
    // this.setState({ mode: store.getState().mode });

    //go to top
    window.scrollTo(0, 0);

    //excecute if the width of window is less than 480px
    this.mq480 = window.matchMedia('(max-width: 480px)');
    this.handleMediaQuery(
      this.mq480,
      this.props.mqFlagTrue,
      this.props.mqFlagFalse
    );
    this.mq480.addListener(this.handleMediaQuery);
  }

  handleMediaQuery = mq => {
    const docStyle = document.documentElement.style;

    // changeScreenSize(store.getState().screenSize);
    if (mq.matches) {
      this.props.mqFlagTrue();
      this.textArea.style.padding = '15px 30px';
      this.textArea.style.fontSize = '15px';
      if (store.getState().screenSize === 'twitter') {
        docStyle.setProperty('--screenWidth', '256px');
        docStyle.setProperty('--screenHeight', '128px');
      } else if (store.getState().screenSize === 'social') {
        docStyle.setProperty('--screenWidth', '200px');
        docStyle.setProperty('--screenHeight', '200px');
      }
    } else {
      this.props.mqFlagFalse();
      this.textArea.style.padding = '30px 60px';
      this.textArea.style.fontSize = '30px';
      if (store.getState().screenSize === 'twitter') {
        docStyle.setProperty('--screenWidth', '512px');
        docStyle.setProperty('--screenHeight', '256px');
      } else if (store.getState().screenSize === 'social') {
        docStyle.setProperty('--screenWidth', '400px');
        docStyle.setProperty('--screenHeight', '400px');
      }
    }
  };

  ////CAPTURE/////////////////////////////////////////////////////

  captureScreen = async () => {
    if (store.getState().captureCount.counter === 0) {
      //shows the create gif button
      const createGifBtn = document.getElementById('createGif-btn');
      createGifBtn.classList.remove('hide');
      this.props.captureCountIncrement();
    }
    // }
    const textAreaCanvas = await html2canvas(this.textArea, {
      windowWidth: this.textArea.scrollWidth,
      windowHeight: this.textArea.scrollHeight,
      x: 0,
      y: this.textArea.offsetTop
    });
    const imgData = textAreaCanvas.toDataURL();
    const imgTag = document.createElement('img');
    imgTag.src = `${imgData}`;
    this.props.pushToFrames(imgTag);
  };

  ////CREATE GIF//////////////////////////////////////////////////
  switchLoading = status => {
    if (status === 'start') {
      this.setState({ outputScreenStatus: 'loading' });
    } else if (status === 'stop') {
      this.setState({ outputScreenStatus: '' });
    }
  };

  createGIF = async e => {
    e.preventDefault();
    if (store.getState().createGifCount.counter === 0) {
      //when it's creating GIF show a snap bar
      this.props.setNotification('info', 'Creating GIF...');

      //make the createGIF button invalid
      const createGifBtn = document.getElementById('createGif-btn');
      createGifBtn.id = 'createGif-btn-pushed';
      createGifBtn.classList.remove('default');
      createGifBtn.classList.add('invalid');

      //increment createGIF counter
      this.props.createGifCountIncrement();

      //start loading
      // this.switchLoading("start");

      await this.captureScreen();

      //get canvas
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');

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

          resolve('ok');
        });
      };

      await proseccing();

      //stop loading
      // this.switchLoading("stop");

      this.setState({
        gifAnimation:
          'data:image/gif;base64,' + encode64(encoder.stream().getData())
      });

      //set width and height of the output image
      const outputImgWidth = getComputedStyle(document.documentElement)
        .getPropertyValue('--screenWidth')
        .substring(0, 3);
      const outputImgHeight = getComputedStyle(document.documentElement)
        .getPropertyValue('--screenHeight')
        .substring(0, 3);

      //create an output image
      const img = document.createElement('img');
      img.id = 'outputImg';
      img.src = this.state.gifAnimation;
      img.width = outputImgWidth;
      img.height = outputImgHeight;

      //set a style to outputScreen
      this.outputScreen.style.padding = 0;
      this.outputScreen.style.border = 'none';
      this.outputScreen.appendChild(img);
      this.outputScreen.classList.remove('output-hide');
      this.outputScreen.classList.add('output-show');

      //show the div which has down-to-here-hide class
      //so that scroll down to the download button
      const downToHere = document.getElementById('down-to-here');
      downToHere.classList.remove('down-to-here-hide');
      downToHere.classList.add('down-to-here-show');

      //scroll down to the top of the output screen
      this.ScrollDown();

      //when it finish creating GIF erase the old snap bar and show new one
      this.props.closeNotification('info', 'Creating GIF...');
      this.props.setNotification('info', 'Done!');

      //shows a download button
      this.donwloadBtn.classList.remove('hide');
    } else {
      return;
    }
  };

  ScrollDown = () => {
    const rect = document
      .getElementById('down-to-here')
      .getBoundingClientRect();
    // const rect = this.outputScreen.getBoundingClientRect();
    const position = rect.top;
    window.scrollTo(0, position);
  };

  render() {
    return (
      <div id="container">
        {/* <ModalWindow /> */}
        <a
          href="https://www.producthunt.com/posts/msgif?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-msgif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=183178&theme=light"
            alt="Msgif - A GIF generator that converts your message into a GIF | Product Hunt Embed"
            style={{
              width: '250px',
              height: '54px',
              display: 'block',
              marginTop: '1%',
              marginLeft: '1%'
            }}
          />
        </a>
        <div id="main"></div>
        <Notification />
        <header>
          <img src={logo} alt="logo" id="logo" />
        </header>

        <div id="inner">
          <div className="wrapper-by-step">
            <Description
              step="1"
              title="Choose the size of the text area and style of design.🎨"
            />
            <div id="size-mode-wrapper">
              <ScreenSizeContainer />
              <ModeContainer />
              <FontSelectorContainer />
              <CustomizedModeContainer />
              {/* <BackgroundColorPickerContainer />
              <FontColorPickerContainer /> */}
              <ColorPicker />
            </div>
          </div>

          <div className="wrapper-by-step">
            <Description
              step="2"
              title="Press the Record button and type your message in the text area below. Once you finish typing, press the Create GIF button.👆"
            />
            <Note
              number="1"
              noteDescription="It's a demo unless you press the Record button."
            />
            <Note
              number="2"
              noteDescription="If you press the reset button, your message is going to be undone."
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
              title="Download the GIF animation you've created. You can share it on Twitter, Facebook, chat apps or wherever you want!🎉"
            />
            <OutputScreen />
            <Download href={this.state.gifAnimation} />
            <div id="down-to-here" className="down-to-here-hide"></div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
