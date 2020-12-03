import {h} from 'preact';
import './style';
import {useState, useEffect} from 'preact/hooks';
import App from './components/app';
import {IntlProvider} from 'react-intl';
import {textSiteContent} from "./i18n/textContent";
import {Provider} from "react-redux";
import store from "./redux/store";

const AppIntl = (props) => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

export default AppIntl;
