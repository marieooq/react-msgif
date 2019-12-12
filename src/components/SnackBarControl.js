import React from "react";
import "@material/react-snackbar/dist/snackbar.css";
import { Snackbar } from "@material/react-snackbar";

// const obj = {
//   default : true
//   message: "",
//   time: ""
// };

const SnackBarControl = props => {
  if (props.obj.default) {
    return;
  } else {
    return (
      <Snackbar
        message={props.obj.message}
        actionText="close"
        timeoutMs={props.obj.time}
        leading="true"
      />
    );
  }
};

export default SnackBarControl;
