import React, { Component } from "react";
import store from "../reducers/store";
import changeScreenSize from "./changeScreenSize";
import "../components/Mode.css";

class ScreenSize extends Component {
  componentDidUpdate(prevState) {
    if (store.getState().screenSize !== prevState.screenSize) {
      changeScreenSize(store.getState().screenSize);
    }
  }

  handleScreenSize = e => {
    this.props.changeScreenSize(e.target.value);
    changeScreenSize(store.getState().screenSize);
  };

  render() {
    const ScreenSizeVal = this.props.size;
    return (
      <div className="selectdiv">
        <select
          size={store.getState().screenSize}
          value={ScreenSizeVal}
          name="screen-size"
          onChange={this.handleScreenSize}
          id="ScreenSize"
        >
          <option value="twitter">Twitter(W:512 × H:256)</option>
          <option value="social">Social Media(W:400 × H:400)</option>
        </select>
      </div>
    );
  }
}

export default ScreenSize;
