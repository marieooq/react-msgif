import { connect } from "react-redux";
import { changeCreateGifCount, addImageToFrames } from "../actions";
import Capture from "./Capture";

const mapStateToProps = state => {
  return {
    // isRec: state.isRec,
    // textAreaVal: state.textAreaVal,
    // captureCount: state.captureCount,
    createGifCount: state.createGifCount,
    frames: state.frames
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCreateGifCount: num => dispatch(changeCreateGifCount(num)),
    addImageToFrames: img => dispatch(addImageToFrames(img))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Capture);
