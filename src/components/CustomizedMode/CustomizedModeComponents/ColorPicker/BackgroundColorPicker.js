import React from 'react';
import store from '../../../../reducers/store';
import { SketchPicker } from 'react-color';

const BackgroundColorPicker = (props) => {
  const handleChangeComplete = color => {
    props.changeCustomizedBackgroundColor(color.hex);
  };

  if (store.getState().isBackgroundColorPicker) {
    return (
      <SketchPicker
        color={store.getState().customizedBackgroundColor}
        onChangeComplete={handleChangeComplete}
        disableAlpha={true}
        style={{ zIndex: '100' }}
      />
    );
  } else {
    return <></>;
  }
}

export default BackgroundColorPicker;
