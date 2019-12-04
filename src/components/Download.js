import React from "react";
import "./Download.css";

const Download = props => {
  return (
    <div id="download-btn-wrapper">
      <a
        href={props.href}
        id="ssgif"
        className="download-btn hide"
        download="messagif.gif"
      >
        DOWNLOAD
      </a>
    </div>
  );
};

export default Download;
