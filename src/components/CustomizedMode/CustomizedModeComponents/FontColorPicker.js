import React from 'react';
import store from '../../../reducers/store';
import '../../Mode.css';
import { SketchPicker } from 'react-color';

class FontColorPicker extends React.Component {
  handleChangeComplete = color => {
    console.log(`inside FontColorPicker: ${color.hex}`);
    this.props.changeCustomizedFontColor(color.hex);
    console.log(
      `store.getState().customizedFontColor: ${
        store.getState().customizedFontColor
      }`
    );
  };

  render() {
    if (store.getState().isFontColorPicker) {
      return (
        <SketchPicker
          color={store.getState().customizedFontColor}
          onChangeComplete={this.handleChangeComplete}
          disableAlpha={true}
          style={{ zIndex: '100' }}
        />
      );
    } else {
      return <></>;
    }
  }
}

export default FontColorPicker;
