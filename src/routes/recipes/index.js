import { h } from 'preact';
import style from './style';
import {FormattedMessage} from "react-intl";

const Recipes = () => {
  return (
    <div class={style.recipes}>
        <FormattedMessage id="titleRecipes">
            {message => <h2>"{message}"</h2>}
        </FormattedMessage>
    </div>
  );
}

export default Recipes;
