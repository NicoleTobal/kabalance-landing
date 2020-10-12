import { h } from 'preact';
import style from './style.css';
import { connect } from 'react-redux';

let Header = ({ products }) => {
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
        <span class={style.ordersNumber}>
          {products.reduce((prev, product) => {
            return product.quantity + prev
          }, 0)}
        </span>
        <a href="/cart">
          <img class={style.cart} src="/assets/images/shopping-cart.png" />
        </a>
        <p>Ingresar</p>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return { products: state.products };
}

Header = connect(mapStateToProps, null)(Header);
export default Header;

