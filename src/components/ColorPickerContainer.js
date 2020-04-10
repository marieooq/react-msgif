import { connect } from 'react-redux';
import {
  isColorPickerTrue,
  isColorPickerFalse,
  changeCustomizedBackgroundColor
} from '../actions';
import ColorPicker from './ColorPicker';

const mapStateToProps = state => {
  return {
    isColorPicker: state.isColorPicker,
    customizedBackgroundColor: state.customizedBackgroundColor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isColorPickerTrue: () => dispatch(isColorPickerTrue()),
    isColorPickerFalse: () => dispatch(isColorPickerFalse()),
    changeCustomizedBackgroundColor: text =>
      dispatch(changeCustomizedBackgroundColor(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
