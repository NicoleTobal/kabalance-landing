import {h} from 'preact';
import style from '../../style.css';
import {FormattedMessage} from 'react-intl';

const PaymentMobile = () => {
    return (
        <div className="container" id="paymentPaymentMobile">
            <h5>Pago Móvil</h5>

            <div className="row">
                <form className="col s6">
                    <div className="card with-header ">
                        <div className="card-content">
                            <span className="card-title">Datos para el Pago</span>
                            <p>Nombre del Cliente: <b>Juan Pérez</b></p>
                            <p> Banco: <b>Banco Mercantil</b></p>
                            <p>No. Referencia: <b>01100101110101</b></p>
                        </div>
                    </div>
                </form>
                <div className="col s6">
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
            <div className="row">
                <div className="col s12">
                    <button onClick={() => setActiveTab(1)}>
                        <FormattedMessage id="btnToPay">
                            {message => {
                                message
                            }}.
                        </FormattedMessage>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PaymentMobile;
