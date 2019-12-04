import React from "react";
import "./PushBtn.css";

const PushBtn = props => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className={props.class} id={props.id} onClick={props.action}>
      {props.name}
    </a>
  );
};

export default PushBtn;
