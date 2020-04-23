import React, { Component } from 'react';
import store from '../../../reducers/store';
import '../../Mode.css';

class FontSelector extends Component {
  componentDidUpdate(prevState) {
    // if (
    //   store.getState().customizedFontFamily !== prevState.customizedFontFamily
    // ) {
    //   this.changeCustomizedFontFamily();
    // }
  }

  changeCustomizedFontFamily = () => {
    // console.log(store.getState().customizedFontFamily);
  };

  handleFontFamily = e => {
    console.log(e.target.value);
    this.props.changeCutomizedFontFamily(e.target.value);
    console.log(store.getState().customizedFontFamily);
  };
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
            <option value="'Comic Neue', cursive">Comic Neue</option>
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
