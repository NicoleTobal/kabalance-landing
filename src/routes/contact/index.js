import { h } from 'preact';
import style from './style';
import SocialIcons from './socialIcons';
import CakeAnimation from './cakeAnimation';
import {FormattedMessage} from "react-intl";

const Contact = () => {
  return (
    <div id="contact" class={style.contact}>
        <FormattedMessage id="txtContactUs">
            {message => <h2>"{message}"</h2>}
        </FormattedMessage>
      <SocialIcons />
      <CakeAnimation />
    </div>
  );
}

export default Contact;
