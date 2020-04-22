import React from 'react';
import store from '../../../reducers/store';
import '../../Mode.css';
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
    return (
      <SketchPicker
        color={store.getState().customizedBackgroundColor}
        onChangeComplete={this.handleChangeComplete}
        disableAlpha={true}
        style={{ zIndex: '100' }}
      />
    );
  }
}

export default BackgroundColorPicker;
