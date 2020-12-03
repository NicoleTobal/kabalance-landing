import {h, createRef} from 'preact';
import style from './style.css';
import {connect} from 'react-redux';
import {FormattedMessage} from "react-intl";
import {selectCity} from "../../../redux";

let CountrySelection = (props, { onCountrySelect}) => {
    const countrySelectionRef = createRef();
    const onClick = (e) => {
        countrySelectionRef.current.classList.add("animate__animated");
        countrySelectionRef.current.classList.add("animate__fadeOutLeft");
        countrySelectionRef.current.classList.add("animate__normal");
        props.selectCity(e.target.innerText);
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
                    <FormattedMessage id="txtUsaNationalSends">
                        {message => <button className="animate__animated animate__fadeIn animate__faster"
                                            onClick={onClick}>
                                        {message}
                                    </button>}
                    </FormattedMessage>

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
