import React from 'react';
import store from '../../../../reducers/store';
import { SketchPicker } from 'react-color';

class BackgroundColorPicker extends React.Component {
  handleChangeComplete = color => {
    this.props.changeCustomizedBackgroundColor(color.hex);
    console.log(
      `store.getState().customizedBackgroundColor : ${
        store.getState().customizedBackgroundColor
      }`
    );
  };

  render() {
    if (store.getState().isBackgroundColorPicker) {
      return (
        <SketchPicker
          color={store.getState().customizedBackgroundColor}
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

export default BackgroundColorPicker;
