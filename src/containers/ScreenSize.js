import React, { Component } from "react";
import "../components/Mode.css";

class ScreenSize extends Component {
  handleScreenSize = e => {
    this.props.onScreenSizeChange(e);
  };

  render() {
    const ScreenSizeVal = this.props.size;
    return (
      <div className="selectdiv">
        <select
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
