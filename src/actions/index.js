export const startRec = {
  type: "START_REC"
};

export const endRec = {
  type: "END_REC"
};

export const changeTextAreaVal = text => {
  return { type: "CHANGE_TEXT_AREA_VAL", text };
};

export const changeMode = text => {
  return { type: "CHANGE_MODE", text };
};
