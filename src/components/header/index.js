import {h} from 'preact';
import style from './style.css';
import {connect} from 'react-redux';
import {changeLanguage} from "../../redux/language/languageActions";
import internationalization from "../../i18n/i18n";

let Header = (props) => {
    return (
        <header class={style.header}>
            <div class={style.logo}>
                <img src="/assets/images/symbol_green.png"/>
            </div>
            <nav>
                <a activeClassName={style.active} href="/">
                    {internationalization('nav.home')}
                </a>
                <a activeClassName={style.active} href="/products">
                    {internationalization('nav.products')}
                </a>
                <a activeClassName={style.active} href="/aboutUs">
                    {internationalization('nav.about')}
                </a>
                <a activeClassName={style.active} href="/recipes">
                    {internationalization('nav.recipe')}
                </a>
            </nav>
            <div class={style.flags}>
                <a onClick={() => {
                    props.changeLanguage('es-ES');
                }}>
                    <img src="/assets/images/spain.png"/>
                </a>
                <a onClick={() => {
                    props.changeLanguage('en-US');
                }}>
                    <img className={style.disabled} src="/assets/images/united-states.png"/>
                </a>
                <span class={style.ordersNumber}>
                  {props.products.reduce((prev, product) => {
                      return product.quantity + prev
                  }, 0)}
                </span>
                <a href="/cart">
                    <img class={style.cart} src="/assets/images/shopping-cart.png"/>
                </a>
                <p>
                    <a activeClassName={style.active} href="/">
                        {internationalization('nav.signin')}
                    </a>
                </p>
            </div>
        </header>
    );
};

const mapStateToProps = state => {
    return {products: state.cart.products};
}

const mapDispatchToProps = dispatch => {
    return {
        changeLanguage: language => dispatch(changeLanguage(language))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

