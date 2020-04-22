import React, { Component } from 'react';
import store from '../../reducers/store';
import BackgroundColorPickerButtonContainer from './CustomizedModeComponents/BackgroundColorPickerButtonContainer';
import FontColorPickerButtonContainer from './CustomizedModeComponents/FontColorPickerButtonContainer';

class CustomizedMode extends Component {
  render() {
    return (
      <div>
        <BackgroundColorPickerButtonContainer />
        <FontColorPickerButtonContainer />
      </div>
    );
  }
}

export default CustomizedMode;
