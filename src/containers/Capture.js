import React, { Component } from "react";
import html2canvas from "html2canvas";

export default class Capture extends Component {
  captureScreen = async () => {
    if (this.captureCount === 0) {
      //shows the create gif button
      const createGifBtn = document.getElementById("createGif-btn");
      createGifBtn.classList.remove("hide");
      this.captureCount++;
    }

    //capture the canvas
    const canvas = await html2canvas(document.getElementById("display-screen"));
    const imgData = canvas.toDataURL();
    const imgTag = document.createElement("img");
    imgTag.src = `${imgData}`;
    this.props.addImageToFrames(imgTag);
  };
}
