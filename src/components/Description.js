import React from "react";
import "./Description.css";

const Description = props => {
  return (
    <>
      <h2>
        STEP{props.chapter}: {props.title}
      </h2>
    </>
  );
};

export default Description;
