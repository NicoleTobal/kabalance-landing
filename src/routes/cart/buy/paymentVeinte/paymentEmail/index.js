import React, {h} from 'preact';
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { doPaymentEmail } from "../../../../../redux";
import internationalization from "../../../../../i18n/i18n";

function PaymentEmail(props) {

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = async data => {
        const body = {
            amount: data.amount,
            pay_user: {
                email: data.email,
            },
            pay_type: "email"
        }
        props.doPaymentEmail(body, props.token)
    };

    return props.show ?
        // Show the Payment Mobile Form
        (
            <div className="container" id="paymentEmail">
                <h5>
                    {internationalization("txtEmailPayment")}
                </h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col s12">
                            <div className="card with-header ">
                                <div className="card-content">
                                    <span className="card-title">
                                        {internationalization('txtPaymentData')}
                                    </span>
                                    <p>Email: <b>test@gmail.com</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="input-field col s4">
                                <input id="id_email_pm" name="email" type="text" className="validate"
                                       ref={register({required: true, minLength: 6})} />
                                <label htmlFor="id_email_pm">
                                    {internationalization('txtYourEmail')}
                                </label>
                                {errors.email && <span>{internationalization('emailReq')}</span>}
                            </div>
                            <div className="input-field col s4">
                                <input id="id_amount" name="amount" type="text" className="validate"
                                       ref={register({required: true})} />
                                <label htmlFor="id_amount">
                                    {internationalization('txtAmount')}
                                </label>
                                {errors.amount && <span>{internationalization('amountReq')}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button type="submit">
                                {internationalization('btnToPay')}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
        : props.loading ?
            // Show Loading of request
            (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )
            : props.error ?
                // Show errors if ocurrs an exception
                (
                    <h5>{props.data.error}</h5>
                )
                :
                // Show success message
                (
                    <h2>Pago efectuado</h2>
                )
}

const mapStateToProps = state => {
    return {
        data: state.paybridge.data,
        show: state.paybridge.show,
        token: state.paybridge.token
    };
}

const mapDispatchToProps = dispatch => {
    return {
        doPaymentEmail: (body, token) => dispatch(doPaymentEmail(body, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentEmail);
