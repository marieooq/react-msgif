import React, { Component } from 'react';
import store from '../../../reducers/store';
import './ColorPickerButton.css';

class FontColorPickerButton extends Component {
  state = {
    buttonContent: 'Font color picker'
  };

  componentDidUpdate(prevState) {
    if (this.state.buttonContent !== prevState.buttonContent) {
    }
  }
  handleSketchPicker = e => {
    if (store.getState().isFontColorPicker) {
      this.props.isFontColorPickerFalse();
      this.setState({ buttonContent: 'Font color picker' });
    } else {
      this.props.isFontColorPickerTrue();
      this.setState({ buttonContent: 'Close the font color picker' });
    }
  };

  render() {
    return (
      <button
        onClick={this.handleSketchPicker}
        className="color_picker_button "
      >
        {this.state.buttonContent}
      </button>
    );
  }
}

export default FontColorPickerButton;
