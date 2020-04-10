import React, { Component } from 'react';
import store from '../reducers/store';
import './Mode.css';
import { SketchPicker } from 'react-color';
import { blockParams } from 'handlebars';

class ColorPicker extends React.Component {
  state = {
    background: '#fff'
  };

  handleChangeComplete = color => {
    this.setState({ background: color.hex });
    console.log(this.state.background);
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
        color={this.state.background}
        onChangeComplete={this.handleChangeComplete}
        disableAlpha={true}
        style={{ zIndex: '100' }}
      />
    );
  }
}

export default ColorPicker;