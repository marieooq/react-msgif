import React, { Component } from 'react';
import store from '../../../reducers/store';

class BackgroundColorPickerButton extends Component {
  state = {
    buttonContent: 'Open the BACKGROUND COLOR picker'
  };

  componentDidUpdate(prevState) {
    if (this.state.buttonContent !== prevState.buttonContent) {
      console.log('state is changed!!!');
    }
  }
  handleSketchPicker = e => {
    if (store.getState().isBackgroundColorPicker) {
      this.props.isBackgroundColorPickerFalse();
      console.log(
        `isBackgroundColorPicker: ${store.getState().isBackgroundColorPicker}`
      );
      this.setState({ buttonContent: 'Open the BACKGROUND COLOR picker' });
    } else {
      this.props.isBackgroundColorPickerTrue();
      console.log(
        `isBackgroundColorPicker: ${store.getState().isBackgroundColorPicker}`
      );
      this.setState({ buttonContent: 'Close the BACKGROUND COLOR picker' });
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
