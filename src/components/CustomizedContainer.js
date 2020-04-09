import { connect } from 'react-redux';
import { isCustomized } from '../actions';
import CustomizedMode from './CustomizedMode';

const mapStateToProps = state => {
  return {
    isCostomized: state.isCostomized
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMode: text => dispatch(isCustomized(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedMode);
