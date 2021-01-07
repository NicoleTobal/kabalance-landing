import React, {h, Component} from 'preact';
import PaymentEmail from "./paymentEmail";
import PaymentMobile from "./paymentMobile";
import PaymentTransfer from "./paymentTransfer";
import PaymentCredit from "./paymentCredit";
import PaymentCrypto from "./paymentCrypto";
import {useState} from 'preact/hooks';
import internationalization from "../../../../i18n/i18n";
import {connect} from "react-redux";
import {CircleToBlockLoading} from "react-loadingg";
import PaymentCryptoResponse from './paymentCrypto/PaymentCryptoResponse';
import PaymentMobileResponse from './paymentMobile/PaymentMobileResponse';
import PaymentTransferResponse from './paymentTransfer/PaymentTransferResponse';
import PaymentCreditResponse from './paymentCredit/PaymentCreditResponse';
import PaymentEmailResponse from './paymentEmail/PaymentEmailResponse';

let PaymentsMethods = (props) => {
    const [activeComponent, setActiveComponent] = useState('payment_email');
    const getClass = (value, index) => value === index ? 'active' : '';

    const showComponent = (component) => {
        switch (component) {
            case "payment_email":
                return <PaymentEmail />
            case "payment_mobile":
                return <PaymentMobile />
            case "payment_transfer":
                return <PaymentTransfer />
            case "payment_crypto":
                return <PaymentCrypto />
            case "payment_credit":
                return <PaymentCredit />
            default:
                return null
        }
    }

    const showResponse = (component) => {
        switch (component) {
            case "payment_email":
                return <PaymentEmailResponse />
            case "payment_mobile":
                return <PaymentMobileResponse />
            case "payment_transfer":
                return <PaymentTransferResponse />
            case "payment_crypto":
                return <PaymentCryptoResponse address={props.address} />
            case "payment_credit":
                return <PaymentCreditResponse />
            default:
                return null
        }
    }

    return props.show ?
        (
            <div>
                <ul className="tabs">
                    <li className="tab col s2">
                        <a class={getClass(activeComponent, 'payment_email')}
                           onClick={() => setActiveComponent('payment_email')}>
                            {internationalization("btnEmail")}
                        </a>
                    </li>
                    <li className="tab col s2">
                        <a class={getClass(activeComponent, 'payment_mobile')}
                           onClick={() => setActiveComponent('payment_mobile')}>
                            {internationalization("txtMobilePayment")}
                        </a>
                    </li>
                    <li className="tab col s3">
                        <a class={getClass(activeComponent, 'payment_transfer')}
                           onClick={() => setActiveComponent('payment_transfer')}>
                            {internationalization("btnTransfer")}
                        </a>
                    </li>
                    <li className="tab col s3">
                        <a class={getClass(activeComponent, 'payment_crypto')}
                           onClick={() => setActiveComponent('payment_crypto')}>
                            {internationalization("btnCrypto")}
                        </a>
                    </li>
                    <li className="tab col s2">
                        <a class={getClass(activeComponent, 'payment_credit')}
                           onClick={() => setActiveComponent('payment_credit')}>
                            {internationalization("btnCreditCard")}
                        </a>
                    </li>
                </ul>
                { showComponent(activeComponent) }
            </div>
        ) : (props.loading) // Show Loading of request
            ? ( <div className="loading-container">
                    <CircleToBlockLoading className="loading" color="#2B6845" />
                </div>)
            : (props.error !== '') ? (<h6>Error: {props.error}</h6>)
                : (
                    <div>
                        <div className="card-content">
                            <p>Tipo de pago : {props.payment_type}</p>
                            <span className="card-title">{internationalization('txtNotifySended')}</span>
                            { showResponse(props.payment_type) }
                        </div>
                    </div>
                )
};

const mapStateToProps = state => {
    return {
        show: state.paybridge.show,
        loading: state.paybridge.loading,
        token: state.paybridge.token,
        accountHolder: state.paybridge.accountHolder,
        bank: state.paybridge.bank,
        accountNumber: state.paybridge.accountNumber,
        rif: state.paybridge.rif,
        phone: state.paybridge.phone,
        payment_type: state.paybridge.payment_type,
        error: state.paybridge.error
    }
}


export default connect(mapStateToProps, null)(PaymentsMethods);
