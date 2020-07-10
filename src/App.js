import React, { Component } from 'react';
import Header from './components/Header';
import ProductHuntStecker from './components/ProductHuntStecker';
import Description from './components/Description';
import OutputScreen from './components/OutputScreen';
import Step1 from './components/Step1';
import Step2Container from './components/Step2Container';
import Download from './components/Download';
// import Loading from "./Loading";
/* eslint-disable no-undef */
// import GIFEncoder from "./GIFEncoder";
import './App.css';
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
      recordingFlg: false
      // gifAnimation: ''
      // outputScreenStatus: "",
    };
  }

  // displayScreen;
  textArea;
  outputScreen;
  donwloadBtn;

  componentDidMount() {
    // this.textArea = document.getElementById('textareaMsg');
    // this.outputScreen = document.getElementById('output');
    // this.donwloadBtn = document.getElementById('ssgif');

    //initiate mode
    // this.setState({ mode: store.getState().mode });

    //go to top
    window.scrollTo(0, 0);
  }

  ////CREATE GIF//////////////////////////////////////////////////

  // createGIF = async e => {
  //   e.preventDefault();
  //   if (store.getState().createGifCount.counter === 0) {
  //     //when it's creating GIF show a snap bar
  //     this.props.setNotification('info', 'Creating GIF...');

  //     //make the createGIF button invalid
  //     const createGifBtn = document.getElementById('createGif-btn');
  //     createGifBtn.id = 'createGif-btn-pushed';
  //     createGifBtn.classList.remove('default');
  //     createGifBtn.classList.add('invalid');

  //     //increment createGIF counter
  //     this.props.createGifCountIncrement();

  //     //start loading
  //     // this.switchLoading("start");

  //     await this.captureScreen();

  //     //get canvas
  //     const canvas = document.getElementById('canvas');
  //     const ctx = canvas.getContext('2d');

  //     //initiate GiTgifAnimation
  //     const encoder = new GIFEncoder();
  //     encoder.setRepeat(0); //infinite loop
  //     encoder.setDelay(100); //delay

  //     const proseccing = () => {
  //       return new Promise(resolve => {
  //         encoder.start();

  //         //fit the size of canvas to the first image
  //         canvas.width = store.getState().frames[0].naturalWidth;
  //         canvas.height = store.getState().frames[0].naturalHeight;

  //         //draw all the images to the canvas
  //         for (
  //           let frame_no = 0;
  //           frame_no < store.getState().frames.length;
  //           frame_no++
  //         ) {
  //           ctx.drawImage(store.getState().frames[frame_no], 0, 0);
  //           encoder.addFrame(ctx);
  //         }

  //         //create a gif animation
  //         encoder.finish();

  //         resolve('ok');
  //       });
  //     };

  //     await proseccing();

  //     //stop loading
  //     // this.switchLoading("stop");

  //     this.setState({
  //       gifAnimation:
  //         'data:image/gif;base64,' + encode64(encoder.stream().getData())
  //     });

  //     //set width and height of the output image
  //     const outputImgWidth = getComputedStyle(document.documentElement)
  //       .getPropertyValue('--screenWidth')
  //       .substring(0, 3);
  //     const outputImgHeight = getComputedStyle(document.documentElement)
  //       .getPropertyValue('--screenHeight')
  //       .substring(0, 3);

  //     //create an output image
  //     const img = document.createElement('img');
  //     img.id = 'outputImg';
  //     img.src = this.state.gifAnimation;
  //     img.width = outputImgWidth;
  //     img.height = outputImgHeight;

  //     //set a style to outputScreen
  //     this.outputScreen.style.padding = 0;
  //     this.outputScreen.style.border = 'none';
  //     this.outputScreen.appendChild(img);
  //     this.outputScreen.classList.remove('output-hide');
  //     this.outputScreen.classList.add('output-show');

  //     //show the div which has down-to-here-hide class
  //     //so that scroll down to the download button
  //     const downToHere = document.getElementById('down-to-here');
  //     downToHere.classList.remove('down-to-here-hide');
  //     downToHere.classList.add('down-to-here-show');

  //     //scroll down to the top of the output screen
  //     this.ScrollDown();

  //     //when it finish creating GIF erase the old snap bar and show new one
  //     this.props.closeNotification('info', 'Creating GIF...');
  //     this.props.setNotification('info', 'Done!');

  //     //shows a download button
  //     this.donwloadBtn.classList.remove('hide');
  //   } else {
  //     return;
  //   }
  // };

  // ScrollDown = () => {
  //   const rect = document
  //     .getElementById('down-to-here')
  //     .getBoundingClientRect();
  //   // const rect = this.outputScreen.getBoundingClientRect();
  //   const position = rect.top;
  //   window.scrollTo(0, position);
  // };

  render() {
    return (
      <div id="container">
        {/* <ModalWindow /> */}
        <ProductHuntStecker />
        <Notification />
        <Header />

        <div id="inner">
          <Step1 />

          <Step2Container />

          <div className="wrapper-by-step">
            <Description
              step="3"
              title="Download the GIF animation you've created. You can share it on Twitter, Facebook, chat apps or wherever you want!🎉"
            />
            <OutputScreen />
            <Download href={store.getState().gifAnimationURL} />
            <div id="down-to-here" className="down-to-here-hide"></div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
