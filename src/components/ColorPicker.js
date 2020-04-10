import React, { Component } from 'react';
import store from '../reducers/store';
import './Mode.css';
import { SketchPicker } from 'react-color';
import { blockParams } from 'handlebars';

class ColorPicker extends React.Component {
  state = {
    background: '#fff'
  };

  // componentDidMount() {
  //   console.log(store.getState().isColorPicker);
  // }

  // componentDidUpdate() {
  //   console.log(store.getState().isColorPicker);
  // }

  handleChangeComplete = color => {
    this.setState({ background: color.hex });
    console.log(this.state.background);
  };

  // handleSketchPicker = e => {
  //   console.log('clicked!');
  //   if (store.getState().isColorPicker) {
  //     this.props.isColorPickerFalse();
  //     console.log(`isColorPicker: ${store.getState().isColorPicker}`);
  //   } else {
  //     this.props.isColorPickerTrue();
  //     console.log(`isColorPicker: ${store.getState().isColorPicker}`);
  //   }
  // };

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
