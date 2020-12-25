import { h } from 'preact';
import style from '../../style.css';
import { FormattedMessage } from 'react-intl';
import {useEffect} from "preact/hooks";
import {FormSelect} from "materialize-css";

const PaymentCredit = () => {
    useEffect(() => {
        const elems = document.querySelectorAll('select');
        FormSelect.init(elems, {});
    }, []);
    return (
        <div className="container" id="paymentPaymentMobile">
            <h5>Pago Crédito</h5>

            <div className="row">
                <div className="col s12">
                    {/* Name and Lastnames */}
                    <div className="input-field col s6">
                        <input id="id_name" name="name" type="text" className="validate" required/>
                        <label htmlFor="id_name">
                            <FormattedMessage id="txtNames">
                                {message => {
                                    message
                                }}.
                            </FormattedMessage>
                        </label>
                    </div>
                    <div className="input-field col s6">
                        <input id="id_lastnames" name="lastanes" type="text" className="validate" required/>
                        <label htmlFor="id_lastnames">
                            <FormattedMessage id="txtSurnames">
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
                    {/* Card */}
                    <div className="input-field col s6">
                        <input id="id_card" name="card" type="text" className="validate" required/>
                        <label htmlFor="id_card">
                            <FormattedMessage id="txtCard">
                                {message => {
                                    message
                                }}.
                            </FormattedMessage>
                        </label>
                    </div>
                    <div className="input-field col s3">
                        <input id="id_exp" name="exp" type="text" className="validate" required/>
                        <label htmlFor="id_exp">
                            <FormattedMessage id="txtExp">
                                {message => {
                                    message
                                }}.
                            </FormattedMessage>
                        </label>
                    </div>
                    <div className="input-field col s3">
                        <input id="id_cvv" name="cvv" type="text" className="validate" required/>
                        <label htmlFor="id_cvv">
                            <FormattedMessage id="txtCVV">
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
                    <div className="input-field col s6">
                        <select>
                            <option value="" disabled selected>Moneda</option>
                            <option value="1">USD</option>
                            <option value="2">Bs</option>
                            <option value="3">COP</option>
                        </select>
                        <label>Moneda</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="id_quotation" name="quotation" type="number" className="validate" min={0.0} required/>
                        <label htmlFor="id_quotation">
                            <FormattedMessage id="txtQuotation">
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

export default PaymentCredit;