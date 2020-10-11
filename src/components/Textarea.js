import React, { Component, createRef } from 'react';
import store from '../reducers/store';
import './Textarea.css';

class Textarea extends Component {
  constructor(props){
    super(props);
    this.textAreaRef = createRef();
  }


  componentDidMount() {
    const note_about_record = document.getElementById('note_about_record');

    this.textAreaRef.current.addEventListener('input', async () => {
      if (store.getState().isRec) {
        await this.props.captureScreen();
        note_about_record.classList.remove('warning');
      } else {
        //when it's creating GIF show a snap bar

        note_about_record.classList.add('warning');
        this.props.setNotification(
          'warning',
          "It's a demo unless you push the Record button."
        );

        this.props.changeTextAreaVal(this.textAreaRef.current.textContent);
      }
    });
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

  render() {
    return <div id="textareaMsg" contentEditable="true" ref={this.textAreaRef} style={this.props.textAreaStyle}></div>;
  }
}

export default Textarea;
