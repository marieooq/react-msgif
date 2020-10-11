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

const textAreaFontFamily = (state = "'Sigmar One', cursive", action) => {
  switch(action.type){
    case 'CHANGE_TEXT_AREA_FONT_FAMILY':
      return action.text;
    default:
      return state;
  }
}

const textAreaFontColor = (state = '#000', action) => {
  switch(action.type){
    case 'CHANGE_TEXT_AREA_FONT_COLOR':
      return action.text;
    default:
      return state;
  }
}

const textAreaBackGround = (state = '#ffff', action) => {
  switch(action.type){
    case 'CHANGE_TEXT_AREA_BACK_GROUND':
      return action.text;
    default:
      return state;
  }
}

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

const isBackgroundColorPicker = (state = false, action) => {
  switch (action.type) {
    case 'IS_BACKGROUNDCOLOR_PICKER_TRUE':
      return true;
    case 'IS_BACKGROUNDCOLOR_PICKER_FALSE':
      return false;
    default:
      return state;
  }
};

const customizedBackgroundColor = (state = '#fff', action) => {
  switch (action.type) {
    case 'CHANGE_CUSTOMIZED_BACKGROUND_COLOR':
      return action.text;
    default:
      return state;
  }
};

const isFontColorPicker = (state = false, action) => {
  switch (action.type) {
    case 'IS_FONTCOLOR_PICKER_TRUE':
      return true;
    case 'IS_FONTCOLOR_PICKER_FALSE':
      return false;
    default:
      return state;
  }
};

const customizedFontColor = (state = '#000', action) => {
  switch (action.type) {
    case 'CHANGE_CUSTOMIZED_FONT_COLOR':
      return action.text;
    default:
      return state;
  }
};

const isFontFamilySelector = (state = false, action) => {
  switch (action.type) {
    case 'IS_FONT_FAMILY_SELECTOR_TRUE':
      return true;
    case 'IS_FONT_FAMILY_SELECTOR_FALSE':
      return false;
    default:
      return state;
  }
};

const customizedFontFamily = (state = "'Sigmar One', cursive", action) => {
  switch (action.type) {
    case 'CHANGE_CUSTOMIZED_FONT_FAMILY':
      return action.text;
    default:
      return state;
  }
};

const marginBackgroundColor = (state = '#fff', action) => {
  switch (action.type) {
    case 'MARGIN_BACKGROUND_COLOR':
      return action.text;
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

const gifAnimationURL = (state = '', action) => {
  switch (action.type) {
    case 'SET_GIF_ANIMATION_URL':
      return action.text;
    default:
      return state;
  }
};

export default combineReducers({
  isRec,
  textAreaVal,
  textAreaFontFamily,
  textAreaFontColor,
  textAreaBackGround,
  screenSize,
  mode,
  isBackgroundColorPicker,
  customizedBackgroundColor,
  isFontColorPicker,
  customizedFontColor,
  isFontFamilySelector,
  customizedFontFamily,
  marginBackgroundColor,
  mqFlag,
  captureCount,
  createGifCount,
  frames,
  NotificationReducer,
  gifAnimationURL
});
