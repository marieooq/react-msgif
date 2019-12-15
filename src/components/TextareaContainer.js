import { connect } from "react-redux";
import {
  startRec,
  endRec,
  changeTextAreaVal,
  setNotification,
  closeNotification
} from "../actions";
import Textarea from "./Textarea";

const mapStateToProps = state => {
  return {
    isRec: state.isRec,
    textAreaVal: state.textAreaVal,
    NotificationReducer: state.NotificationReduce
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startRec: () => dispatch(startRec),
    endRec: () => dispatch(endRec),
    changeTextAreaVal: text => dispatch(changeTextAreaVal(text)),
    setNotification: (variant, message) =>
      dispatch(setNotification(variant, message)),
    closeNotification: (variant, message) =>
      dispatch(closeNotification(variant, message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Textarea);
