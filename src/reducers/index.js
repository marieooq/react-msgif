import { combineReducers } from 'redux';

const isRec = (state = false, action) => {
  switch (action.type) {
    case 'START_REC':
      return true;
    case 'END_REC':
      return false;
    default:
      return state;
  }
};

const textAreaVal = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_TEXT_AREA_VAL':
      return action.text;
    default:
      return state;
  }
};

const screenSize = (state = 'twitter', action) => {
  switch (action.type) {
    case 'CHANGE_SCREEN_SIZE':
      return action.text;
    default:
      return state;
  }
};

const mode = (state = 'note', action) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      return action.text;
    default:
      return state;
  }
};

const isColorPicker = (state = false, action) => {
  switch (action.type) {
    case 'IS_COLOR_PICKER_TRUE':
      return true;
    case 'IS_COLOR_PICKER_FALSE':
      return false;
    default:
      return state;
  }
};

const mqFlag = (state = { flag: false }, action) => {
  switch (action.type) {
    case 'MQ_FLAG_TRUE':
      return { flag: true };
    case 'MQ_FLAG_FALSE':
      return { flag: false };
    default:
      return state;
  }
};

const captureCount = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'CAPTURE_COUNT_INCREMENT':
      return { counter: state.counter + 1 };
    case 'CAPTURE_COUNT_DECREMENT':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const createGifCount = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'CREATE_GIT_COUNT_INCREMENT':
      return { counter: state.counter + 1 };
    case 'CREATE_GIT_COUNT_DECREMENT':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const frames = (state = [], action) => {
  switch (action.type) {
    case 'PUSH_TO_FRAMES':
      return [...state, action.image];

    case 'DELETE_ALL_FROM_FRAMES':
      return [];

    default:
      return state;
  }
};

const NotificationReducer = (
  state = { isOpen: false, variant: 'success', message: '' },
  action
) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return {
        ...state,
        isOpen: true,
        variant: action.variant,
        message: action.message
      };
    case 'CLOSE_NOTIFICATION':
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};

export default combineReducers({
  isRec,
  textAreaVal,
  screenSize,
  mode,
  isColorPicker,
  mqFlag,
  captureCount,
  createGifCount,
  frames,
  NotificationReducer
});
