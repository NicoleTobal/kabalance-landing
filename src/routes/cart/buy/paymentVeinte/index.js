import {h, Component} from 'preact';
import style from '../style.css';
import PaymentEmail from "./paymentEmail";
import PaymentMobile from "./paymentMobile";
import PaymentTransfer from "./paymentTransfer";
import PaymentCrypto from "./paymentCrypto";
import PaymentCredit from "./paymentCredit";
import {FormattedMessage} from "react-intl";
import {useState, useEffect} from 'preact/hooks';
import {textSiteContent} from "../../../../i18n/textContent";

let PaymentsMethods = ({}) => {
    const [showPayEmail, setShowPayEmail] = useState(true);
    const [showPayMobile, setShowPayMobile] = useState(false);
    const [showPayTransfer, setShowPayTransfer] = useState(false);
    const [showPayCrypto, setShowPayCrypto] = useState(false);
    const [showPayCredit, setShowPayCredit] = useState(false);

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
                break;
            case "payment_transfer":
                setShowPayTransfer(true);
                setShowPayMobile(false);
                setShowPayEmail(false);
                setShowPayCrypto(false);
                setShowPayCredit(false);
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

    return (
        <div>
            <header className={style.header}>
                <nav>
                    <FormattedMessage id="btnEmail">
                        {message => <a activeClassName={style.active}
                                       onClick={() => showComponent('payment_email')}> {message}</a>}
                    </FormattedMessage>
                    <FormattedMessage id="btnMobilePayment">
                        {message => <a activeClassName={style.active}
                                       onClick={() => showComponent('payment_mobile')}>{message}</a>}
                    </FormattedMessage>
                    <FormattedMessage id="btnTransfer">
                        {message => <a activeClassName={style.active}
                                       onClick={() => showComponent('payment_transfer')}>{message}</a>}
                    </FormattedMessage>
                    <FormattedMessage id="btnCrypto">
                        {message => <a activeClassName={style.active}
                                       onClick={() => showComponent('payment_crypto')}>{message}</a>}
                    </FormattedMessage>
                    <FormattedMessage id="btnCreditCard">
                        {message => <a activeClassName={style.active}
                                       onClick={() => showComponent('payment_credit')}>{message}</a>}
                    </FormattedMessage>
                </nav>
            </header>
            {showPayEmail && <PaymentEmail/>}
            {showPayMobile && <PaymentMobile/>}
            {showPayTransfer && <PaymentTransfer/>}
            {showPayCrypto && <PaymentCrypto/>}
            {showPayCredit && <PaymentCredit/>}
        </div>
    );
};

export default PaymentsMethods;
