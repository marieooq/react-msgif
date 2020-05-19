import React from 'react';
import store from '../../../../reducers/store';
import { SketchPicker } from 'react-color';

class FontColorPicker extends React.Component {
  handleChangeComplete = color => {
    this.props.changeCustomizedFontColor(color.hex);
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
