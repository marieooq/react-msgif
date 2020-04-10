import { connect } from 'react-redux';
import {
  startRec,
  endRec,
  changeTextAreaVal,
  changeScreenSize,
  changeMode,
  isColorPickerTrue,
  isColorPickerFalse,
  mqFlagTrue,
  mqFlagFalse,
  captureCountIncrement,
  captureCountDecrement,
  createGifCountIncrement,
  createGifCountDecrement,
  pushToFrames,
  setNotification,
  closeNotification
} from './actions';
import App from './App';

const mapStateToProps = state => {
  return {
    isRec: state.isRec,
    textAreaVal: state.textAreaVal,
    screenSize: state.screenSize,
    mode: state.mode,
    isColorPicker: state.isColorPicker,
    mqFlag: state.mqFlag,
    captureCount: state.captureCount,
    createGifCount: state.createGifCount,
    frames: state.frames,
    NotificationReducer: state.NotificationReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startRec: () => dispatch(startRec),
    endRec: () => dispatch(endRec),
    changeTextAreaVal: text => dispatch(changeTextAreaVal(text)),
    changeScreenSize: text => dispatch(changeScreenSize(text)),
    changeMode: text => dispatch(changeMode(text)),
    isColorPickerTrue: () => dispatch(isColorPickerTrue()),
    isColorPickerFalse: () => dispatch(isColorPickerFalse()),
    mqFlagTrue: () => dispatch(mqFlagTrue()),
    mqFlagFalse: () => dispatch(mqFlagFalse()),
    captureCountIncrement: () => dispatch(captureCountIncrement()),
    captureCountDecrement: () => dispatch(captureCountDecrement()),
    createGifCountIncrement: () => dispatch(createGifCountIncrement()),
    createGifCountDecrement: () => dispatch(createGifCountDecrement()),
    pushToFrames: image => dispatch(pushToFrames(image)),
    setNotification: (variant, message) =>
      dispatch(setNotification(variant, message)),
    closeNotification: (variant, message) =>
      dispatch(closeNotification(variant, message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
