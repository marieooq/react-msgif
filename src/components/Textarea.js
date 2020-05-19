import React, { Component } from 'react';
import store from '../reducers/store';
import './Textarea.css';

class Textarea extends Component {
  textAreaScreen;
  componentDidMount() {
    this.textAreaScreen = document.getElementById('textareaMsg');
    const note_about_record = document.getElementById('note_about_record');

    this.textAreaScreen.addEventListener('input', async () => {
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

        this.props.changeTextAreaVal(this.textAreaScreen.textContent);
      }
    });
  }

  render() {
    return <div id="textareaMsg" contentEditable="true"></div>;
  }
}

export default Textarea;
