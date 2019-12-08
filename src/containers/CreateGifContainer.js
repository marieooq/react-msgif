import { connect } from "react-redux";
import {
  endRec,
  changeTextAreaVal,
  changeCaptureCount,
  changeCreateGifCount
} from "../actions";
import CreateGif from "./CreateGif";

const mapStateToProps = state => {
  return {
    // isRec: state.isRec,
    // textAreaVal: state.textAreaVal,
    // captureCount: state.captureCount,
    createGifCount: state.createGifCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // endRec: () => dispatch(endRec),
    // changeTextAreaVal: text => dispatch(changeTextAreaVal(text)),
    // changeCaptureCount: num => dispatch(changeCaptureCount(num)),
    changeCreateGifCount: num => dispatch(changeCreateGifCount(num))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGif);
