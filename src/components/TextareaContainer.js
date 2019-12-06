import { connect } from "react-redux";
import { startRec, endRec, changeTextAreaVal } from "../actions";
import Textarea from "./Textarea";

const mapStateToProps = state => {
  return {
    isRec: state.isRec,
    textAreaVal: state.textAreaVal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startRec: () => dispatch(startRec),
    endRec: () => dispatch(endRec),
    changeTextAreaVal: text => dispatch(changeTextAreaVal(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Textarea);
