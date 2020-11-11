import { h } from 'preact';
import {FormattedMessage} from "react-intl";


const doPayment = async () => {
    await listPayments(); // Temporally list Payments here
}

const PaymentEmail = () => {
    return (
        <div className="container" id="paymentEmail">
            <h5>Pago Email</h5>
            <div className="row">
                <div className="col-sm-6">
                    <div className="input-field col s12">
                        <input id="id_address_pm" name="address_pm" value="usuario@email.com" type="text" className="validate" required/>
                        <button onClick={() => { doPayment() } }>
                            <FormattedMessage id="btnToPay">
                                {message => { message } }.
                            </FormattedMessage>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentEmail;
