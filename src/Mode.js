import React, { Component } from "react";
import "./Mode.css";

class Mode extends Component {
  render() {
    return (
      <div class="selectdiv">
        <select name="display-mode" onchange="isMode()" id="mode">
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
