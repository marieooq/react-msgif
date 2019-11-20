import React, { Component } from "react";
import "./Mode.css";

class Mode extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: "note"
  //   };
  // }

  handleMode = e => {
    this.props.onModeChange(e);
  };

  render() {
    const modeVal = this.props.mode;
    return (
      <div className="selectdiv">
        <select
          value={modeVal}
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
