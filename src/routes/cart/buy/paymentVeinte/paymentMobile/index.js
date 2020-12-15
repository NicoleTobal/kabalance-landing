import React, {h} from 'preact';
import style from '../../style.css';
import {useForm} from "react-hook-form";
import {useEffect, useState} from "preact/hooks";
import {connect} from "react-redux";
import internationalization from "../../../../../i18n/i18n";
import {doPaymentMobile, getBank} from "../../../../../redux";


function PaymentMobile(props, {doPaymentMobile}) {
    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = data => {
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
        props.doPaymentMobile(body, props.token)
    };

    return  (
                <div className="container" id="paymentPaymentMobile">
            <h5>
                {internationalization("txtMobilePayment")}
            </h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col s12">
                        <div className="card with-header ">
                            <div className="card-content">
                                <span className="card-title">Datos para el Pago</span>
                                <p>Nombre del Cliente: <b>{props.accountHolder}</b></p>
                                <p> Banco: <b>{props.bank}</b></p>
                                <p>No. Referencia: <b></b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="input-field col s6">
                            <input id="id_name_pm" name="name" type="text" className="validate"
                                   ref={register({required: true, maxLength: 80})}/>
                            <label htmlFor="id_name_pm">
                                {internationalization("txtNames")}
                            </label>
                            {errors.name && <span>
                                    {internationalization("nameReq")}
                                </span>}
                        </div>
                        <div className="input-field col s6">
                            <input id="id_surname_pm" name="surname" type="text" className="validate"
                                   ref={register({required: true, maxLength: 80})}/>
                            <label htmlFor="id_surname_pm">
                                {internationalization("txtSurnames")}
                            </label>
                            {errors.surname && <span> {internationalization("surnamesReq")} </span>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="input-field col s4">
                            <input id="id_ci_pm" name="ci" type="text" className="validate"
                                   ref={register({required: true, minLength: 6})}/>
                            <label htmlFor="id_ci_pm">
                                {internationalization("txtCI")}
                            </label>
                            {errors.ci && <span> {internationalization("ciReq")} </span>}
                        </div>
                        <div className="input-field col s4">
                            <input id="id_email_pm" name="email" type="text" className="validate"
                                   ref={register({required: true, minLength: 6})}/>
                            <label htmlFor="id_email_pm">
                                Email
                            </label>
                            {errors.email && <span> {internationalization("emailReq")} </span>}
                        </div>
                        <div className="input-field col s4">
                            <input id="id_phone_pm" name="phone" type="tel" className="validate"
                                   ref={register({
                                       required: true,
                                       pattern: /[0-9]/,
                                       minLength: 6,
                                       maxLength: 12
                                   })}/>
                            <label htmlFor="id_phone_pm">
                                {internationalization("txtPhone")}
                            </label>
                            {errors.phone && <span> {internationalization("phonePat")} </span>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="input-field col s4">
                            <input id="id_amount" name="amount" type="text" className="validate"
                                   ref={register({required: true})}/>
                            <label htmlFor="id_amount">
                                {internationalization("txtAmount")}
                            </label>
                            {errors.amount && <span> {internationalization("amountReq")} </span>}
                        </div>

                        <div className="input-field col s2">
                            <select id="id_currency"
                                    name="currency"
                                    className="browser-default"
                                    defaultValue="bs"
                                    ref={register({required: true})}>
                                <option value="bs">Bs</option>
                                <option value="cop">COP</option>
                                <option value="usd">USD</option>
                            </select>
                            {errors.currency && <span> {internationalization("currencyReq")} </span>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button type="submit">
                            {internationalization("btnToPay")}
                        </button>
                    </div>
                </div>
            </form>
        </div>
            )
}

const mapStateToProps = state => {
    return {
        data: state.paybridge.data,
        show: state.paybridge.show,
        loading: state.paybridge.loading,
        token: state.paybridge.token,
        error: state.paybridge.error,
        accountHolder: state.paybridge.accountHolder,
        bank: state.paybridge.bank,
        accountNumber: state.paybridge.accountNumber
    }
}

const mapDispatchToProps = dispatch => {
    return {
        doPaymentMobile: (body, token) => dispatch(doPaymentMobile(body, token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentMobile);

