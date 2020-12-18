import {h} from 'preact';
import './style';
import App from './components/app';
import {Provider} from "react-redux";
import store from "./redux/store";

const AppIntl = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default AppIntl;
