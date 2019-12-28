import React from "react";
import "./Note.css";

const Note = props => {
  return (
    <>
      <p className="note-description">NOTE: {props.noteDescription}</p>
    </>
  );
};

export default Note;
