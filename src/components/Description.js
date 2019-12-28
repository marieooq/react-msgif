import React from "react";
import "./Description.css";

const Description = props => {
  return (
    <>
      <h3>
        STEP{props.step}: {props.title}
      </h3>
    </>
  );
};

export default Description;
