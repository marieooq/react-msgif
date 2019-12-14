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
  deleteAllFromFrames
} from "../actions";
import Record from "./Record";

const mapStateToProps = state => {
  return {
    isRec: state.isRec,
    textAreaVal: state.textAreaVal,
    mode: state.mode,
    captureCount: state.captureCount,
    createGifCount: state.createGifCount,
    frames: state.frames
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
    deleteAllFromFrames: () => dispatch(deleteAllFromFrames())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Record);
