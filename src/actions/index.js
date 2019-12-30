export const startRec = {
  type: "START_REC"
};

export const endRec = {
  type: "END_REC"
};

export const changeTextAreaVal = text => {
  return { type: "CHANGE_TEXT_AREA_VAL", text };
};

export const changeScreenSize = text => {
  return { type: "CHANGE_SCREEN_SIZE", text };
};

export const changeMode = text => {
  return { type: "CHANGE_MODE", text };
};

export const mqFlagTrue = () => {
  return { type: "MQ_FLAG_TRUE" };
};

export const mqFlagFalse = () => {
  return { type: "MQ_FLAG_FALSE" };
};

export const captureCountIncrement = () => {
  return { type: "CAPTURE_COUNT_INCREMENT" };
};

export const captureCountDecrement = () => {
  return { type: "CAPTURE_COUNT_DECREMENT" };
};

export const createGifCountIncrement = () => {
  return { type: "CREATE_GIT_COUNT_INCREMENT" };
};

export const createGifCountDecrement = () => {
  return { type: "CREATE_GIT_COUNT_DECREMENT" };
};

export const pushToFrames = image => {
  return { type: "PUSH_TO_FRAMES", image };
};

export const deleteAllFromFrames = () => {
  return { type: "DELETE_ALL_FROM_FRAMES" };
};

export const setNotification = (variant, message) => {
  return {
    type: "SET_NOTIFICATION",
    variant: variant,
    message: message
  };
};

export const closeNotification = (variant, message) => {
  return {
    type: "CLOSE_NOTIFICATION",
    variant: variant,
    message: message
  };
};
