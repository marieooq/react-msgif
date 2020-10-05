import React, { Component } from 'react';
import '../components/Mode.css';
import store from '../reducers/store';
// import handleMediaQuery from "./handleMediaQuery";

class ScreenSize extends Component {
  componentDidUpdate(prevState) {
    //excecute if the width of window is less than 480px
    const mq480 = window.matchMedia('(max-width: 480px)');
    if (store.getState().screenSize !== prevState.screenSize) {
      this.handleMediaQuery(mq480);
    }
  }

  handleMediaQuery = mq => {
    const docStyle = document.documentElement.style;

    if (mq.matches) {
      this.props.mqFlagTrue();
      if (store.getState().screenSize === 'twitter') {
        docStyle.setProperty('--screenWidth', '256px');
        docStyle.setProperty('--screenHeight', '128px');
      } else if (store.getState().screenSize === 'social') {
        docStyle.setProperty('--screenWidth', '200px');
        docStyle.setProperty('--screenHeight', '200px');
      }
    } else {
      this.props.mqFlagFalse();
      if (store.getState().screenSize === 'twitter') {
        docStyle.setProperty('--screenWidth', '512px');
        docStyle.setProperty('--screenHeight', '256px');
      } else if (store.getState().screenSize === 'social') {
        docStyle.setProperty('--screenWidth', '400px');
        docStyle.setProperty('--screenHeight', '400px');
      }
    }
  };

  handleScreenSize = e => {
    this.props.changeScreenSize(e.target.value);
  };

  render() {
    const ScreenSizeVal = this.props.size;
    return (
      <div className="selectdiv">
        <label htmlFor="select_screen_size">Screen size</label>
        <select
          size={store.getState().screenSize}
          value={ScreenSizeVal}
          name="screen-size"
          onChange={this.handleScreenSize}
          id="select_screen_size"
        >
          <option value="twitter">Twitter(W:512 × H:256)</option>
          <option value="social">Social Media(W:400 × H:400)</option>
        </select>
      </div>
    );
  }
}

export default ScreenSize;
