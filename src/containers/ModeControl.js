import React from "react";

const ModeControl = props => {
  const modeVal = props.mode;

  const handleMode = e => {
    props.onModeChange(e);
  };

  return (
    <div className="selectdiv">
      <select
        value={modeVal}
        name="display-mode"
        onChange={handleMode}
        id="mode"
      >
        <option value="developer">Developer</option>
        <option value="neon">Neon</option>
        <option value="note">Note</option>
        <option value="pop">Pop</option>
      </select>
    </div>
  );
};

export default ModeControl;
