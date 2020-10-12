import { h, createRef } from 'preact';
import style from './style.css';
import { connect } from 'react-redux';
import { selectCity } from '../../../stores/cartStore';

let CountrySelection = ({ selectCity, onCountrySelect }) => {
  const countrySelectionRef = createRef();
  const onClick = (e) => {
    countrySelectionRef.current.classList.add("animate__animated");
    countrySelectionRef.current.classList.add("animate__fadeOutLeft");
    countrySelectionRef.current.classList.add("animate__normal");
    selectCity(e.target.innerText);
    setTimeout(() => onCountrySelect(e), 500);
  };
  return (
    <div class={style.countrySelectionContainer} ref={countrySelectionRef}>
      <div class={style.countrySelection}>
        <div class={style.buttonsContainer}>
          <button class="animate__animated animate__fadeIn animate__faster" onClick={onClick}>
            Caracas
          </button>
          <button class="animate__animated animate__fadeIn animate__faster" onClick={onClick}>
            Miami
          </button>
          <button class="animate__animated animate__fadeIn animate__faster" onClick={onClick}>
            Envíos nacionales en USA
          </button>
        </div>
      </div>
    </div>
  );
}

CountrySelection = connect(null, { selectCity })(CountrySelection);

export default CountrySelection;
