import React from 'preact';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import internationalization from "../../../../../i18n/i18n";
import {doPaymentTransfer} from "../../../../../redux";
import {CircleToBlockLoading} from "react-loadingg";

const coins = [
    {id: 1, name: 'Bolívares', currency: 'bs'},
    {id: 2, name: 'Dólares', currency: 'usd'}
];

function PaymentTransfer(props, {doPaymentTransfer}) {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        const body = {
            amount: data.amount,
            currency: 'bs',
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
        props.doPaymentTransfer(body, props.token);
    };

    return (props.show)
            ? (
                <div className="container" id="paymentPaymentMobile">
                    <h5>
                        {internationalization("txtTransferPayment")}
                    </h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input id="id_currency_cr" name="currency" type="hidden" className="validate"
                               ref={register} value={coins[0].currency}/>
                        <div className="row">
                            <div className="col s12">
                                <div className="card with-header ">
                                    <div className="card-content">
                                        <span className="card-title">Datos para el Pago en {coins[0].name}</span>
                                        <p>Nombre del Cliente: <b>Juan Pérez</b></p>
                                        <p>Banco: <b>Banco Mercantil</b></p>
                                        <p>No. Referencia: <b>01100101110101</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Name and surnames*/}
                        <div className="row">
                            <div className="col s12">
                                <div className="input-field col s6">
                                    <input id="id_name_tr" name="name" type="text" className="validate"
                                           ref={register({required: true, maxLength: 80})}/>
                                    <label htmlFor="id_name_tr">
                                        {internationalization("txtNames")}
                                    </label>
                                    {errors.name && <span>{internationalization("nameReq")}</span>}
                                </div>
                                <div className="input-field col s6">
                                    <input id="id_surname_tr" name="surname" type="text" className="validate"
                                           ref={register({required: true, maxLength: 80})}/>
                                    <label htmlFor="id_surname_tr">
                                        {internationalization("txtSurnames")}
                                    </label>
                                    {errors.surname && <span>{internationalization("surnamesReq")}</span>}
                                </div>
                            </div>
                        </div>

                        {/* Identification card (CI) & email & phone */}
                        <div className="row">
                            <div className="col s12">
                                <div className="input-field col s6">
                                    <input id="id_ci_tr" name="ci" type="text" className="validate"
                                           ref={register({required: true, minLength: 6})}/>
                                    <label htmlFor="id_ci_tr">
                                        {internationalization("txtCI")}
                                    </label>
                                    {errors.ci && <span>{internationalization("ciReq")}</span>}
                                </div>
                                <div className="input-field col s6">
                                    <input id="id_email_tr" name="email" type="text" className="validate"
                                           ref={register({required: true, minLength: 6})}/>
                                    <label htmlFor="id_email_tr">
                                        Email
                                    </label>
                                    {errors.email && <span>{internationalization("emailReq")}</span>}
                                </div>
                            </div>
                        </div>

                        {/* Amount, Currency */}
                        <div className="row">
                            <div className="col s12">
                                <div className="input-field col s4">
                                    <input id="id_amount_tr" name="amount" type="text" className="validate"
                                           ref={register({required: true})}/>
                                    <label htmlFor="id_amount_tr">
                                        {internationalization("txtAmount")}
                                    </label>
                                    {errors.amount && <span> {internationalization("amountReq")} </span>}
                                </div>

                                <div className="input-field col s2">
                                    <label>
                                        {coins[0].currency}.
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Pay type & source & Account type */}
                        <div className="row">
                            <div className="col s12">
                                <div className="input-field col s4">
                                    <input id="id_source_tr" name="source" type="text" className="validate"
                                           ref={register({required: true, minLength: 6})}/>
                                    <label htmlFor="id_source_tr">
                                        {internationalization("txtAccountNumber")}
                                    </label>
                                    {errors.source && <span>
                                                            {internationalization("sourceReq")}
                                                          </span>}
                                </div>
                                <div className="input-field col s2">
                                    <select id="id_type_account_tr"
                                            name="type_account"
                                            className="browser-default"
                                            defaultValue="ahorro"
                                            ref={register({required: true})}>
                                        <option value="corriente">Corriente</option>
                                        <option value="ahorro">Ahorro</option>
                                    </select>
                                    {errors.type_account && <span>
                                                {internationalization("accountTypeReq")}
                                            </span>}
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
            ) : (props.loading) ? (
                <div className="loading-container">
                    <CircleToBlockLoading className="loading" color="#2B6845"/>
                </div>
            )
                : (props.error) ? (<h6>Error: {props.error}</h6>)
                : (
                <div className="container">
                    <h6>
                        Pago por Transferencia efectuado
                    </h6>
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
        doPaymentTransfer: (body, token) => dispatch(doPaymentTransfer(body, token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentTransfer);

