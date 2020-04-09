import React, { Component } from 'react';
import store from '../reducers/store';
import './Mode.css';
import { SketchPicker } from 'react-color';

class CustomizedMode extends React.Component {
  render() {
    return <SketchPicker />;
  }
}

export default CustomizedMode;
