import { connect } from "react-redux";
import { changeScreenSize, mqFlagTrue, mqFlagFalse } from "../actions";
import ScreenSize from "./ScreenSize";

const mapStateToProps = state => {
  return {
    screenSize: state.screenSize,
    mqFlag: state.mqFlag
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeScreenSize: text => dispatch(changeScreenSize(text)),
    mqFlagTrue: () => dispatch(mqFlagTrue()),
    mqFlagFalse: () => dispatch(mqFlagFalse())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenSize);
