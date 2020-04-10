import React, { Component } from 'react';
import store from '../reducers/store';

class BackgroundColorPickerButton extends Component {
  state = {
    buttonContent: 'Open the color picker'
  };

  componentDidUpdate(prevState) {
    if (this.state.buttonContent !== prevState.buttonContent) {
      console.log('state is changed!!!');
    }
  }
  handleSketchPicker = e => {
    if (store.getState().isColorPicker) {
      this.props.isColorPickerFalse();
      console.log(`isColorPicker: ${store.getState().isColorPicker}`);
      this.setState({ buttonContent: 'Open the color picker' });
    } else {
      this.props.isColorPickerTrue();
      console.log(`isColorPicker: ${store.getState().isColorPicker}`);
      this.setState({ buttonContent: 'Close the color picker' });
    }
  };

  render() {
    return (
      <button onClick={this.handleSketchPicker}>
        {this.state.buttonContent}
      </button>
    );
  }
}

export default BackgroundColorPickerButton;
