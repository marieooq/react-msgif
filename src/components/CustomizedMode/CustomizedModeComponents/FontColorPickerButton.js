import React, { useState } from 'react';
import store from '../../../reducers/store';
import './ColorPickerButton.css';

 const FontColorPickerButton = (props) => {

 const [buttonContent, setButtonContent] = useState('Font color picker');

  const handleSketchPicker = e => {
    if (store.getState().isFontColorPicker) {
      props.isFontColorPickerFalse();
      setButtonContent('Font color picker');
    } else {
      props.isFontColorPickerTrue();
      setButtonContent('Close the font color picker');
    }
  };

  return (
    <button
      onClick={handleSketchPicker}
      className="color_picker_button "
    >
      {buttonContent}
    </button>
  );
}

export default FontColorPickerButton;