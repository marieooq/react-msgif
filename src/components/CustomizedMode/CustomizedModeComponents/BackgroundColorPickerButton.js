import React, { Component } from 'react';
import store from '../../../reducers/store';
import './ColorPicker.css';

class BackgroundColorPickerButton extends Component {
  state = {
    buttonContent: 'Background color picker'
  };

  handleSketchPicker = e => {
    if (store.getState().isBackgroundColorPicker) {
      this.props.isBackgroundColorPickerFalse();
      this.setState({ buttonContent: 'Background color picker' });
    } else {
      this.props.isBackgroundColorPickerTrue();
      this.setState({ buttonContent: 'Close the background color picker' });
    }
  };

  render() {
    return (
      <button onClick={this.handleSketchPicker} className="color_picker_button">
        {this.state.buttonContent}
      </button>
    );
  }
}

export default BackgroundColorPickerButton;
