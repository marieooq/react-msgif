import React, { Component } from "react";
import "../components/Mode.css";

class ScreenSize extends Component {
  state = {
    size: "twitter"
  };

  componentDidUpdate(prevState) {
    if (this.state.size !== prevState.size) {
      this.changeScreenSize(this.state.size);
    }
  }

  changeScreenSize(size) {
    let docStyle = document.documentElement.style;
    let inner = document.getElementById("inner");

    if (size === "twitter") {
      docStyle.setProperty("--screenWidth", "512px");
      docStyle.setProperty("--screenHeight", "256px");
    } else if (size === "social") {
      docStyle.setProperty("--screenWidth", "400px");
      docStyle.setProperty("--screenHeight", "400px");
    }
  }

  handleScreenSize = e => {
    this.setState({ size: e.target.value });
    this.changeScreenSize(e);
  };

  render() {
    const ScreenSizeVal = this.props.size;
    return (
      <div className="selectdiv">
        <select
          size={this.state.size}
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
