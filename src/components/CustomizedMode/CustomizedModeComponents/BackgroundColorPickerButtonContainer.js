import { connect } from 'react-redux';
import {
  isBackgroundColorPickerTrue,
  isBackgroundColorPickerFalse
} from '../../../actions';
import BackgroundColorPickerButton from './BackgroundColorPickerButton';

const mapStateToProps = state => {
  return {
    isBackgroundColorPicker: state.isBackgroundColorPicker
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isBackgroundColorPickerTrue: () => dispatch(isBackgroundColorPickerTrue()),
    isBackgroundColorPickerFalse: () => dispatch(isBackgroundColorPickerFalse())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundColorPickerButton);
