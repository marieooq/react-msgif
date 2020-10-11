import React from 'react';
import store from '../reducers/store';
import Step1 from './Step1';
import Step2Container from './Step2Container';
import Step3 from './Step3';

const Steps = () => {
  const textAreaStyle = {
    "fontFamily" : store.getState().textAreaFontFamily,
    "color": store.getState().textAreaFontColor,
    "backgroundColor": store.getState().textAreaBackGround
  }

  return (
    <div id="inner">
      <Step1 />

      <Step2Container textAreaStyle={textAreaStyle}/>

      <Step3 />
    </div>
  );
};

export default Steps;
