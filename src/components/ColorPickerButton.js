import React, { Component } from 'react';
import store from '../reducers/store';

class ColorPickerButton extends Component {
  handleSketchPicker = e => {
    if (store.getState().isColorPicker) {
      this.props.isColorPickerFalse();
      console.log(`isColorPicker: ${store.getState().isColorPicker}`);
    } else {
      this.props.isColorPickerTrue();
      console.log(`isColorPicker: ${store.getState().isColorPicker}`);
    }
  };

  render() {
    return (
      <button onClick={this.handleSketchPicker}>
        Pick up backgrond color.
      </button>
    );
  }
}

export default ColorPickerButton;
