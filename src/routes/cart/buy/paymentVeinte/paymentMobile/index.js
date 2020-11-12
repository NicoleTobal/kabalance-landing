import React, {h} from 'preact';
import style from '../../style.css';
import {FormattedMessage} from 'react-intl';
import { useForm } from "react-hook-form";
import { Loading } from "../../../../../components/loading/index";
import { paymentMobile } from "../../../../../payments/paybridge/PaybridgeOperations";
import {useEffect, useState} from "preact/hooks";
import ReactLoading from 'react-loading';


export default function PaymentMobile() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = async data => {
        const body = {
            amount: data.amount,
            currency: data.currency,
            pay_user: {
                email: data.email,
                name: data.name,
                surname: data.surname,
                ci: data.ci
            },
            pay_type: "pgm",
            source: data.phone
        }
        const response = await paymentMobile(body);
    };

        return (
            <div className="container" id="paymentPaymentMobile" >
                <h5>Pago Móvil</h5>
                <form onSubmit={  handleSubmit(onSubmit)  }>
                    <div className="row">
                        <div className="col s12">
                            <div className="card with-header ">
                                <div className="card-content">
                                    <span className="card-title">Datos para el Pago</span>
                                    <p>Nombre del Cliente: <b>Juan Pérez</b></p>
                                    <p> Banco: <b>Banco Mercantil</b></p>
                                    <p>No. Referencia: <b>01100101110101</b></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col s12">
                            <div className="input-field col s6">
                                <input id="id_name_pm" name="name" type="text" className="validate" ref={register({required: true, maxLength: 80})} />
                                <label htmlFor="id_name_pm">
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
                                <input id="id_surname_pm" name="surname" type="text" className="validate" ref={register({required: true, maxLength: 80})} />
                                <label htmlFor="id_surname_pm">
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
                    <div className="row">
                        <div className="col s12">
                            <div className="input-field col s4">
                                <input id="id_ci_pm" name="ci" type="text" className="validate" ref={register({required: true, minLength: 6})} />
                                <label htmlFor="id_ci_pm">
                                    <FormattedMessage id="txtCI">
                                        {message => { message }}.
                                    </FormattedMessage>
                                </label>
                                {errors.ci && <span><FormattedMessage id="ciReq">
                                        {message => { message }}.
                                    </FormattedMessage></span>}
                            </div>
                            <div className="input-field col s4">
                                <input id="id_email_pm" name="email" type="text" className="validate" ref={register({required: true, minLength: 6})} />
                                <label htmlFor="id_email_pm">
                                    Email
                                </label>
                                {errors.email && <span><FormattedMessage id="emailReq">
                                        {message => {
                                            message
                                        }}.
                                    </FormattedMessage></span>}
                            </div>

                            <div className="input-field col s4">
                                <input id="id_phone_pm" name="phone" type="tel" className="validate" ref={register({required: true, pattern: /[0-9]/, minLength: 6, maxLength: 12})} />
                                <label htmlFor="id_phone_pm">
                                    <FormattedMessage id="txtPhone">
                                        {message => { message }}.
                                    </FormattedMessage>
                                </label>
                                {errors.phone && <span><FormattedMessage id="phonePat">
                                        {message => { message }}.
                                    </FormattedMessage></span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="input-field col s4">
                                <input id="id_amount" name="amount" type="text" className="validate" ref={register({required: true})}  />
                                <label htmlFor="id_amount">
                                    <FormattedMessage id="txtAmount">
                                        {message => { message }}.
                                    </FormattedMessage>
                                </label>
                                {errors.amount && <span><FormattedMessage id="amountReq">
                                        {message => { message }}.
                                    </FormattedMessage></span>}
                            </div>

                            <div className="input-field col s2">
                                <select id="id_currency"
                                        name="currency"
                                        className="browser-default"
                                        defaultValue="bs"
                                        ref={register({required: true})} >
                                    <option value="bs">Bs</option>
                                    <option value="cop">COP</option>
                                    <option value="usd">USD</option>
                                </select>
                                {errors.currency && <span><FormattedMessage id="currencyReq">
                                        {message => { message }}.
                                    </FormattedMessage></span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            {/* <button onClick={ async () => { await doPayment() } }>*/}
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
        );

}

/*
// Activate select
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});
*/

