import { h } from 'preact';
import style from './style';
import {FormattedMessage} from "react-intl";

let Delivery = ({ }) => {
  return (
    <div>
      <div class="input-field col s12">
          <input id="id_address" name="address" type="text" class="validate" required />
          <label for="id_address">
              <FormattedMessage id="txtAddres">
                  {message => { message } }.
              </FormattedMessage>
          </label>
      </div>
      <div class="input-field col s12">
          <input id="id_notes" name="notes" type="text" class="validate" required />
          <label for="id_notes">
              <FormattedMessage id="txtNotes">
                  {message => { message } }.
              </FormattedMessage>
          </label>
      </div>
      <div class="input-field col s6">
          <input id="id_date" name="date" type="date" class="validate" required />
          <label for="id_date">
              <FormattedMessage id="txtDate">
                  {message => { message } }.
              </FormattedMessage>
          </label>
      </div>
      <div class="input-field col s6">
          <input id="id_time" name="time" type="time" class="validate" required />
          <label for="id_time">
              <FormattedMessage id="txtTime">
                  {message => { message } }.
              </FormattedMessage>
          </label>
      </div>
    </div>
  );
};

export default Delivery;
