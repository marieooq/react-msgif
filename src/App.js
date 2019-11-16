import React from "react";
import logo from "./logo.svg";
import Screen from "./Screen";
import Mode from "./Mode";
import Textarea from "./Textarea";
import Record from "./Record";
import CreateGif from "./CreateGif";
import Download from "./Download";
import "./App.css";

function App() {
  return (
    <div id="container">
      <div id="inner">
        <Screen id="display-screen" />
        <Mode />
        <Textarea />
        <div className="btn-wrapper">
          <Record />
          <CreateGif />
        </div>
        <Screen id="output" />
        <Download />
      </div>
    </div>
  );
}

export default App;
