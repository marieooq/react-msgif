import { connect } from "react-redux";
import {
  startRec,
  endRec,
  changeTextAreaVal,
  changeMode,
  captureCountIncrement,
  captureCountDecrement,
  createGifCountIncrement,
  createGifCountDecrement,
  pushToFrames,
  deleteAllFromFrames,
  setNotification,
  closeNotification
} from "../actions";
import Record from "./Record";

const mapStateToProps = state => {
  return {
    isRec: state.isRec,
    textAreaVal: state.textAreaVal,
    mode: state.mode,
    captureCount: state.captureCount,
    createGifCount: state.createGifCount,
    frames: state.frames,
    NotificationReducer: state.NotificationReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startRec: () => dispatch(startRec),
    endRec: () => dispatch(endRec),
    changeTextAreaVal: text => dispatch(changeTextAreaVal(text)),
    changeMode: text => dispatch(changeMode(text)),
    captureCountIncrement: () => dispatch(captureCountIncrement()),
    captureCountDecrement: () => dispatch(captureCountDecrement()),
    createGifCountIncrement: () => dispatch(createGifCountIncrement()),
    createGifCountDecrement: () => dispatch(createGifCountDecrement()),
    pushToFrames: image => dispatch(pushToFrames(image)),
    deleteAllFromFrames: () => dispatch(deleteAllFromFrames()),
    setNotification: (variant, message) =>
      dispatch(setNotification(variant, message)),
    closeNotification: (variant, message) =>
      dispatch(closeNotification(variant, message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Record);
