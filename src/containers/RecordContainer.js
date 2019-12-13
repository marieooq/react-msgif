import { connect } from "react-redux";
import {
  startRec,
  endRec,
  changeTextAreaVal,
  captureCountIncrement,
  captureCountDecrement,
  createGifCountIncrement,
  createGifCountDecrement
} from "../actions";
import Record from "./Record";

const mapStateToProps = state => {
  return {
    isRec: state.isRec,
    textAreaVal: state.textAreaVal,
    captureCount: state.captureCount,
    createGifCount: state.createGifCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startRec: () => dispatch(startRec),
    endRec: () => dispatch(endRec),
    changeTextAreaVal: text => dispatch(changeTextAreaVal(text)),
    captureCountIncrement: () => dispatch(captureCountIncrement()),
    captureCountDecrement: () => dispatch(captureCountDecrement()),
    createGifCountIncrement: () => dispatch(createGifCountIncrement()),
    createGifCountDecrement: () => dispatch(createGifCountDecrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Record);
