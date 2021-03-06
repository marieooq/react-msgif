export const startRec = {
  type: 'START_REC'
};

export const endRec = {
  type: 'END_REC'
};

export const changeTextAreaVal = text => {
  return { type: 'CHANGE_TEXT_AREA_VAL', text };
};

export const changeScreenSize = text => {
  return { type: 'CHANGE_SCREEN_SIZE', text };
};

export const changeMode = text => {
  return { type: 'CHANGE_MODE', text };
};

export const isBackgroundColorPickerTrue = () => {
  return { type: 'IS_BACKGROUNDCOLOR_PICKER_TRUE' };
};

export const isBackgroundColorPickerFalse = () => {
  return { type: 'IS_BACKGROUNDCOLOR_PICKER_FALSE' };
};

export const changeCustomizedBackgroundColor = text => {
  return { type: 'CHANGE_CUSTOMIZED_BACKGROUND_COLOR', text };
};

export const isFontColorPickerTrue = () => {
  return { type: 'IS_FONTCOLOR_PICKER_TRUE' };
};

export const isFontColorPickerFalse = () => {
  return { type: 'IS_FONTCOLOR_PICKER_FALSE' };
};

export const changeCustomizedFontColor = text => {
  return { type: 'CHANGE_CUSTOMIZED_FONT_COLOR', text };
};

export const isFontFamilySelectorTrue = () => {
  return { type: 'IS_FONT_FAMILY_SELECTOR_TRUE' };
};

export const isFontFamilySelectorFalse = () => {
  return { type: 'IS_FONT_FAMILY_SELECTOR_FALSE' };
};

export const changeCutomizedFontFamily = text => {
  return { type: 'CHANGE_CUSTOMIZED_FONT_FAMILY', text };
};

export const marginBackgroundColor = text => {
  return { type: 'MARGIN_BACKGROUND_COLOR', text };
};

export const mqFlagTrue = () => {
  return { type: 'MQ_FLAG_TRUE' };
};

export const mqFlagFalse = () => {
  return { type: 'MQ_FLAG_FALSE' };
};

export const captureCountIncrement = () => {
  return { type: 'CAPTURE_COUNT_INCREMENT' };
};

export const captureCountDecrement = () => {
  return { type: 'CAPTURE_COUNT_DECREMENT' };
};

export const createGifCountIncrement = () => {
  return { type: 'CREATE_GIT_COUNT_INCREMENT' };
};

export const createGifCountDecrement = () => {
  return { type: 'CREATE_GIT_COUNT_DECREMENT' };
};

export const pushToFrames = image => {
  return { type: 'PUSH_TO_FRAMES', image };
};

export const deleteAllFromFrames = () => {
  return { type: 'DELETE_ALL_FROM_FRAMES' };
};

export const setNotification = (variant, message) => {
  return {
    type: 'SET_NOTIFICATION',
    variant: variant,
    message: message
  };
};

export const closeNotification = (variant, message) => {
  return {
    type: 'CLOSE_NOTIFICATION',
    variant: variant,
    message: message
  };
};

export const setGifAnimationURL = text => ({
  type: 'SET_GIF_ANIMATION_URL',
  text
});
