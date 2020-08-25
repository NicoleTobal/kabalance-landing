import { h } from 'preact';
import style from './style.css';

const Header = ({ changeSelection }) => {
  return (
    <header class={style.header}>
      <div class={style.logo}>
        <img src="/assets/images/symbol_white.png" />
      </div>
      <nav>
        <a activeClassName={style.active} href="#home">Inicio</a>
        <a activeClassName={style.active} href="#products">Postres</a>
        <a activeClassName={style.active} href="#aboutUs">Sobre nosotros</a>
        <a activeClassName={style.active} href="#contact">Contáctanos</a>
      </nav>
      <div class={style.flags} >
        <img src="/assets/images/spain.png" />
        <img class={style.disabled} src="/assets/images/united-states.png" />
      </div>
    </header>
  );
};

export default Header;
