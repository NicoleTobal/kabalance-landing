import {h, createRef} from 'preact';
import style from './style.css';
import {connect} from 'react-redux';
import {selectCity} from "../../../redux";
import internationalization from "../../../i18n/i18n";

let CountrySelection = (props, { selectCity }) => {
    const countrySelectionRef = createRef();
    const onClick = (e) => {
        countrySelectionRef.current.classList.add("animate__animated");
        countrySelectionRef.current.classList.add("animate__fadeOutLeft");
        countrySelectionRef.current.classList.add("animate__normal");
        setTimeout(() => props.selectCity(e.target.innerText), 500);
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
                    <button className="animate__animated animate__fadeIn animate__faster"
                            onClick={onClick}>
                                {internationalization("txtUsaNationalSends")}
                    </button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {city: state.cart.city};
}

const mapDispatchToProps = dispatch => {
    return {
        selectCity: citySelected => dispatch(selectCity(citySelected))
    }
}

CountrySelection = connect(mapStateToProps, mapDispatchToProps)(CountrySelection);

export default CountrySelection;
