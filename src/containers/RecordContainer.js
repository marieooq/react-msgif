import { connect } from "react-redux";
import { startRec, changeTextAreaVal } from "../actions";
import Record from "./Record";

const mapStateToProps = state => {
  return {
    isRec: state.isRec,
    textAreaVal: state.textAreaVal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startRec: () => dispatch(startRec),
    changeTextAreaVal: text => dispatch(changeTextAreaVal(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Record);
