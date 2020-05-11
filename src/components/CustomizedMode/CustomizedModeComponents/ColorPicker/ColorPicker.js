import React from 'react';
import BackgroundColorPickerContainer from './BackgroundColorPickerContainer';
import FontColorPickerContainer from './FontColorPickerContainer';
import './ColorPicker.css';

const ColorPickerWrapper = () => {
  return (
    <div className="color_picker_wrapper">
      <BackgroundColorPickerContainer />
      <FontColorPickerContainer />
    </div>
  );
};

export default ColorPickerWrapper;
