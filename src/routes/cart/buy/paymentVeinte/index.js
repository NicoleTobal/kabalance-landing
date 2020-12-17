import React, {h, Component} from 'preact';
import style from '../style.css';
import PaymentEmail from "./paymentEmail";
import PaymentMobile from "./paymentMobile";
import PaymentTransfer from "./paymentTransfer";
import PaymentCredit from "./paymentCredit";
import PaymentCrypto from "./paymentCrypto";
import {useState} from 'preact/hooks';
import {textSiteContent} from "../../../../i18n/textContent";
import {doPaymentMobile, getToken} from "../../../../redux";
import internationalization from "../../../../i18n/i18n";
import {connect} from "react-redux";
import {CircleToBlockLoading} from "react-loadingg";

let PaymentsMethods = (props, {getBank}) => {
    const [showPayEmail, setShowPayEmail] = useState(true);
    const [showPayMobile, setShowPayMobile] = useState(false);
    const [showPayTransfer, setShowPayTransfer] = useState(false);
    const [showPayCrypto, setShowPayCrypto] = useState(false);
    const [showPayCredit, setShowPayCredit] = useState(false);
    const [activeTab, setActiveTab] = useState('payment_email');
    const getClass = (value, index) => value === index ? 'active' : '';
    const showComponent = (component) => {
        switch (component) {
            case "payment_email":
                setActiveTab('payment_email');
                setShowPayEmail(true);
                setShowPayMobile(false);
                setShowPayTransfer(false);
                setShowPayCrypto(false);
                setShowPayCredit(false);
                break;
            case "payment_mobile":
                setActiveTab('payment_mobile');
                setShowPayMobile(true);
                setShowPayEmail(false);
                setShowPayTransfer(false);
                setShowPayCrypto(false);
                setShowPayCredit(false);
                break;
            case "payment_transfer":
                setActiveTab('payment_transfer');
                setShowPayTransfer(true);
                setShowPayMobile(false);
                setShowPayEmail(false);
                setShowPayCrypto(false);
                setShowPayCredit(false);
                break;
            case "payment_crypto":
                setActiveTab('payment_crypto');
                setShowPayCrypto(true);
                setShowPayTransfer(false);
                setShowPayMobile(false);
                setShowPayEmail(false);
                setShowPayCredit(false);
                break;
            case "payment_credit":
                setActiveTab('payment_credit');
                setShowPayCredit(true);
                setShowPayCrypto(false);
                setShowPayTransfer(false);
                setShowPayMobile(false);
                setShowPayEmail(false);
                break;
            default:
                null
        }
    }

    return props.show ?
        (
            <div>
                <ul className="tabs">
                    <li className="tab col s1">
                    </li>
                    <li className="tab col s2">
                        <a class={getClass(activeTab, 'payment_email')}
                           onClick={() => showComponent('payment_email')}>
                            {internationalization("btnEmail")}
                        </a>
                    </li>
                    <li className="tab col s2">
                        <a class={getClass(activeTab, 'payment_mobile')}
                           onClick={() => showComponent('payment_mobile')}>
                            {internationalization("txtMobilePayment")}
                        </a>
                    </li>
                    <li className="tab col s2">
                        <a class={getClass(activeTab, 'payment_transfer')}
                           onClick={() => showComponent('payment_transfer')}>
                            {internationalization("btnTransfer")}
                        </a>
                    </li>
                    <li className="tab col s2">
                        <a class={getClass(activeTab, 'payment_crypto')}
                           onClick={() => showComponent('payment_crypto')}>
                            {internationalization("btnCrypto")}
                        </a>
                    </li>
                    <li className="tab col s2">
                        <a class={getClass(activeTab, 'payment_credit')}
                           onClick={() => showComponent('payment_credit')}>
                            {internationalization("btnCreditCard")}
                        </a>
                    </li>
                    <li className="tab col s1">
                    </li>
                </ul>
                {showPayEmail && <PaymentEmail/>}
                {showPayMobile && <PaymentMobile/>}
                {showPayTransfer && <PaymentTransfer/>}
                {showPayCrypto && <PaymentCrypto/>}
                {showPayCredit && <PaymentCredit/>}
            </div>
        ) : (props.loading) // Show Loading of request
            ? (<div className="loading-container">
                <CircleToBlockLoading className="loading" color="#2B6845"/>
            </div>) : (props.error) ? (<h6>Error: {props.error}</h6>)
                : (
                    <div className="card with-header ">
                        <div className="card-content">
                            <span className="card-title">{internationalization('txtNotifySended')}</span>
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
        phone: state.paybridge.phone
    }
}

export default connect(mapStateToProps, null)(PaymentsMethods);
