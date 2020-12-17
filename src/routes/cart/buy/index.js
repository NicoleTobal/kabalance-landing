import { h } from 'preact';
import style from './style.css'
import { useState, useEffect } from 'preact/hooks';
import Delivery from './delivery';
import Pickup from './pickup';
import PaymentsMethods from './paymentVeinte/index';
import internationalization from "../../../i18n/i18n";
import {connect} from "react-redux";
import { getBankPGM, getBankTRF } from "../../../redux";


let BuyCart = (props) => {
  const [activeTab, setActiveTab] = useState(-1);
  const [deliverActiveTab, setDeliverActiveTab] = useState(0);
  useEffect(() => {
    setActiveTab(0);
  }, []);

  const loadBankInfo = async () => {
    await props.getBankPGM(props.token)
    await props.getBankTRF(props.token)
    setActiveTab(1)
  }

  const getClass = (value, index) => value === index ? 'active' : '';
  return (
    <div class={style.buyCartContainer}>
      <ul class="stepper linear">
          <li class={`step ${getClass(activeTab, 0)}`}>
            <div class={`step-title waves-effect waves-dark ${style.stepTitle}`}  onClick={() => setActiveTab(0)}>
              {internationalization("txtStep1")}
            </div>
            <div class="step-content">
              <div class="row">
                <div class="col s12">
                  <ul class="tabs">
                    <li class="tab col s3">
                      <a class={getClass(deliverActiveTab, 0)} onClick={() => setDeliverActiveTab(0)}>
                        {internationalization("btnDelivery")}
                      </a>
                    </li>
                    <li class="tab col s3">
                      <a class={getClass(deliverActiveTab, 1)} onClick={() => setDeliverActiveTab(1)}>
                        {internationalization("btnPickup")}
                      </a>
                    </li>
                  </ul>
                  {deliverActiveTab === 0 ? <Delivery /> : <Pickup />}
                  <button onClick={() => loadBankInfo()}>
                    {internationalization("btnContinue")}
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li class={`step ${getClass(activeTab, 1)}`}>
            <div class={`step-title waves-effect waves-dark ${style.stepTitle}`}  onClick={() => setActiveTab(1)}>
              {internationalization("txtStep2")}
            </div>
            <div class="step-content">
                { /*<div class="row">
                  <div class={`col s6 ${style.alignCenter}`}>
                    <button onClick={() => setActiveTab(1)}>ZELLE</button>
                  </div>
                  <div class="col s6">
                    <button onClick={() => setActiveTab(1)}>VEINTE</button>
                  </div>
                </div>*/ }
                <div className="row">
                  <div className="col s12">
                    <PaymentsMethods />
                  </div>
                </div>
            </div>
          </li>
          <li class={`step ${getClass(activeTab, 2)}`}>
            <div class={`step-title waves-effect waves-dark ${style.stepTitle}`}  onClick={() => setActiveTab(2)}>
              {internationalization("txtStep3")}
            </div>
            <div class="step-content">
              End!!!!!
                <div class="step-actions">
                  <button class="waves-effect waves-dark btn blue next-step" data-feedback="noThing">ENDLESS CALLBACK!</button>
                </div>
            </div>
          </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.paybridge.token,
    accountHolder: state.paybridge.accountHolder,
    bank: state.paybridge.bank,
    accountNumber: state.paybridge.accountNumber,
    rif: state.paybridge.rif,
    phone: state.paybridge.phone
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBankPGM: (token) => dispatch(getBankPGM(token)),
    getBankTRF: (token) => dispatch(getBankTRF(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyCart);
