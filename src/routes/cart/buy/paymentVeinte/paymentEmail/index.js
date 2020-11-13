import React, { h } from 'preact';
import {FormattedMessage} from "react-intl";
import { useForm } from "react-hook-form";
import {paymentMobile} from "../../../../../payments/paybridge/PaybridgeOperations";
import {useState} from "preact/hooks";

const doPayment = async () => {
    await listPayments(); // Temporally list Payments here
}

const PaymentEmail = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [ show, setShow ] = useState('form');
    const onSubmit = async data => {
        setShow('loading')
        const body = {
            amount: data.amount,
            pay_user: {
                email: data.email,
                name: data.name,
                surname: data.surname,
                ci: data.ci
            },
            pay_type: "email"
        }
       // const response = await paymentEmail(body);
        setTimeout(function(){ setShow('sent'); }, 3000);
    };

    if (show === 'loading' ) {
        return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        )
    } else if ( show === 'form') {
        return (
            <div className="container" id="paymentEmail">
                <form onSubmit={  handleSubmit(onSubmit)  }>
                    <div className="row">
                        <div className="col s12">
                            <div className="card with-header ">
                                <div className="card-content">
                                <span className="card-title">
                                    <FormattedMessage id="txtPaymentData">
                                        {message => { message }}.
                                    </FormattedMessage>
                                </span>
                                    <p>Email: <b>test@gmail.com</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="input-field col s4">
                                <input id="id_email_pm" name="email" type="text" className="validate" ref={register({required: true, minLength: 6})} />
                                <label htmlFor="id_email_pm">
                                    <FormattedMessage id="txtYourEmail">
                                        {message => { message }}.
                                    </FormattedMessage>
                                </label>
                                {errors.email && <span><FormattedMessage id="emailReq">
                                        {message => {
                                            message
                                        }}.
                                    </FormattedMessage></span>}
                            </div>
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
        );
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

export default PaymentEmail;
