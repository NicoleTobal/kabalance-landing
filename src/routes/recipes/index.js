import { h } from 'preact';
import style from './style';
import internationalization from "../../i18n/i18n";

const Recipes = () => {
  return (
    <div class={style.recipes}>
        <h2>{internationalization("titleRecipes")}</h2>
    </div>
  );
}

export default Recipes;
