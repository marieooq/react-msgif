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

    if (store.getState().isFontColorPicker) {
      this.switchMode(store.getState().mode);
    }

    if (store.getState().isBackgroundColorPicker) {
      this.switchMode(store.getState().mode);
    }
  }
  switchMode = mode => {
    if (mode !== 'customized') {
      this.props.isFontColorPickerFalse();
      this.props.isBackgroundColorPickerFalse();
    }
    this.changeTextColor(mode);
    this.changeTextShadow(mode);
    this.changeFontFamily(mode);
    this.changeBackground(mode);
  };

  changeTextColor = mode => {
    this.displayScreen.classList.add('coloredText');
    const coloredTextClass = document.getElementsByClassName('coloredText');

    for (let i = 0; i < coloredTextClass.length; i++) {
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
          this.props.changeTextAreaFontFamily('"Ubuntu Mono", monospace, "Kosugi", sans-serif');
        break;

      case 'neon':
        this.props.changeTextAreaFontFamily('"Lobster", cursive, "Kosugi", sans-serif');
        break;

      case 'note':
        this.props.changeTextAreaFontFamily("'Noto Serif', serif");
        break;

      case 'pop-yellow':
        this.props.changeTextAreaFontFamily("'Anton', 'Kosugi', sans-serif");
        break;

      case 'pop-blue':
        this.props.changeTextAreaFontFamily("'Anton', 'Kosugi', sans-serif");
        break;

      case 'pop-pink':
        this.props.changeTextAreaFontFamily("'Anton', 'Kosugi', sans-serif");
        break;

      case 'navy':
        this.props.changeTextAreaFontFamily("'PT Sans', 'Kosugi', sans-serif");
        break;

      case 'customized':
        this.props.changeTextAreaFontFamily(store.getState().customizedFontFamily);
        break;

      default:
        console.log('apply for the default font family.');
        this.props.changeTextAreaFontFamily("'Noto Serif', serif");
    }
  };

  changeBackground = mode => {
    let margin_background_color;
    switch (mode) {
      case 'developer':
        this.props.changeTextAreaBackGround('rgb(12, 5, 32)');
        margin_background_color = 'rgb(12, 5, 32)';
        break;

      case 'neon':
        this.props.changeTextAreaBackGround('rgb(12, 5, 32)');
        margin_background_color = 'rgb(12, 5, 32)';
        break;

      case 'note':
        this.props.changeTextAreaBackGround('#fff');
        margin_background_color = '#fff';
        break;

      case 'pop-yellow':
        this.props.changeTextAreaBackGround('#fef734');
        margin_background_color = '#fef734';
        break;

      case 'pop-blue':
        this.props.changeTextAreaBackGround('#34ccfe');
        margin_background_color = '#34ccfe';
        break;

      case 'pop-pink':
        this.props.changeTextAreaBackGround('#fe34a6');
        margin_background_color = '#fe34a6';
        break;

      case 'navy':
        this.props.changeTextAreaBackGround('#043364');
        margin_background_color = '#043364';
        break;

      case 'customized':
        this.props.changeTextAreaBackGround(store.getState().customizedBackgroundColor);
        margin_background_color = store.getState().customizedBackgroundColor;
        break;

      default:
        console.log('mode is undefined');
    }

    this.props.marginBackgroundColor(margin_background_color);
  };

  handleMode = e => {
    this.props.changeMode(e.target.value);
  };

  render() {
    return (
      <div className="selectdiv">
        <label htmlFor="select_mode">Design style</label>
        <select
          value={store.getState().mode}
          name="display-mode"
          onChange={this.handleMode}
          id="select_mode"
        >
          <option value="developer">Developer</option>
          <option value="neon">Neon</option>
          <option value="note">Note</option>
          <option value="pop-yellow">Pop(yellow)</option>
          <option value="pop-blue">Pop(blue)</option>
          <option value="pop-pink">Pop(pink)</option>
          <option value="navy">Pop(navy)</option>
          <option value="customized">Customized</option>
        </select>
      </div>
    );
  }
}

export default Mode;
