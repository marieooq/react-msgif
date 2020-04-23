import { connect } from 'react-redux';
import {
  changeMode,
  isFontFamilySelectorTrue,
  isFontFamilySelectorFalse,
  changeCutomizedFontFamily
} from '../../../actions';
import FontSelector from './FontSelector';

const mapStateToProps = state => {
  return {
    mode: state.mode,
    isFontFamilySelector: state.isFontFamilySelector,
    customizedFontFamily: state.customizedFontFamily
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMode: () => dispatch(changeMode()),
    isFontFamilySelectorTrue: () => dispatch(isFontFamilySelectorTrue()),
    isFontFamilySelectorFalse: () => dispatch(isFontFamilySelectorFalse()),
    changeCutomizedFontFamily: text => dispatch(changeCutomizedFontFamily(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FontSelector);
