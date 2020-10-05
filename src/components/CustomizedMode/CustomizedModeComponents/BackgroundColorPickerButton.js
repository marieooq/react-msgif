import React, {useState} from 'react';
import store from '../../../reducers/store';
import './ColorPickerButton.css';

const BackgroundColorPickerButton = (props) =>{
  // state = {
  //   buttonContent: 'Background color picker'
  // };

  const [buttonContent, setbuttonContent] = useState('Background color picker');

  const handleSketchPicker = e => {
    if (store.getState().isBackgroundColorPicker) {
      props.isBackgroundColorPickerFalse();
      // setState({ buttonContent: 'Background color picker' });
      setbuttonContent('Background color picker' );
    } else {
      props.isBackgroundColorPickerTrue();
      // setState({ buttonContent: 'Close the background color picker' });
      setbuttonContent('Close the background color picker' );
    }
  };

  return (
    <button onClick={handleSketchPicker} className="color_picker_button">
      {buttonContent}
    </button>
  );
}

export default BackgroundColorPickerButton;
