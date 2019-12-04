import React, { Component } from "react";
import "./Mode.css";

class Mode extends Component {
  state = {
    mode: "note"
  };

  componentDidUpdate(prevState) {
    if (this.state.mode !== prevState.mode) {
      this.props.onSwitchMode(this.state.mode);
    }
  }

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
