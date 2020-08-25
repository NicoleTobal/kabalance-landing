import { h } from 'preact';
import style from './style';

const SocialIcons = () => {
  return (
    <div class={style.sociallinks}>
      <a class={style.sociallink} href='#' title='Whatsapp'>
        <img src="/assets/images/whatsapp.png" />
      </a>
      <a class={style.sociallink} href='https://www.instagram.com/kabalance' target="_blank" rel="noreferrer" title='Instagram'>
        <img src="/assets/images/instagram.png" />
      </a>
    </div>
  );
}

export default SocialIcons;
