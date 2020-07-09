import React from 'react';
import Description from './Description';
import ScreenSizeContainer from '../containers/ScreenSizeContainer';
import ModeContainer from './ModeContainer';
import FontSelectorContainer from './CustomizedMode/CustomizedModeComponents/FontSelectorContainer';
import CustomizedModeContainer from './CustomizedMode/CustomizedModeContainer';
import ColorPicker from './CustomizedMode/CustomizedModeComponents/ColorPicker/ColorPicker';

const Step1 = () => {
  return (
    <div className="wrapper-by-step">
      <Description
        step="1"
        title="Choose the size of the text area and style of design.🎨"
      />
      <div id="size-mode-wrapper">
        <div className="select-wrapper clearfix">
          <ScreenSizeContainer />
          <ModeContainer />
          <FontSelectorContainer />
        </div>
        <CustomizedModeContainer />
        <ColorPicker />
      </div>
    </div>
  );
};

export default Step1;
