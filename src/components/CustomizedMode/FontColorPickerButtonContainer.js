import { connect } from 'react-redux';
import { isFontColorPickerTrue, isFontColorPickerFalse } from '../../actions';
import FontColorPickerButton from './FontColorPickerButton';

const mapStateToProps = state => {
  return {
    isFontColorPicker: state.isFontColorPicker
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isFontColorPickerTrue: () => dispatch(isFontColorPickerTrue()),
    isFontColorPickerFalse: () => dispatch(isFontColorPickerFalse())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FontColorPickerButton);
