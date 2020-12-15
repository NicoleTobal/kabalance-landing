import React, {h} from 'preact';
import style from '../../style.css';
import bitcoin from '../../../../../assets/images/cryptos/bitcoin.jpeg';
import litecoin from '../../../../../assets/images/cryptos/litecoin.jpeg';
import dash from '../../../../../assets/images/cryptos/dash.jpeg';
import petro from '../../../../../assets/images/cryptos/petro.jpeg';
import ether from '../../../../../assets/images/cryptos/ether.jpeg';
import {useForm} from "react-hook-form";
import {useState} from "preact/hooks";
import {doPaymentCrypto} from "../../../../../redux";
import {connect} from "react-redux";
import internationalization from "../../../../../i18n/i18n";
import {CircleToBlockLoading} from "react-loadingg";

const cryptos = [
    {id: 1, name: 'bitcoin', currency: 'btc', src: bitcoin, hash: '1cd2122dFW67JHasdqqf415c13f1'},
    {id: 2, name: 'litecoin', currency: 'ltc', src: litecoin, hash: '2dFW67JHasdqqf415c13f11cd212'},
    {id: 3, name: 'dash', currency: 'dash', src: dash, hash: '7JHasdqq1cd2122dFW6f413f115c'},
    {id: 4, name: 'petro', currency: 'petro', src: petro, hash: '1cd21W67JHasdqq5c13f122dF'},
    {id: 5, name: 'ether', currency: 'eth', src: ether, hash: 'f411cd2122dFW67Jsdqqf415c13f1Ha'}
];

const PaymentCryptos = (props, {doPaymentCrypto}) => {
    const {register, handleSubmit, watch, errors} = useForm();
    const [coin, setCoin] = useState({
        id: 6,
        name: 'all',
        currency: 'btc',
        hash: '#######',
        src: bitcoin
    });

    const handleCoin = (coin) => {
        setCoin({
            id: coin.id,
            name: coin.name,
            currency: coin.currency,
            hash: coin.hash,
            src: coin.src
        });
    }

    const onSubmit = async data => {
        const body = {
            currency: data.currency,
            pay_user: {
                email: data.email,
                name: data.name,
                surname: data.surname,
                ci: data.ci
            },
            pay_type: "crypto"
        }
        props.doPaymentCrypto(body, props.token)
    };
    return props.show ? (
        (coin.name === 'all') ? (
            <div className="container" id="paymentCrypto">
                <h5>{internationalization("txtCryptoPayment")}</h5>
                <div className="row">
                    {cryptos.map((crypto) => (
                            <div className="col s2" key={crypto.id}>
                                <div className="card darken-1">
                                    <div className="card-content">
                                        <h6>
                                            <b><img className={style.cryptocoins} src={crypto.src}
                                                    alt={crypto.name}/> {crypto.name.toUpperCase()}</b>
                                        </h6>
                                    </div>
                                    <div className="card-action">
                                        <button onClick={() => {
                                            handleCoin(crypto)
                                        }}>
                                            {internationalization("btnToPay")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        ) : (
            <div className="container" id="paymentCrypto">
                <h5>Pago en {coin.name}</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input id="id_currency_cr" name="currency" type="hidden" className="validate"
                           ref={register} value={coin.currency}/>
                    <div className="row">
                        <div className="col s12">
                            <div className="card with-header ">
                                <div className="card-content">
                                    <p>Hash: <b>{coin.hash}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="input-field col s6">
                                <input id="id_name_cr" name="name" type="text" className="validate"
                                       ref={register({required: true, maxLength: 80})}/>
                                <label htmlFor="id_name_cr">
                                    {internationalization("txtNames")}
                                </label>
                                {errors.name && <span>{internationalization("nameReq")}</span>}
                            </div>
                            <div className="input-field col s6">
                                <input id="id_surname_cr" name="surname" type="text" className="validate"
                                       ref={register({required: true, maxLength: 80})}/>
                                <label htmlFor="id_surname_cr">
                                    {internationalization("txtSurnames")}
                                </label>
                                {errors.surname && <span>{internationalization("surnamesReq")}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="input-field col s4">
                                <input id="id_ci_cr" name="ci" type="text" className="validate"
                                       ref={register({required: true, minLength: 6})}/>
                                <label htmlFor="id_ci_cr">
                                    {internationalization("txtCI")}
                                </label>
                                {errors.ci && <span>{internationalization("ciReq")}</span>}
                            </div>
                            <div className="input-field col s4">
                                <input id="id_email_cr" name="email" type="text" className="validate"
                                       ref={register({required: true, minLength: 6})}/>
                                <label htmlFor="id_email_cr">
                                    Email
                                </label>
                                {errors.email && <span>{internationalization("emailReq")}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            {/* <button onClick={ async () => { await doPayment() } }>*/}
                            <button type="submit">
                                {internationalization("txtNotify")}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    ) : props.loading ?
        (
            <div className="loading-container">
                <CircleToBlockLoading className="loading" color="#2B6845"/>
            </div>
        )
        : (props.error) ? (<h6>Error: {props.error}</h6>)
        : (
            <div className="container">
                <h4>
                    Pago en Criptomonedas efectuado
                </h4>
            </div>
        )
}

const mapStateToProps = state => {
    return {
        data: state.paybridge.data,
        show: state.paybridge.show,
        loading: state.paybridge.loading,
        token: state.paybridge.token,
        error: state.paybridge.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        doPaymentCrypto: (body, token) => dispatch(doPaymentCrypto(body, token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentCryptos);
