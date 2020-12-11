import { h } from 'preact';
import style from '../../style.css';
import {useEffect} from "preact/hooks";
import {FormSelect} from "materialize-css";
import internationalization from "../../../../../i18n/i18n";

const PaymentCredit = () => {
    useEffect(() => {
        const elems = document.querySelectorAll('select');
        FormSelect.init(elems, {});
    }, []);
    return (
        <div className="container" id="paymentPaymentMobile">
            <h5>{internationalization("txtCreditPayment")}</h5>
            <div className="row">
                <div className="col s12">
                    {/* Name and Lastnames */}
                    <div className="input-field col s6">
                        <input id="id_name" name="name" type="text" className="validate" required/>
                        <label htmlFor="id_name">
                            {internationalization("txtNames")}
                        </label>
                    </div>
                    <div className="input-field col s6">
                        <input id="id_lastnames" name="lastanes" type="text" className="validate" required/>
                        <label htmlFor="id_lastnames">
                            {internationalization("txtSurnames")}
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
                            {internationalization("txtCard")}
                        </label>
                    </div>
                    <div className="input-field col s3">
                        <input id="id_exp" name="exp" type="text" className="validate" required/>
                        <label htmlFor="id_exp">
                            {internationalization("txtExp")}
                        </label>
                    </div>
                    <div className="input-field col s3">
                        <input id="id_cvv" name="cvv" type="text" className="validate" required/>
                        <label htmlFor="id_cvv">
                            {internationalization("txtCVV")}
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
                            {internationalization("txtQuotation")}
                        </label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <button onClick={() => setActiveTab(1)}>
                        {internationalization("btnToPay")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PaymentCredit;