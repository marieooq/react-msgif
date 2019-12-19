import React, { Component } from "react";
import store from "../reducers/store";
import "../components/Mode.css";

class ScreenSize extends Component {
  componentDidUpdate(prevState) {
    if (store.getState().screenSize !== prevState.screenSize) {
      this.changeScreenSize(store.getState().screenSize);
    }
  }

  changeScreenSize(size) {
    let docStyle = document.documentElement.style;
    let inner = document.getElementById("inner");
    let side = document.getElementById("side");
    let logo = document.getElementById("logo");
    let left = document.getElementById("left");
    let leftLeft = document.getElementById("left-left");
    let leftRight = document.getElementById("left-right");
    let textArea = document.getElementById("textareaMsg");
    let right = document.getElementById("right");

    if (size === "twitter") {
      inner.style.width = "1080px";
      side.style.width = "15%";
      logo.style.width = "70px";
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
      inner.style.width = "1240px";
      side.style.width = "8%";
      logo.style.width = "60px";
      left.style.width = "820px";
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
    this.props.changeScreenSize(e.target.value);
    this.changeScreenSize(store.getState().screenSize);
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
