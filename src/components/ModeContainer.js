import { connect } from 'react-redux';
import {
  changeMode,
  changeTextAreaVal,
  changeCustomizedBackgroundColor
} from '../actions';
import Mode from './Mode';

const mapStateToProps = state => {
  return {
    mode: state.mode,
    textAreaVal: state.textAreaVal,
    customizedBackgroundColor: state.customizedBackgroundColor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMode: text => dispatch(changeMode(text)),
    changeTextAreaVal: text => dispatch(changeTextAreaVal(text)),
    changeCustomizedBackgroundColor: text =>
      dispatch(changeCustomizedBackgroundColor(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mode);
