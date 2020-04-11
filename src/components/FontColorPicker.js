import React, { Component } from 'react';
import store from '../reducers/store';
import './Mode.css';
import { SketchPicker } from 'react-color';
import { blockParams } from 'handlebars';

class FontColorPicker extends React.Component {
  state = {
    fontColor: '#fff'
  };

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
    return (
      <SketchPicker
        color={this.state.fontColor}
        onChangeComplete={this.handleChangeComplete}
        disableAlpha={true}
        style={{ zIndex: '100' }}
      />
    );
  }
}

export default FontColorPicker;
