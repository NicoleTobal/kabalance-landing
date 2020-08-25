import { h } from 'preact';
import style from './style';

const AnimatedButton = ({ }) => {
  return (
    <div class={style.container}>
      <button class={style.btn} href="#"><p>PEDIR</p></button>
    </div>
  );
}

export default AnimatedButton;
