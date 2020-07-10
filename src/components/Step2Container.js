import { connect } from 'react-redux';
import {
  mqFlagTrue,
  mqFlagFalse,
  captureCountIncrement,
  pushToFrames,
  setNotification,
  closeNotification,
  createGifCountIncrement,
  setGifAnimationURL
} from '../actions';
import Step2 from './Step2';

const mapStateToProps = state => {
  return {
    mqFlag: state.mqFlag,
    captureCount: state.captureCount,
    frames: state.frames,
    NotificationReducer: state.NotificationReducer,
    createGifCount: state.createGifCount,
    gifAnimationURL: state.gifAnimationURL
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mqFlagTrue: () => dispatch(mqFlagTrue()),
    mqFlagFalse: () => dispatch(mqFlagFalse()),
    captureCountIncrement: () => dispatch(captureCountIncrement()),
    pushToFrames: image => dispatch(pushToFrames(image)),
    setNotification: (variant, message) =>
      dispatch(setNotification(variant, message)),
    closeNotification: (variant, message) =>
      dispatch(closeNotification(variant, message)),
    createGifCountIncrement: () => dispatch(createGifCountIncrement()),
    setGifAnimationURL: text => dispatch(setGifAnimationURL(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
