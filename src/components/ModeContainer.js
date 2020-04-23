import { connect } from 'react-redux';
import {
  changeMode,
  changeTextAreaVal,
  changeCustomizedBackgroundColor,
  changeCustomizedFontColor,
  changeCutomizedFontFamily
} from '../actions';
import Mode from './Mode';

const mapStateToProps = state => {
  return {
    mode: state.mode,
    textAreaVal: state.textAreaVal,
    customizedBackgroundColor: state.customizedBackgroundColor,
    customizedFontColor: state.customizedFontColor,
    customizedFontFamily: state.customizedFontFamily
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMode: text => dispatch(changeMode(text)),
    changeTextAreaVal: text => dispatch(changeTextAreaVal(text)),
    changeCustomizedBackgroundColor: text =>
      dispatch(changeCustomizedBackgroundColor(text)),
    changeCustomizedFontColor: text =>
      dispatch(changeCustomizedFontColor(text)),
    changeCutomizedFontFamily: text => dispatch(changeCutomizedFontFamily(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mode);
