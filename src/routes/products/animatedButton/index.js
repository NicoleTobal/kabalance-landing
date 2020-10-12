import { h } from 'preact';
import style from './style';

const AnimatedButton = ({ text, extraClass }) => {
  return (
    <div class={style.container}>
      <button class={`${style.btn} ${style[extraClass]}`} href="#"><p>{text}</p></button>
    </div>
  );
}

export default AnimatedButton;
