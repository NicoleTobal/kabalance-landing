import { h } from 'preact';
import style from '../../style.css';
import { FormattedMessage } from 'react-intl';

const PaymentCredit = () => {
    return (
        <div id="paymentPaymentMobile" >
            <h5>Pago Credit</h5>
            <FormattedMessage id="titlePaymentMobile">
                { message => <h5>"{message}"</h5> }
            </FormattedMessage>
        </div>
    );
}

export default PaymentCredit;