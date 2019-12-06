import { connect } from "react-redux";
import { changeMode, changeTextAreaVal } from "../actions";
import Mode from "./Mode";

const mapStateToProps = state => {
  return {
    mode: state.mode,
    textAreaVal: state.textAreaVal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMode: text => dispatch(changeMode(text)),
    changeTextAreaVal: text => dispatch(changeTextAreaVal(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mode);
