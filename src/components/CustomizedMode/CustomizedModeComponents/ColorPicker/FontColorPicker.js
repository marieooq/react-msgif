import React from 'react';
import store from '../../../../reducers/store';
import { SketchPicker } from 'react-color';

const FontColorPicker = (props) => {
  const handleChangeComplete = color => {
    props.changeCustomizedFontColor(color.hex);
  };

  if (store.getState().isFontColorPicker) {
    return (
      <SketchPicker
        color={store.getState().customizedFontColor}
        onChangeComplete={handleChangeComplete}
        disableAlpha={true}
        style={{ zIndex: '100' }}
      />
    );
  } else {
    return <></>;
  }
}

export default FontColorPicker;
