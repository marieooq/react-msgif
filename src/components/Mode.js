import React, { Component } from "react";
import "./Mode.css";

class Mode extends Component {
  state = {
    mode: "note"
  };

  displayScreen;

  componentDidMount() {
    this.displayScreen = document.getElementById("display-screen");
  }

  componentDidUpdate(prevState) {
    if (this.state.mode !== prevState.mode) {
      this.switchMode(this.state.mode);
    }
  }
  switchMode = mode => {
    switch (mode) {
      case "developer":
        this.changeTextColor(mode);
        this.changeTextShadow(mode);
        this.changeFontFamily(mode);
        this.changeBackground(mode);
        break;

      case "neon":
        this.changeTextColor(mode);
        this.changeTextShadow(mode);
        this.changeFontFamily(mode);
        this.changeBackground(mode);
        break;

      case "note":
        this.changeTextColor(mode);
        this.changeTextShadow(mode);
        this.changeFontFamily(mode);
        this.changeBackground(mode);
        break;

      case "pop":
        this.changeTextColor(mode);
        this.changeTextShadow(mode);
        this.changeFontFamily(mode);
        this.changeBackground(mode);
        break;

      default:
        console.log("isMode returns undefined");
    }
  };

  changeTextColor = mode => {
    this.displayScreen.classList.add("coloredText");
    const coloredTextClass = document.getElementsByClassName("coloredText");

    for (let i = 0; i < coloredTextClass.length; i++) {
      switch (mode) {
        case "developer":
          coloredTextClass[i].style.color = "#00c200";
          break;

        case "neon":
          coloredTextClass[i].style.color = "#fff";
          break;

        case "note":
          coloredTextClass[i].style.color = "#292929";
          break;

        case "pop":
          coloredTextClass[i].style.color = "#292929";
          break;

        default:
          console.log("mode is undefined");
      }
    }
  };

  changeTextShadow = mode => {
    const returnRanNum = () => {
      const runNum = Math.floor(Math.random() * 360);
      return runNum;
    };

    const returnRgb = () => {
      let rgb = `rgb(${returnRanNum()}, ${returnRanNum()}, ${returnRanNum()})`;
      return rgb;
    };

    if (mode === "neon") {
      this.displayScreen.classList.add("textShadow");
      const textShadowClass = document.getElementsByClassName("textShadow");
      for (let i = 0; i < textShadowClass.length; i++) {
        textShadowClass[i].style.textShadow = `2px 2px 15px ${returnRgb()}`;
      }
    } else {
      if (this.displayScreen.className.includes("textShadow")) {
        this.displayScreen.classList.remove("textShadow");
      }
      this.displayScreen.style.textShadow = "";
    }
  };

  changeFontFamily = mode => {
    switch (mode) {
      case "developer":
        this.displayScreen.style.fontFamily = '"Ubuntu Mono", monospace';
        break;

      case "neon":
        this.displayScreen.style.fontFamily = '"Lobster", cursive';
        break;

      case "note":
        this.displayScreen.style.fontFamily = '"Noto Serif", serif';
        break;

      case "pop":
        if (this.state.isComposing) {
          this.displayScreen.style.fontFamily = "'Kosugi Maru', sans-serif";
        } else {
          this.displayScreen.style.fontFamily = "'Anton', sans-serif";
        }

        break;

      default:
        console.log("mode is undefined");
    }
  };

  changeBackground = mode => {
    switch (mode) {
      case "developer":
        this.displayScreen.style.backgroundColor = "rgb(12, 5, 32)";
        break;

      case "neon":
        this.displayScreen.style.backgroundColor = "rgb(12, 5, 32)";
        break;

      case "note":
        this.displayScreen.style.backgroundColor = "#fff";
        break;

      case "pop":
        this.displayScreen.style.backgroundColor = "#fef734";
        break;

      default:
        console.log("mode is undefined");
    }
  };

  handleMode = e => {
    this.setState({ mode: e.target.value });
  };

  render() {
    return (
      <div className="selectdiv">
        <select
          value={this.state.mode}
          name="display-mode"
          onChange={this.handleMode}
          id="mode"
        >
          <option value="developer">Developer</option>
          <option value="neon">Neon</option>
          <option value="note">Note</option>
          <option value="pop">Pop</option>
        </select>
      </div>
    );
  }
}

export default Mode;