import React from "react";
import "./Description.css";

const returnNote = props => {
  if (props.note === "true") {
    return <p class="note-description">NOTE: {props.noteDescription}</p>;
  } else {
    return;
  }
};
const Description = props => {
  return (
    <>
      <p>
        STEP{props.step}: {props.title}
      </p>
      {returnNote(props)}
    </>
  );
};

export default Description;
