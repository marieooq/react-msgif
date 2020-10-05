import React, { useEffect } from 'react';
import store from '../reducers/store';
import './Mode.css';

const Mode = (props) =>{
  let displayScreen;

  useEffect(() => {
    displayScreen = document.getElementById('textareaMsg');
  });

  useEffect(()=> {
    switchMode(store.getState().mode)
  }, [store.getState().mode]);

  useEffect(()=> {
    switchMode(store.getState().mode)
  }, [store.getState().customizedBackgroundColor]);

  useEffect(()=> {
    switchMode(store.getState().mode)
  }, [store.getState().textAreaVal]);

  useEffect(()=> {
    switchMode(store.getState().mode)
  }, [store.getState().isFontColorPicker]);
  
  useEffect(()=> {
    switchMode(store.getState().mode)
  }, [store.getState().isBackgroundColorPicker]);

  const switchMode = mode => {
    if (mode !== 'customized') {
      props.isFontColorPickerFalse();
      props.isBackgroundColorPickerFalse();
    }
    changeTextColor(mode);
    changeTextShadow(mode);
    changeFontFamily(mode);
    changeBackground(mode);
  };

  const changeTextColor = mode => {
    displayScreen.classList.add('coloredText');
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

  const changeTextShadow = mode => {
    const returnRanNum = () => {
      const runNum = Math.floor(Math.random() * 360);
      return runNum;
    };

    const returnRgb = () => {
      let rgb = `rgb(${returnRanNum()}, ${returnRanNum()}, ${returnRanNum()})`;
      return rgb;
    };

    if (mode === 'neon') {
      displayScreen.classList.add('textShadow');
      const textShadowClass = document.getElementsByClassName('textShadow');
      for (let i = 0; i < textShadowClass.length; i++) {
        textShadowClass[i].style.textShadow = `2px 2px 15px ${returnRgb()}`;
      }
    } else {
      if (displayScreen.className.includes('textShadow')) {
        displayScreen.classList.remove('textShadow');
      }
      displayScreen.style.textShadow = '';
    }
  };

  const changeFontFamily = mode => {
    switch (mode) {
      case 'developer':
        displayScreen.style.fontFamily =
          '"Ubuntu Mono", monospace, "Kosugi", sans-serif';
        break;

      case 'neon':
        displayScreen.style.fontFamily =
          '"Lobster", cursive, "Kosugi", sans-serif';
        break;

      case 'note':
        displayScreen.style.fontFamily = '"Noto Serif", serif';
        break;

      case 'pop-yellow':
        displayScreen.style.fontFamily = "'Anton', 'Kosugi', sans-serif";
        break;

      case 'pop-blue':
        displayScreen.style.fontFamily = "'Anton', 'Kosugi', sans-serif";
        break;

      case 'pop-pink':
        displayScreen.style.fontFamily = "'Anton', 'Kosugi', sans-serif";
        break;

      case 'navy':
        displayScreen.style.fontFamily = "'PT Sans', 'Kosugi', sans-serif";
        break;

      case 'customized':
        displayScreen.style.fontFamily = store.getState().customizedFontFamily;
        break;

      default:
        console.log('apply for the default font family.');
        displayScreen.style.fontFamily = '"Noto Serif", serif';
    }
  };

  const changeBackground = mode => {
    let margin_background_color;
    switch (mode) {
      case 'developer':
        displayScreen.style.backgroundColor = 'rgb(12, 5, 32)';
        margin_background_color = 'rgb(12, 5, 32)';
        break;

      case 'neon':
        displayScreen.style.backgroundColor = 'rgb(12, 5, 32)';
        margin_background_color = 'rgb(12, 5, 32)';
        break;

      case 'note':
        displayScreen.style.backgroundColor = '#fff';
        margin_background_color = '#fff';
        break;

      case 'pop-yellow':
        displayScreen.style.backgroundColor = '#fef734';
        margin_background_color = '#fef734';
        break;

      case 'pop-blue':
        displayScreen.style.backgroundColor = '#34ccfe';
        margin_background_color = '#34ccfe';
        break;

      case 'pop-pink':
        displayScreen.style.backgroundColor = '#fe34a6';
        margin_background_color = '#fe34a6';
        break;

      case 'navy':
        displayScreen.style.backgroundColor = '#043364';
        margin_background_color = '#043364';
        break;

      case 'customized':
        displayScreen.style.backgroundColor = store.getState().customizedBackgroundColor;
        margin_background_color = store.getState().customizedBackgroundColor;
        break;

      default:
        console.log('mode is undefined');
    }

    props.marginBackgroundColor(margin_background_color);
  };

  const handleMode = e => {
    props.changeMode(e.target.value);
  };

  return (
    <div className="selectdiv">
      <label htmlFor="select_mode">Design style</label>
      <select
        value={store.getState().mode}
        name="display-mode"
        onChange={handleMode}
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

export default Mode;
