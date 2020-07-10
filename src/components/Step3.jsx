import React from 'react';
import Description from './Description';
import OutputScreen from './OutputScreen';
import Download from './Download';
import store from '../reducers/store';

const Step3 = () => {
  return (
    <div className="wrapper-by-step">
      <Description
        step="3"
        title="Download the GIF animation you've created. You can share it on Twitter, Facebook, chat apps or wherever you want!🎉"
      />
      <OutputScreen />
      <Download href={store.getState().gifAnimationURL} />
      <div id="down-to-here" className="down-to-here-hide"></div>
    </div>
  );
};

export default Step3;
