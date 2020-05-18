import { connect } from 'react-redux';
import {
  changeMode,
  changeTextAreaVal,
  changeCustomizedBackgroundColor,
  changeCustomizedFontColor,
  changeCutomizedFontFamily,
  isFontColorPickerTrue,
  isFontColorPickerFalse,
  isBackgroundColorPickerTrue,
  isBackgroundColorPickerFalse,
  marginBackgroundColor
} from '../actions';
import Mode from './Mode';

const mapStateToProps = state => {
  return {
    mode: state.mode,
    textAreaVal: state.textAreaVal,
    customizedBackgroundColor: state.customizedBackgroundColor,
    customizedFontColor: state.customizedFontColor,
    customizedFontFamily: state.customizedFontFamily,
    isFontColorPicker: state.isFontColorPicker,
    isBackgroundColorPicker: state.isBackgroundColorPicker,
    marginBackgroundColor: state.marginBackgroundColor
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
    changeCutomizedFontFamily: text =>
      dispatch(changeCutomizedFontFamily(text)),
    isFontColorPickerTrue: () => dispatch(isFontColorPickerTrue()),
    isFontColorPickerFalse: () => dispatch(isFontColorPickerFalse()),
    isBackgroundColorPickerTrue: () => dispatch(isBackgroundColorPickerTrue()),
    isBackgroundColorPickerFalse: () =>
      dispatch(isBackgroundColorPickerFalse()),
    marginBackgroundColor: text => dispatch(marginBackgroundColor(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mode);
