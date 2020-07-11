import React from 'react';
import Step1 from './Step1';
import Step2Container from './Step2Container';
import Step3 from './Step3';

const Steps = () => {
  return (
    <div id="inner">
      <Step1 />

      <Step2Container />

      <Step3 />
    </div>
  );
};

export default Steps;
