import { h } from 'preact';
import style from './style';

let Delivery = ({ }) => {
  return (
    <div>
      <div class="input-field col s12">
          <input id="address" name="address" type="text" class="validate" required />
          <label for="address">Dirección</label>
      </div>
      <div class="input-field col s12">
          <input id="address" name="address" type="text" class="validate" required />
          <label for="address">Notas</label>
      </div>
      <div class="input-field col s6">
          <input id="address" name="address" type="date" class="validate" required />
          <label for="address">Fecha</label>
      </div>
      <div class="input-field col s6">
          <input id="address" name="address" type="time" class="validate" required />
          <label for="address">Hora</label>
      </div>
    </div>
  );
};

export default Delivery;
