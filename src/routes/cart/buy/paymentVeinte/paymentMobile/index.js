import {h} from 'preact';
import style from '../../style.css';
import {FormattedMessage} from 'react-intl';

const PaymentMobile = () => {
    return (
        <div id="paymentPaymentMobile">
            <h5>Pago Móvil</h5>
            <div className="row">
                <div className="col-sm-6">
                    <div className="input-field col s12">
                        <textarea id="id_info_paymobile" name="info_paymobile" type="text">
                            Nombre del Cliente:
                            Banco Afiliado:
                            No. Referencia:
                        </textarea>
                        <button onClick={() => setActiveTab(1)}>
                            <FormattedMessage id="btnToPay">
                                {message => {
                                    message
                                }}.
                            </FormattedMessage>
                        </button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-field col s12">
                        <input id="id_paymobile_bs" name="paymobile_bs" type="text" className="validate" required/>
                        <label htmlFor="id_paymobile_bs">
                            <FormattedMessage id="txtAmountBs">
                                {message => {
                                    message
                                }}.
                            </FormattedMessage>
                        </label>
                    </div>
                    <div className="input-field col s12">
                        <input id="id_codref" name="codref" type="text" className="validate" required/>
                        <label htmlFor="id_codref">
                            <FormattedMessage id="txtCodRef">
                                {message => {
                                    message
                                }}.
                            </FormattedMessage>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentMobile;
