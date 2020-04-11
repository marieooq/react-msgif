import { connect } from 'react-redux';
import {
  isFontColorPickerTrue,
  isFontColorPickerFalse,
  changeCustomizedFontColor
} from '../../../actions';
import FontColorPicker from './FontColorPicker';

const mapStateToProps = state => {
  return {
    isFontColorPicker: state.isFontColorPicker,
    customizedFontColor: state.customizedFontColor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isFontColorPickerTrue: () => dispatch(isFontColorPickerTrue()),
    isFontColorPickerFalse: () => dispatch(isFontColorPickerFalse()),
    changeCustomizedFontColor: text => dispatch(changeCustomizedFontColor(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FontColorPicker);
