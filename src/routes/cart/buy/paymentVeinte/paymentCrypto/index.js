import React, {h} from 'preact';
import style from '../../style.css';
import {FormattedMessage} from "react-intl";
import bitcoin from '../../../../../assets/images/cryptos/bitcoin.jpeg';
import litecoin from '../../../../../assets/images/cryptos/litecoin.jpeg';
import dash from '../../../../../assets/images/cryptos/dash.jpeg';
import petro from '../../../../../assets/images/cryptos/petro.jpeg';
import ether from '../../../../../assets/images/cryptos/ether.jpeg';
import { useForm } from "react-hook-form";
import { useState } from "preact/hooks";


const cryptos = [
    {id: 1, name: 'bitcoin', currency: 'btc',src: bitcoin, hash: '1cd2122dFW67JHasdqqf415c13f1'},
    {id: 2, name: 'litecoin', currency: 'ltc',src: litecoin, hash: '2dFW67JHasdqqf415c13f11cd212'},
    {id: 3, name: 'dash', currency: 'dash',src: dash, hash: '7JHasdqq1cd2122dFW6f413f115c'},
    {id: 4, name: 'petro', currency: 'petro',src: petro, hash: '1cd21W67JHasdqq5c13f122dF'},
    {id: 5, name: 'ether', currency: 'eth',src: ether, hash: 'f411cd2122dFW67Jsdqqf415c13f1Ha'},
];


const PaymentCryptos = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [coin, setCoin] = useState('all');
    const handleCoin = (coin) => {
        console.log('Valor clickeado: ', coin.name)
        setCoin(coin.name);
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
            pay_type: "crypto",
        }
        console.log('Cuerpo', body)
        //const response = await paymentMobile(body);
    };


    if (coin === 'all') {
        return (
            <div className="container" id="paymentCrypto">
                <h5>Pago Cryptomonedas</h5>
                <div className="row">
                    {cryptos.map((crypto) => (
                            <div className="col s2" key={crypto.id}>
                                <div className="card darken-1">
                                    <div className="card-content">
                                        <h6>
                                            <b><img className={style.cryptocoins} src={crypto.src}
                                                    alt={crypto.name} /> {crypto.name.toUpperCase()}</b>
                                        </h6>
                                    </div>
                                    <div className="card-action">
                                        <FormattedMessage id="btnToPay">
                                            {message => <button onClick={() => {
                                                handleCoin(crypto)
                                            }}>{message}</button>}
                                        </FormattedMessage>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <div className="container" id="paymentCrypto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input id="id_currency_cr" name="currency" type="hidden" className="validate"
                           ref={register} value={coin} />
                    <div className="row">
                        <div className="col s12">
                            <div className="card with-header ">
                                <div className="card-content">
                                    <span className="card-title">Para el Pago en <b>{coin}</b></span>
                                    <p>Hash: <b>1k1h38Schf92k34gVx87s9Fb8d87</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="input-field col s6">
                                <input id="id_name_cr" name="name" type="text" className="validate"
                                       ref={register({required: true, maxLength: 80})} />
                                <label htmlFor="id_name_cr">
                                    <FormattedMessage id="txtNames">
                                        {message => {
                                            message
                                        }}.
                                    </FormattedMessage>
                                </label>
                                {errors.name && <span>
                                    <FormattedMessage id="nameReq">
                                        {message => {
                                            message
                                        }}.
                                    </FormattedMessage>
                                </span>}
                            </div>
                            <div className="input-field col s6">
                                <input id="id_surname_cr" name="surname" type="text" className="validate"
                                       ref={register({required: true, maxLength: 80})} />
                                <label htmlFor="id_surname_cr">
                                    <FormattedMessage id="txtSurnames">
                                        {message => {
                                            message
                                        }}.
                                    </FormattedMessage>
                                </label>
                                {errors.surname && <span><FormattedMessage id="surnamesReq">
                                        {message => {
                                            message
                                        }}.
                                    </FormattedMessage></span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="input-field col s4">
                                <input id="id_ci_cr" name="ci" type="text" className="validate"
                                       ref={register({required: true, minLength: 6})} />
                                <label htmlFor="id_ci_cr">
                                    <FormattedMessage id="txtCI">
                                        {message => {
                                            message
                                        }}.
                                    </FormattedMessage>
                                </label>
                                {errors.ci && <span><FormattedMessage id="ciReq">
                                        {message => {
                                            message
                                        }}.
                                    </FormattedMessage></span>}
                            </div>
                            <div className="input-field col s4">
                                <input id="id_email_cr" name="email" type="text" className="validate"
                                       ref={register({required: true, minLength: 6})} />
                                <label htmlFor="id_email_cr">
                                    Email
                                </label>
                                {errors.email && <span><FormattedMessage id="emailReq">
                                        {message => {
                                            message
                                        }}.
                                    </FormattedMessage></span>}
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            {/* <button onClick={ async () => { await doPayment() } }>*/}
                            <button type="submit">
                                <FormattedMessage id="txtNotify">
                                    {message => {
                                        message
                                    }}.
                                </FormattedMessage>
                            </button>
                        </div>
                    </div>
                </form>
            </div>)
    }
}

export default PaymentCryptos;
