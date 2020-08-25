import { h } from 'preact';
import style from './style';

const ZoomedImage = ({ image }) => {
  return (
    <div class={`${style.item}`}>
      <div class={style.item__details}>
        <img src={image} />
      </div>
    </div>
  );
}

export default ZoomedImage;
