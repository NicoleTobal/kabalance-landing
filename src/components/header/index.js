import { h } from 'preact';
import style from './style.css';

const Header = ({ changeSelection }) => {
  return (
    <header class={style.header}>
      <div class={style.logo}>
        <img src="/assets/images/symbol_green.png" />
      </div>
      <nav>
        <a activeClassName={style.active} href="/">Inicio</a>
        <a activeClassName={style.active} href="/products">Productos</a>
        <a activeClassName={style.active} href="/aboutUs">Sobre mi</a>
        <a activeClassName={style.active} href="/recipes">Recetas</a>
      </nav>
      <div class={style.flags} >
        <img src="/assets/images/spain.png" />
        <img class={style.disabled} src="/assets/images/united-states.png" />
        <img class={style.cart} src="/assets/images/shopping-cart.png" />
      </div>
    </header>
  );
};

export default Header;
