import { connect } from 'react-redux';
import {
  isBackgroundColorPickerTrue,
  isBackgroundColorPickerFalse,
  changeCustomizedBackgroundColor
} from '../../../actions';
import BackgroundColorPicker from './BackgroundColorPicker';

const mapStateToProps = state => {
  return {
    isBackgroundColorPicker: state.isBackgroundColorPicker,
    customizedBackgroundColor: state.customizedBackgroundColor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isBackgroundColorPickerTrue: () => dispatch(isBackgroundColorPickerTrue()),
    isBackgroundColorPickerFalse: () =>
      dispatch(isBackgroundColorPickerFalse()),
    changeCustomizedBackgroundColor: text =>
      dispatch(changeCustomizedBackgroundColor(text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundColorPicker);
