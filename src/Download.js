import React, { Component } from "react";
import "./Download.css";

class Download extends Component {
  render() {
    return (
      <div id="download-btn-wrapper">
        <a
          href={this.props.href}
          id="ssgif"
          className="download-btn hide"
          download="messagif.gif"
        >
          DOWNLOAD
        </a>
      </div>
    );
  }
}

export default Download;
