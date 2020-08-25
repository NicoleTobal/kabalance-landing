import { h } from 'preact';
import style from './style';
import SocialIcons from './socialIcons';
import CakeAnimation from './cakeAnimation';

const Contact = () => {
  return (
    <div id="contact" class={style.contact}>
      <h2>Contáctanos</h2>
      <SocialIcons />
      <CakeAnimation />
    </div>
  );
}

export default Contact;
