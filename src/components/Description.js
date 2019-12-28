import React from "react";
import "./Description.css";

const Description = props => {
  return (
    <>
      <p>
        STEP{props.step}: {props.title}
      </p>
    </>
  );
};

export default Description;
