import React from 'react';
import './Note.css';

const Note = props => {
  return (
    <>
      <p className="note-description" id={props.id}>
        Note{props.number}: {props.noteDescription}
      </p>
    </>
  );
};

export default Note;
