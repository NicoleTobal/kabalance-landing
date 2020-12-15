import React, {h, Component} from 'preact';
import style from '../style.css';
import PaymentEmail from "./paymentEmail";
import PaymentMobile from "./paymentMobile";
import PaymentTransfer from "./paymentTransfer";
import PaymentCryptos from "./paymentCrypto";
import PaymentCredit from "./paymentCredit";
import {useState} from 'preact/hooks';
import {textSiteContent} from "../../../../i18n/textContent";
import {doPaymentMobile, getBank, getToken} from "../../../../redux";
import internationalization from "../../../../i18n/i18n";
import {connect} from "react-redux";
import {CircleToBlockLoading} from "react-loadingg";

let PaymentsMethods = (props, {getBank}) => {
    const [showPayEmail, setShowPayEmail] = useState(true);
    const [showPayMobile, setShowPayMobile] = useState(false);
    const [showPayTransfer, setShowPayTransfer] = useState(false);
    const [showPayCrypto, setShowPayCrypto] = useState(false);
    const [showPayCredit, setShowPayCredit] = useState(false);

    const bankInfo = data => {
        props.getBank(props.token)
    };

    const showComponent = (component) => {
        switch (component) {
            case "payment_email":
                setShowPayEmail(true);
                setShowPayMobile(false);
                setShowPayTransfer(false);
                setShowPayCrypto(false);
                setShowPayCredit(false);
                break;
            case "payment_mobile":
                setShowPayMobile(true);
                setShowPayEmail(false);
                setShowPayTransfer(false);
                setShowPayCrypto(false);
                setShowPayCredit(false);
                bankInfo();
                break;
            case "payment_transfer":
                setShowPayTransfer(true);
                setShowPayMobile(false);
                setShowPayEmail(false);
                setShowPayCrypto(false);
                setShowPayCredit(false);
                bankInfo();
                break;
            case "payment_crypto":
                setShowPayCrypto(true);
                setShowPayTransfer(false);
                setShowPayMobile(false);
                setShowPayEmail(false);
                setShowPayCredit(false);
                break;
            case "payment_credit":
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
                <header className={style.header}>
                    <nav>
                        <a activeClassName={style.active}
                           onClick={() => showComponent('payment_email')}>
                            {internationalization("btnEmail")}
                        </a>
                        <a activeClassName={style.active}
                           onClick={() => showComponent('payment_mobile')}>
                            {internationalization("txtMobilePayment")}
                        </a>
                        <a activeClassName={style.active}
                           onClick={() => showComponent('payment_transfer')}>
                            {internationalization("btnTransfer")}
                        </a>
                        <a activeClassName={style.active}
                           onClick={() => showComponent('payment_crypto')}>
                            {internationalization("btnCrypto")}
                        </a>
                        <a activeClassName={style.active}
                           onClick={() => showComponent('payment_credit')}>
                            {internationalization("btnCreditCard")}
                        </a>
                    </nav>
                </header>
                {showPayEmail && <PaymentEmail/>}
                {showPayMobile && <PaymentMobile/>}
                {showPayTransfer && <PaymentTransfer/>}
                {showPayCrypto && <PaymentCryptos/>}
                {showPayCredit && <PaymentCredit/>}
            </div>
        ) : (props.loading) // Show Loading of request
            ? (<div className="loading-container">
                <CircleToBlockLoading className="loading" color="#2B6845"/>
            </div>) : (props.error) ? (<h6>Error: {props.error}</h6>)
                : (
                    <div className="card with-header ">
                        <div className="card-content">
                            <span className="card-title">Pago realizado</span>
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
        accountNumber: state.paybridge.accountNumber
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBank: (token) => dispatch(getBank(token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentsMethods);
