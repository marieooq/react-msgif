import { connect } from "react-redux";
import { changeMode } from "../actions";
import Mode from "./Mode";

const mapStateToProps = state => {
  return {
    mode: state.mode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMode: text => dispatch(changeMode(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mode);
