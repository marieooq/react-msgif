import { connect } from 'react-redux';
import { isColorPickerTrue, isColorPickerFalse } from '../actions';
import BackgroundColorPickerButton from './BackgroundColorPickerButton';

const mapStateToProps = state => {
  return {
    isColorPicker: state.isColorPicker
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isColorPickerTrue: () => dispatch(isColorPickerTrue()),
    isColorPickerFalse: () => dispatch(isColorPickerFalse())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundColorPickerButton);
