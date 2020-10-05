import React, { Component } from 'react';
import Description from './Description';
import Note from './Note';
import RecordResetContainer from '../containers/RecordResetContainer';
import CreateGif from '../containers/CreateGif';
import TextareaContainer from './TextareaContainer';
import store from '../reducers/store';
import html2canvas from 'html2canvas';
/* eslint-disable no-undef */
// import GIFEncoder from "../GIFEncoder";
import encode64 from '../b64';

class Step2 extends Component {
  // state = {
  //   gifAnimation: ''
  // };

  textArea;
  outputScreen;
  donwloadBtn;

  componentDidMount() {
    this.textArea = document.getElementById('textareaMsg');
    //excecute if the width of window is less than 480px
    const mq480 = window.matchMedia('(max-width: 480px)');
    this.handleMediaQuery(mq480, this.props.mqFlagTrue, this.props.mqFlagFalse);
    mq480.addListener(this.handleMediaQuery);

    this.outputScreen = document.getElementById('output');

    this.donwloadBtn = document.getElementById('ssgif');
  }

  handleMediaQuery = mq => {
    const docStyle = document.documentElement.style;

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
      y: this.textArea.offsetTop,
      backgroundColor: store.getState().marginBackgroundColor,
      scale: 1
    });
    const imgData = textAreaCanvas.toDataURL();
    const imgTag = document.createElement('img');
    imgTag.src = imgData;
    this.props.pushToFrames(imgTag);
  };

  ScrollDown = () => {
    const rect = document
      .getElementById('down-to-here')
      .getBoundingClientRect();
    // const rect = this.outputScreen.getBoundingClientRect();
    const position = rect.top;
    window.scrollTo(0, position);
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

      // this.setState({
      //   gifAnimation:
      //     'data:image/gif;base64,' + encode64(encoder.stream().getData())
      // });

      this.props.setGifAnimationURL(
        'data:image/gif;base64,' + encode64(encoder.stream().getData())
      );

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
      img.src = store.getState().gifAnimationURL;
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

  render() {
    return (
      <div className="wrapper-by-step">
        <Description
          step="2"
          title="Press the Record button and type your message in the text area below. Once you finish typing, press the Create GIF button.👆"
        />
        <Note
          number="1"
          noteDescription="It's a demo unless you press the Record button."
          id="note_about_record"
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
    );
  }
}

export default Step2;
