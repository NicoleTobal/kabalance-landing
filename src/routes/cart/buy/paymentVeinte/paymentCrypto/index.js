import { h } from 'preact';
import style from '../../style.css';
import {FormattedMessage} from "react-intl";

const PaymentCrypto = () => {
    return (
        <div id="paymentEmail">
            <h5>Pago Crypto</h5>
            <FormattedMessage id="titlePaymentCrypto">
                {message => <h5>"{message}"</h5>}
            </FormattedMessage>
        </div>
    );
}

export default PaymentCrypto;
