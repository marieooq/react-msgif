import React from 'react';
import store from '../../reducers/store';
import BackgroundColorPickerButtonContainer from './CustomizedModeComponents/BackgroundColorPickerButtonContainer';
import FontColorPickerButtonContainer from './CustomizedModeComponents/FontColorPickerButtonContainer';
import './CustomizedMode.css';

const CustomizedMode = () => {
  if (store.getState().mode === 'customized') {
    return (
      <div className="color_picker_button_wrapper">
        <BackgroundColorPickerButtonContainer />
        <FontColorPickerButtonContainer />
      </div>
    );
  } else {
    return <></>;
  }
}

export default CustomizedMode;
