import React, { Component } from "react";
import store from "../reducers/store";
import "./Textarea.css";
// import { log } from "handlebars";

class Textarea extends Component {
  textAreaScreen;
  componentDidMount() {
    this.textAreaScreen = document.getElementById("textareaMsg");

    this.textAreaScreen.addEventListener("input", async () => {
      if (store.getState().isRec) {
        console.log(`store.getState().isRec: ${store.getState().isRec}`);
        console.log("input something!");
        await this.props.captureScreen();
      } else {
        console.log(`store.getState().isRec: ${store.getState().isRec}`);
        //when it's creating GIF show a snap bar
        this.props.setNotification(
          "warning",
          "It's a demo until you push the Record button."
        );
      }
    });
  }

  // displayMessage = () => {
  //   if (store.getState().isRec) {
  //     console.log(`store.getState().isRec: ${store.getState().isRec}`);
  //     const textAreaScreen = document.getElementById("textareaMsg");
  //     textAreaScreen.textContent = "";
  //     textAreaScreen.addEventListener("input", async () => {
  //       console.log("input something!");
  //       await this.props.captureScreen();
  //     });
  //   } else {
  //     console.log(`store.getState().isRec: ${store.getState().isRec}`);
  //     //when it's creating GIF show a snap bar
  //     this.props.setNotification(
  //       "warning",
  //       "It's a demo until you push the Record button."
  //     );
  //   }
  // };

  render() {
    return <div id="textareaMsg" contentEditable="true"></div>;
  }
}

export default Textarea;
