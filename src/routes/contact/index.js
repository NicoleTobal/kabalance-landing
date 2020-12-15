import { h } from 'preact';
import style from './style';
import SocialIcons from './socialIcons';
import CakeAnimation from './cakeAnimation';
import {FormattedMessage} from "react-intl";
import internationalization from "../../i18n/i18n";

const Contact = () => {
  return (
    <div id="contact" class={style.contact}>
        <h2>"{internationalization("txtContactUs")}"</h2>
      <SocialIcons />
      <CakeAnimation />
    </div>
  );
}

export default Contact;
