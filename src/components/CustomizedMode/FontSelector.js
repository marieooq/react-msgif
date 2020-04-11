import React, { Component } from 'react';
import store from '../../reducers/store';
import '../Mode.css';

class FontSelector extends Component {
  render() {
    return (
      <div className="selectdiv">
        <select
          value={store.getState().mode}
          name="display-mode"
          onChange={this.handleMode}
          id="mode"
        >
          <option value="developer">Developer</option>
          <option value="neon">Neon</option>
          <option value="note">Note</option>
          <option value="pop-yellow">Pop(yellow)</option>
          <option value="pop-blue">Pop(blue)</option>
          <option value="pop-pink">Pop(pink)</option>
          <option value="navy">Pop(navy)</option>
          <option value="customized">customized</option>
        </select>
      </div>
    );
  }
}

export default FontSelector;
