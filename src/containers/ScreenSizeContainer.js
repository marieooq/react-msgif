import { connect } from "react-redux";
import { changeScreenSize } from "../actions";
import ScreenSize from "./ScreenSize";

const mapStateToProps = state => {
  return {
    screenSize: state.screenSize
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeScreenSize: text => dispatch(changeScreenSize(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenSize);
