import React, { Component } from "react";
import "./PushBtn.css";

class PushBtn extends Component {
  render() {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        href="#"
        className="btn-push default"
        id={this.props.id}
        onClick={this.props.action}
      >
        {this.props.name}
      </a>
    );
  }
}

export default PushBtn;
