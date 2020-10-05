import React from 'react';
import store from '../../../reducers/store';
import '../../Mode.css';

const FontSelector = (props) => {
  //   font-family: 'Abril Fatface', cursive;
  // font-family: 'Archivo Black', sans-serif;
  // font-family: 'Concert One', cursive;
  // font-family: 'Cookie', cursive;
  // font-family: 'Gloria Hallelujah', cursive;
  // font-family: 'Gochi Hand', cursive;
  // font-family: 'Handlee', cursive;
  // font-family: 'Kaushan Script', cursive;
  // font-family: 'Long Cang', cursive;
  // font-family: 'Luckiest Guy', cursive;
  // font-family: 'Monoton', cursive;
  // font-family: 'Parisienne', cursive;
  // font-family: 'Permanent Marker', cursive;
  // font-family: 'Prata', serif;
  // font-family: 'Sacramento', cursive;
  // font-family: 'Satisfy', cursive;
  // font-family: 'Sigmar One', cursive;
  // font-family: 'Special Elite', cursive;
  // font-family: 'Ultra', serif;
  // font-family: 'Bangers', cursive;

  const handleFontFamily = e => {
    props.changeCutomizedFontFamily(e.target.value);
  };

  if (store.getState().mode === 'customized') {
    return (
      <div className="selectdiv">
        <label htmlFor="select_customized_font">Font type</label>
        <select
          value={store.getState().customizedFontFamily}
          name="display-mode"
          onChange={handleFontFamily}
          id="select_customized_font"
        >
          <option value="'Comic Neue', cursive">Comic Neue</option>
          <option value="'Abril Fatface', cursive">Abril</option>
          <option value="'Archivo Black', sans-serif">Archivo Black</option>
          <option value="'Cookie', cursive">Cookie</option>
          <option value="'Gloria Hallelujah', cursive">
            Gloria Hallelujah
          </option>
          <option value="'Gochi Hand', cursive">Gochi Hand</option>
          <option value="'Handlee', cursive">Handlee</option>
          <option value="'Kaushan Script', cursive">Kaushan Script</option>
          <option value="'Long Cang', cursive">Long Cang</option>
          <option value="'Luckiest Guy', cursive">Luckiest Guy</option>
          <option value="'Monoton', cursive">Monoton</option>
          <option value="'Parisienne', cursive">Parisienne</option>
          <option value="'Permanent Marker', cursive">
            Permanent Marker
          </option>
          <option value="'Prata', serif">Prata</option>
          <option value="'Sacramento', cursive">Sacramento</option>
          <option value="'Satisfy', cursive">Satisfy</option>
          <option value="'Sigmar One', cursive">Sigmar One</option>
          <option value="'Special Elite', cursive">Special Elite</option>
          <option value="'Ultra', serif">Ultra</option>
          <option value="'Bangers', cursive">Bangers</option>
        </select>
      </div>
    );
  } else {
    return <></>;
  }
}

export default FontSelector;
