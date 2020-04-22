import { connect } from 'react-redux';
import {
  isFontFamilySelectorTrue,
  isFontFamilySelectorFalse,
  changeCutomizedFontFamily
} from '../../actions';
import FontSelector from './FontSelector';

const mapStateToProps = state => {
  return {
    isFontFamilySelector: state.isFontFamilySelector,
    customizedFontFamily: state.customizedFontFamily
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isFontFamilySelectorTrue: () => dispatch(isFontFamilySelectorTrue()),
    isFontFamilySelectorFalse: () => dispatch(isFontFamilySelectorFalse()),
    changeCutomizedFontFamily: () => dispatch(changeCutomizedFontFamily())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FontSelector);
