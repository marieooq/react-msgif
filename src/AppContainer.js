import { connect } from "react-redux";
import { startRec, endRec, changeTextAreaVal, changeMode } from "./actions";
import App from "./App";

const mapStateToProps = state => {
  return {
    isRec: state.isRec,
    textAreaVal: state.textAreaVal,
    mode: state.mode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startRec: () => dispatch(startRec),
    endRec: () => dispatch(endRec),
    changeTextAreaVal: text => dispatch(changeTextAreaVal(text)),
    changeMode: text => dispatch(changeMode(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
