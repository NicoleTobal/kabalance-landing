import { h } from 'preact';
import style from '../../style.css';
import {FormattedMessage} from "react-intl";

const PaymentTransfer = () => {
    return (
        <div id="paymentTransfer">
            <h5>Pago Transferencia</h5>
            <FormattedMessage id="titlePaymentTransfer">
                {message => <h5>"{message}"</h5>}
            </FormattedMessage>
        </div>
    );
}

export default PaymentTransfer;
