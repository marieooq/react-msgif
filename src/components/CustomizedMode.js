import React, { Component } from 'react';
import store from '../reducers/store';
import './Mode.css';
import { SketchPicker } from 'react-color';

class CustomizedMode extends React.Component {
  state = {
    background: '#fff'
  };

  handleChangeComplete = color => {
    this.setState({ background: color.hex });
    console.log(this.state.background);
  };

  render() {
    return (
      <SketchPicker
        color={this.state.background}
        onChangeComplete={this.handleChangeComplete}
      />
    );
  }
}

export default CustomizedMode;
