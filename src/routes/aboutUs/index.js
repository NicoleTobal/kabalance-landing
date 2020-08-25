import { h } from 'preact';
import style from './style';
import Instagram from './instagram';

const AboutUs = () => {
  return (
    <div class={style.aboutUsContainer} id="aboutUs">
      <div class={style.verticalLine}>
        <svg version="1.1" id="line_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="900px" xmlSpace="preserve">
          <path class={style.path_vert} stroke-width="3" stroke="#2B6845" d="M30 0 v600 400" />
        </svg>
      </div>
      <h2>Sobre nosotros</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <Instagram />
    </div>
  );
}

export default AboutUs;
