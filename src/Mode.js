import React, { Component } from "react";
import "./Mode.css";

class Mode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "note"
    };
    this.isMode = this.isMode.bind(this);
  }

  isMode = e => {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
    return this.state.value;
  };

  render() {
    return (
      <div class="selectdiv">
        <select
          value={this.state.value}
          name="display-mode"
          onChange={this.isMode}
          id="mode"
        >
          <option value="developer">Developer</option>
          <option value="neon" selected>
            Neon
          </option>
          <option value="note">Note</option>
          <option value="pop">Pop</option>
        </select>
      </div>
    );
  }
}

export default Mode;
