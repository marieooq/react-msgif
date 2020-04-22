import { connect } from 'react-redux';
import {
  changeMode,
  isBackgroundColorPickerTrue,
  isBackgroundColorPickerFalse,
  isFontColorPickerTrue,
  isFontColorPickerFalse
} from '../../actions';
import CustomizedMode from './CustomizedMode';

const mapStateToProps = state => {
  return {
    mode: state.mode,
    isBackgroundColorPicker: state.isBackgroundColorPicker,
    isFontColorPicker: state.isFontColorPicker
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMode: () => dispatch(changeMode()),
    isBackgroundColorPickerTrue: () => dispatch(isBackgroundColorPickerTrue()),
    isBackgroundColorPickerFalse: () =>
      dispatch(isBackgroundColorPickerFalse()),
    isFontColorPickerTrue: () => dispatch(isFontColorPickerTrue()),
    isFontColorPickerFalse: () => dispatch(isFontColorPickerFalse())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedMode);
