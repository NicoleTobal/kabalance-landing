import { h } from 'preact';
import style from './style';
import { useState, useEffect } from 'preact/hooks';
import Delivery from './delivery';
import Pickup from './pickup';
import {FormattedMessage} from "react-intl";

let BuyCart = ({ }) => {
  const [activeTab, setActiveTab] = useState(-1);
  const [deliverActiveTab, setDeliverActiveTab] = useState(0);
  useEffect(() => {
    setActiveTab(0);
  }, []);
  const getClass = (value, index) => value === index ? 'active' : '';
  return (
    <div class={style.buyCartContainer}>
      <ul class="stepper linear">
          <li class={`step ${getClass(activeTab, 0)}`}>
            <div class={`step-title waves-effect waves-dark ${style.stepTitle}`}  onClick={() => setActiveTab(0)}>
              <FormattedMessage id="txtStep1">
                {message => { message } }.
              </FormattedMessage>
            </div>
            <div class="step-content">
              <div class="row">
                <div class="col s12">
                  <ul class="tabs">
                    <li class="tab col s3">
                      <a class={getClass(deliverActiveTab, 0)} onClick={() => setDeliverActiveTab(0)}>
                        <FormattedMessage id="btnDelivery">
                          {message => { message } }.
                        </FormattedMessage>
                      </a>
                    </li>
                    <li class="tab col s3">
                      <a class={getClass(deliverActiveTab, 1)} onClick={() => setDeliverActiveTab(1)}>
                        <FormattedMessage id="btnPickup">
                          {message => { message } }.
                        </FormattedMessage>
                      </a>
                    </li>
                  </ul>
                  {deliverActiveTab === 0 ? <Delivery /> : <Pickup />}
                  <button onClick={() => setActiveTab(1)}>
                    <FormattedMessage id="btnContinue">
                      {message => { message } }.
                    </FormattedMessage>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li class={`step ${getClass(activeTab, 1)}`}>
            <div class={`step-title waves-effect waves-dark ${style.stepTitle}`}  onClick={() => setActiveTab(1)}>
              <FormattedMessage id="txtStep2">
                {message => { message } }.
              </FormattedMessage>
            </div>
            <div class="step-content">
                <div class="row">
                  <div class={`col s6 ${style.alignCenter}`}>
                    <button onClick={() => setActiveTab(1)}>ZELLE</button>
                  </div>
                  <div class="col s6">
                    <button onClick={() => setActiveTab(1)}>VEINTE</button>
                  </div>
                </div>
            </div>
          </li>
          <li class={`step ${getClass(activeTab, 2)}`}>
            <div class={`step-title waves-effect waves-dark ${style.stepTitle}`}  onClick={() => setActiveTab(2)}>
              <FormattedMessage id="txtStep3">
                {message => { message } }.
              </FormattedMessage>
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

export default BuyCart;
