import React, { Component } from 'react';
import store from '../../../reducers/store';
import '../../Mode.css';

class FontSelector extends Component {
  render() {
    if (store.getState().mode === 'customized') {
      return (
        <div className="selectdiv">
          <select
            value={store.getState().customizedFontFamily}
            name="display-mode"
            onChange={this.handleFontFamily}
            id="mode"
          >
            <option value="fontFamilyA">fontFamilyA</option>
            <option value="fontFamilyB">fontFamilyB</option>
          </select>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default FontSelector;
