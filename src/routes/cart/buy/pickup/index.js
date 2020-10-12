import { h } from 'preact';
import style from './style';
import { useEffect } from 'preact/hooks';
import { FormSelect } from 'materialize-css';

let Pickup = ({ }) => {
  useEffect(() => {
    const elems = document.querySelectorAll('select');
    FormSelect.init(elems, {});
  }, []);
  return (
    <div>
      <div class="input-field col s12">
        <select>
          <option value="" disabled selected>Seleccionar</option>
          <option value="1">Los Naranjos</option>
          <option value="2">El hatillo</option>
        </select>
        <label>Sede</label>
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

export default Pickup;
