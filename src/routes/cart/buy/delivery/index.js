import { h } from 'preact';
import internationalization from "../../../../i18n/i18n";

let Delivery = ({ }) => {
  return (
    <div>
      <div class="input-field col s12">
          <input id="id_address" name="address" type="text" class="validate" required />
          <label for="id_address">
              {internationalization("txtAddres")}
          </label>
      </div>
      <div class="input-field col s12">
          <input id="id_notes" name="notes" type="text" class="validate" required />
          <label for="id_notes">
              {internationalization("txtNotes")}
          </label>
      </div>
      <div class="input-field col s6">
          <input id="id_date" name="date" type="date" class="validate" required />
          <label for="id_date">
              {internationalization("txtDate")}
          </label>
      </div>
      <div class="input-field col s6">
          <input id="id_time" name="time" type="time" class="validate" required />
          <label for="id_time">
              {internationalization("txtTime")}
          </label>
      </div>
    </div>
  );
};

export default Delivery;
