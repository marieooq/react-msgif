import React, { Component } from 'react';
import store from '../reducers/store';

class FontColorPickerButton extends Component {
  state = {
    buttonContent: 'Open the FONT COLOR picker'
  };

  componentDidUpdate(prevState) {
    if (this.state.buttonContent !== prevState.buttonContent) {
      console.log('state is changed!!!');
    }
  }
  handleSketchPicker = e => {
    if (store.getState().isBackgroundColorPicker) {
      this.props.isBackgroundColorPickerFalse();
      console.log(`isBackgroundColorPicker: ${store.getState().isBackgroundColorPicker}`);
      this.setState({ buttonContent: 'Open the FONT COLOR picker' });
    } else {
      this.props.isBackgroundColorPickerTrue();
      console.log(`isBackgroundColorPicker: ${store.getState().isBackgroundColorPicker}`);
      this.setState({ buttonContent: 'Close the FONT COLOR picker' });
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

export default FontColorPickerButton;
