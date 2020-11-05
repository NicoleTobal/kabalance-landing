import { h } from 'preact';
import style from '../../style.css';
import {FormattedMessage} from "react-intl";

const PaymentEmail = () => {
    return (
        <div className="container" id="paymentEmail">
            <h5>Pago Email</h5>
            <div className="row">
                <div className="col-sm-6">
                    <div className="input-field col s12">
                        <input id="id_address" name="address" value="usuario@email.com" type="text" className="validate" required/>
                        <button onClick={() => setActiveTab(1)}>
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
