import React from "react";
import Loading from "./Loading";
import "./Screen.css";

const returnScreen = props => {
  if (props.status === "loading") {
    return (
      <div className="screen" id={props.id}>
        <Loading />
      </div>
    );
  } else {
    return <div className="screen" id={props.id}></div>;
  }
};

const Screen = props => {
  return returnScreen(props);
};

export default Screen;
