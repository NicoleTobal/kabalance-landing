import {h, Component} from 'preact';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Products from '../routes/products';
import AboutUs from '../routes/aboutUs';
import Router from 'preact-router';
import Recipes from '../routes/recipes';
import Cart from '../routes/cart';
import {connect, Provider} from 'react-redux';
import store from '../redux/store'
import BuyCart from '../routes/cart/buy';
import {IntlProvider} from "react-intl";
import {changeLanguage} from "../redux/language/languageActions";
import {useState} from "preact/hooks";
import {textSiteContent} from "../i18n/textContent";

let App = (props) => {
    return (
        <IntlProvider messages={textSiteContent[props.language]} locale={props.language} defaultLocale={props.language}>
            <div id="app">
                <Header/>
                <Router>
                    <Home path="/"/>
                    <Products path="/products" user="me"/>
                    <AboutUs path="/aboutUs"/>
                    <Recipes path="/recipes"/>
                    <Cart path="/cart"/>
                    <BuyCart path="/buy"/>
                </Router>
            </div>
        </IntlProvider>
    );
}

const mapStateToProps = state => {
    return {language: state.language.language};
}

export default connect(mapStateToProps, null)(App);
