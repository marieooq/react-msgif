import { connect } from "react-redux";
import { changeTextAreaVal } from "../actions";
import Textarea from "./Textarea";

const mapStateToProps = state => {
  return {
    textAreaVal: state.textAreaVal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTextAreaVal: text => dispatch(changeTextAreaVal(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Textarea);
