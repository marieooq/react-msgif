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

export default combineReducers({
  isRec,
  textAreaVal
});
