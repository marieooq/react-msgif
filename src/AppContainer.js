import { connect } from "react-redux";
import { startRec, endRec } from "./actions";
import App from "./App";

const mapStateToProps = state => {
  return {
    isRec: state.isRec
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startRec: () => dispatch(startRec),
    endRec: () => dispatch(endRec)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
