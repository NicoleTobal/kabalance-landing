import {h} from 'preact';
import style from './style.css';
import {connect} from 'react-redux';
import {FormattedMessage} from "react-intl";
import {changeLanguage} from "../../redux/language/languageActions";


let Header = (props) => {
    return (
        <header class={style.header}>
            <div class={style.logo}>
                <img src="/assets/images/symbol_green.png"/>
            </div>
            <nav>
                <FormattedMessage id="nav.home">
                    {message => <a activeClassName={style.active} href="/">{message}</a>}
                </FormattedMessage>
                <FormattedMessage id="nav.products">
                    {message => <a activeClassName={style.active} href="/products">{message}</a>}
                </FormattedMessage>
                <FormattedMessage id="nav.about">
                    {message => <a activeClassName={style.active} href="/aboutUs">{message}</a>}
                </FormattedMessage>
                <FormattedMessage id="nav.recipe">
                    {message => <a activeClassName={style.active} href="/recipes">{message}</a>}
                </FormattedMessage>
            </nav>
            <div class={style.flags}>
                <a onClick={() => {
                    props.changeLanguage('es-ES');
                }}>
                    {/*<a onClick={() => { selectLang('es-ES'); }}>*/}
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
                    <FormattedMessage id="nav.signin">
                        {message => <a activeClassName={style.active} href="/">{message}</a>}
                    </FormattedMessage>
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

