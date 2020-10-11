import { connect } from 'react-redux';
import {
  changeTextAreaFontFamily,
  changeTextAreaFontColor,
  changeTextAreaBackGround
} from '../actions';
import Steps from './Steps';

const mapStateToProps = state => {
  return {
    textAreaFontFamily: state.textAreaFontFamily,
    textAreaFontColor: state.textAreaFontColor,
    textAreaBackGround: state.textAreaBackGround,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTextAreaFontFamily: text => dispatch(changeTextAreaFontFamily(text)),
    changeTextAreaFontColor: text => dispatch(changeTextAreaFontColor(text)),
    changeTextAreaBackGround: text => dispatch(changeTextAreaBackGround(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Steps);
