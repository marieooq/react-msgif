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
    let container = document.getElementById("container");
    let header = document.getElementById("header");
    let left = document.getElementById("left");
    let leftLeft = document.getElementById("left-left");
    let leftRight = document.getElementById("left-right");
    let textArea = document.getElementById("textareaMsg");
    let right = document.getElementById("right");

    if (size === "twitter") {
      container.style.width = "1080px";
      // header.style.marginTop = "15px";
      left.style.width = "512px";
      left.style.display = "block";
      left.style.justifyContent = "";
      leftLeft.style.width = "100%";
      leftRight.style.width = "100%";
      textArea.style.marginTop = "0px";
      right.style.width = "512px";
      docStyle.setProperty("--screenWidth", "512px");
      docStyle.setProperty("--screenHeight", "256px");
    } else if (size === "social") {
      container.style.width = "1280px";
      // header.style.marginTop = "60px";
      left.style.width = "840px";
      left.style.display = "flex";
      left.style.justifyContent = "space-between";
      leftLeft.style.width = "400px";
      leftRight.style.width = "400px";
      textArea.style.marginTop = "20px";
      right.style.width = "400px";
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
