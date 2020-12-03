import React, {h} from 'preact';
import style from '../../style.css';
import {FormattedMessage} from "react-intl";
import { paymentTransfer, bankList } from "../../../../../payments/paybridge/PaybridgeOperations";
import { useForm } from "react-hook-form";
import { useState } from "preact/hooks";

const coins = [
    {id: 1, name: 'Bolívares', currency: 'bs'},
    {id: 2, name: 'Dólares', currency: 'usd'},
    {id: 3, name: 'Pesos Chilenos', currency: 'clp' },
    {id: 4, name: 'Pesos Colombianos', currency: 'cop'}
];

const PaymentTransfer = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [ show, setShow ] = useState('form');
    const [coin, setCoin] = useState({
        id: 1,
        name: 'all',
        currency: 'all',
    });

    const handleCoin = (coin) => {
        setCoin({
            id: coin.id,
            name: coin.name,
            currency: coin.currency,
        });
    }

    const onSubmit = async data => {
        setShow('loading')
        const body = {
            amount: data.amount,
            currency: data.currency,
            pay_user: {
                email: data.email,
                name: data.name,
                surname: data.surname,
                ci: data.ci
            },
            pay_type: "trfb",
            source: data.source,
            type_account: data.type_account
        }
        const response = await paymentTransfer(body);
    };

    if (show === 'loading' ) {
        return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        )
    } else if ( show === 'form') {
        if (coin.currency === 'all') {
            return (
                <div className="container" id="paymentTransfer">
                    <h5>Pago Transferencia</h5>
                    <div className="row">
                        {coins.map((coin) => (
                                <div className="col s2" key={coin.id}>
                                    <div className="card darken-1">
                                        <div className="card-content">
                                            <span className="card-title">{coin.name}</span>
                                        </div>
                                        <div className="card-action">
                                            <FormattedMessage id="btnToPay">
                                                {message => <button onClick={() => {
                                                    handleCoin(coin)
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
                <div className="container" id="paymentPaymentMobile" >
                    <h5>Transferencia</h5>
                    <form onSubmit={  handleSubmit(onSubmit)  }>
                        <input id="id_currency_cr" name="currency" type="hidden" className="validate"
                               ref={register} value={coin.currency} />
                        <div className="row">
                            <div className="col s12">
                                <div className="card with-header ">
                                    <div className="card-content">
                                        <span className="card-title">Datos para el Pago en {coin.name}</span>
                                        <p>Nombre del Cliente: <b>Juan Pérez</b></p>
                                        <p> Banco: <b>Banco Mercantil</b></p>
                                        <p>No. Referencia: <b>01100101110101</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Name and surnames*/}
                        <div className="row">
                            <div className="col s12">
                                <div className="input-field col s6">
                                    <input id="id_name_tr" name="name" type="text" className="validate" ref={register({required: true, maxLength: 80})} />
                                    <label htmlFor="id_name_tr">
                                        <FormattedMessage id="txtNames">
                                            {message => { message }}.
                                        </FormattedMessage>
                                    </label>
                                    {errors.name && <span>
                                    <FormattedMessage id="nameReq">
                                        {message => {  message }}.
                                    </FormattedMessage>
                                </span>}
                                </div>
                                <div className="input-field col s6">
                                    <input id="id_surname_tr" name="surname" type="text" className="validate" ref={register({required: true, maxLength: 80})} />
                                    <label htmlFor="id_surname_tr">
                                        <FormattedMessage id="txtSurnames">
                                            {message => {  message }}.
                                        </FormattedMessage>
                                    </label>
                                    {errors.surname && <span><FormattedMessage id="surnamesReq">
                                        {message => { message  }}.
                                    </FormattedMessage></span>}
                                </div>
                            </div>
                        </div>

                        {/* Identification card (CI) & email & phone */}
                        <div className="row">
                            <div className="col s12">
                                <div className="input-field col s6">
                                    <input id="id_ci_tr" name="ci" type="text" className="validate" ref={register({required: true, minLength: 6})} />
                                    <label htmlFor="id_ci_tr">
                                        <FormattedMessage id="txtCI">
                                            {message => { message }}.
                                        </FormattedMessage>
                                    </label>
                                    {errors.ci && <span><FormattedMessage id="ciReq">
                                        {message => { message }}.
                                    </FormattedMessage></span>}
                                </div>
                                <div className="input-field col s6">
                                    <input id="id_email_tr" name="email" type="text" className="validate" ref={register({required: true, minLength: 6})} />
                                    <label htmlFor="id_email_tr">
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

                        {/* Amount, Currency */}
                        <div className="row">
                            <div className="col s12">
                                <div className="input-field col s4">
                                    <input id="id_amount_tr" name="amount" type="text" className="validate" ref={register({required: true})}  />
                                    <label htmlFor="id_amount_tr">
                                        <FormattedMessage id="txtAmount">
                                            {message => { message }}.
                                        </FormattedMessage>
                                    </label>
                                    {errors.amount && <span><FormattedMessage id="amountReq">
                                        {message => { message }}.
                                    </FormattedMessage></span>}
                                </div>

                                <div className="input-field col s2">
                                    <label>
                                        {coin.currency}.
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Pay type & source & Account type */}
                        <div className="row">
                            <div className="col s12">
                                <div className="input-field col s4">
                                    <input id="id_source_tr" name="source" type="text" className="validate" ref={register({required: true, minLength: 6})} />
                                    <label htmlFor="id_source_tr">
                                        <FormattedMessage id="txtAccountNumber">
                                            {message => {
                                                message
                                            }}.
                                        </FormattedMessage>
                                    </label>
                                    {errors.source && <span><FormattedMessage id="sourceReq">
                                        {message => {
                                            message
                                        }}.
                                    </FormattedMessage></span>}
                                </div>
                                <div className="input-field col s2">
                                    <select id="id_type_account_tr"
                                            name="type_account"
                                            className="browser-default"
                                            defaultValue="ahorro"
                                            ref={register({required: true})} >
                                        <option value="corriente">Corriente</option>
                                        <option value="ahorro">Ahorro</option>
                                    </select>
                                    {errors.type_account && <span><FormattedMessage id="accountTypeReq">
                                        {message => { message }}.
                                    </FormattedMessage></span>}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12">
                                <button type="submit">
                                    <FormattedMessage id="btnToPay">
                                        {message => {
                                            message
                                        }}.
                                    </FormattedMessage>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    } else if ( show === 'sent') {
        return (
            <div className="container" >
                <h5>
                    Sent
                </h5>
            </div>
        );
    }

}

export default PaymentTransfer;
