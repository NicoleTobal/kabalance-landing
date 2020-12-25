import {h} from 'preact';
import './style';
import {useState, useEffect} from 'preact/hooks';
import App from './components/app';
import {IntlProvider} from 'react-intl';
import {textSiteContent} from "./i18n/textContent";

const AppIntl = () => {
    const [content, setContent] = useState(textSiteContent['es-ES']);
    const [productsLang, setProductsLang] = useState('es-ES');
    let lang = 'es-ES';
    return (<IntlProvider messages={content} locale='en-US' defaultLocale="es'ES">
        <App
            selectLang={
                (language) => {
                    setContent(textSiteContent[language]);
                    setProductsLang(language);
                }
            }
            language={productsLang}
        />
    </IntlProvider>);
};

export default AppIntl;
