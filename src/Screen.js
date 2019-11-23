import React, { Component } from "react";
import Loading from "./Loading";
import "./Screen.css";

class Screen extends Component {
  returnScreen = status => {
    if (status === "loading") {
      return (
        <div className="screen" id={this.props.id}>
          <Loading />
        </div>
      );
    } else {
      return <div className="screen" id={this.props.id}></div>;
    }
  };

  render() {
    return this.returnScreen(this.props.status);
  }
}

export default Screen;
