import { connect } from 'react-redux';
import {
  changeMode,
  changeTextAreaVal,
  changeCustomizedBackgroundColor,
  changeCustomizedFontColor
} from '../actions';
import Mode from './Mode';

const mapStateToProps = state => {
  return {
    mode: state.mode,
    textAreaVal: state.textAreaVal,
    customizedBackgroundColor: state.customizedBackgroundColor,
    customizedFontColor: state.customizedFontColor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMode: text => dispatch(changeMode(text)),
    changeTextAreaVal: text => dispatch(changeTextAreaVal(text)),
    changeCustomizedBackgroundColor: text =>
      dispatch(changeCustomizedBackgroundColor(text)),
    changeCustomizedFontColor: text => dispatch(changeCustomizedFontColor(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mode);
