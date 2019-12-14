import { combineReducers } from "redux";

const isRec = (state = false, action) => {
  switch (action.type) {
    case "START_REC":
      return true;
    case "END_REC":
      return false;
    default:
      return state;
  }
};

const textAreaVal = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_TEXT_AREA_VAL":
      return action.text;
    default:
      return state;
  }
};

const mode = (state = "note", action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return action.text;
    default:
      return state;
  }
};

const captureCount = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "CAPTURE_COUNT_INCREMENT":
      return { counter: state.counter + 1 };
    case "CAPTURE_COUNT_DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const createGifCount = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "CREATE_GIT_COUNT_INCREMENT":
      console.log(`action.type: ${action.type}`);
      return { counter: state.counter + 1 };
    case "CREATE_GIT_COUNT_DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const frames = (state = [], action) => {
  switch (action.type) {
    case "PUSH_TO_FRAMES":
      return [...state, action.image];

    case "DELETE_ALL_FROM_FRAMES":
      return [];

    default:
      return state;
  }
};

export default combineReducers({
  isRec,
  textAreaVal,
  mode,
  captureCount,
  createGifCount,
  frames
});
