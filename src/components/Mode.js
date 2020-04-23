import React, { Component } from 'react';
import store from '../reducers/store';
import './Mode.css';

class Mode extends Component {
  displayScreen;

  componentDidMount() {
    this.displayScreen = document.getElementById('textareaMsg');
  }

  componentDidUpdate(prevState) {
    if (store.getState().mode !== prevState.mode) {
      this.switchMode(store.getState().mode);
    }

    if (
      store.getState().customizedBackgroundColor !==
      prevState.customizedBackgroundColor
    ) {
      this.switchMode(store.getState().mode);
    }

    if (store.getState().textAreaVal !== prevState.textAreaVal) {
      this.switchMode(store.getState().mode);
    }
  }
  switchMode = mode => {
    if (mode === 'customized') {
      console.log(`mode: ${mode}`);
      console.log('customized mode is selected');
      this.changeTextColor(mode);
      this.changeBackground(mode);
      this.changeFontFamily(mode);
    } else {
      this.changeTextColor(mode);
      this.changeTextShadow(mode);
      this.changeFontFamily(mode);
      this.changeBackground(mode);
    }
  };

  changeTextColor = mode => {
    this.displayScreen.classList.add('coloredText');
    const coloredTextClass = document.getElementsByClassName('coloredText');

    for (let i = 0; i < coloredTextClass.length; i++) {
      console.log(store.getState().customizedFontColor);
      switch (mode) {
        case 'developer':
          coloredTextClass[i].style.color = '#00c200';
          break;

        case 'neon':
          coloredTextClass[i].style.color = '#fff';
          break;

        case 'note':
          coloredTextClass[i].style.color = '#292929';
          break;

        case 'pop-yellow':
          coloredTextClass[i].style.color = '#292929';
          break;

        case 'pop-blue':
          coloredTextClass[i].style.color = '#292929';
          break;

        case 'pop-pink':
          coloredTextClass[i].style.color = '#fff';
          break;

        case 'navy':
          coloredTextClass[i].style.color = '#fff';
          break;

        case 'customized':
          coloredTextClass[
            i
          ].style.color = store.getState().customizedFontColor;
          break;

        default:
          console.log('mode is undefined');
      }
    }
  };

  changeTextShadow = mode => {
    const returnRanNum = () => {
      const runNum = Math.floor(Math.random() * 360);
      return runNum;
    };

    const returnRgb = () => {
      let rgb = `rgb(${returnRanNum()}, ${returnRanNum()}, ${returnRanNum()})`;
      return rgb;
    };

    if (mode === 'neon') {
      this.displayScreen.classList.add('textShadow');
      const textShadowClass = document.getElementsByClassName('textShadow');
      for (let i = 0; i < textShadowClass.length; i++) {
        textShadowClass[i].style.textShadow = `2px 2px 15px ${returnRgb()}`;
      }
    } else {
      if (this.displayScreen.className.includes('textShadow')) {
        this.displayScreen.classList.remove('textShadow');
      }
      this.displayScreen.style.textShadow = '';
    }
  };

  changeFontFamily = mode => {
    switch (mode) {
      case 'developer':
        this.displayScreen.style.fontFamily =
          '"Ubuntu Mono", monospace, "Kosugi", sans-serif';
        break;

      case 'neon':
        this.displayScreen.style.fontFamily =
          '"Lobster", cursive, "Kosugi", sans-serif';
        break;

      case 'note':
        this.displayScreen.style.fontFamily = '"Noto Serif", serif';
        break;

      case 'pop-yellow':
        this.displayScreen.style.fontFamily = "'Anton', 'Kosugi', sans-serif";
        break;

      case 'pop-blue':
        this.displayScreen.style.fontFamily = "'Anton', 'Kosugi', sans-serif";
        break;

      case 'pop-pink':
        this.displayScreen.style.fontFamily = "'Anton', 'Kosugi', sans-serif";
        break;

      case 'navy':
        this.displayScreen.style.fontFamily = "'PT Sans', 'Kosugi', sans-serif";
        break;

      case 'customized':
        this.displayScreen.style.fontFamily = "'Comic Neue', cursive";
        break;

      default:
        console.log('mode is undefined');
    }
  };

  changeCustomizedFontFamily = () => {};

  changeBackground = mode => {
    switch (mode) {
      case 'developer':
        this.displayScreen.style.backgroundColor = 'rgb(12, 5, 32)';
        break;

      case 'neon':
        this.displayScreen.style.backgroundColor = 'rgb(12, 5, 32)';
        break;

      case 'note':
        this.displayScreen.style.backgroundColor = '#fff';
        break;

      case 'pop-yellow':
        this.displayScreen.style.backgroundColor = '#fef734';
        break;

      case 'pop-blue':
        this.displayScreen.style.backgroundColor = '#34ccfe';
        break;

      case 'pop-pink':
        this.displayScreen.style.backgroundColor = '#fe34a6';
        break;

      case 'navy':
        this.displayScreen.style.backgroundColor = '#043364';
        break;

      case 'customized':
        this.displayScreen.style.backgroundColor = store.getState().customizedBackgroundColor;
        break;

      default:
        console.log('mode is undefined');
    }
  };

  handleMode = e => {
    this.props.changeMode(e.target.value);
  };

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

export default Mode;
