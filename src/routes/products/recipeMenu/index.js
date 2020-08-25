import { h } from 'preact';
import style from './style';
import { useEffect, useState } from 'preact/hooks';
import MovingImage from '../movingImage';

const RecipeMenu = ({ image, title, isActive, flavours = [], styles = [], sizes = [] }) => {
  const [hide, setHide] = useState(true);
  useEffect(() => {
    if (!isActive) {
      setHide(true);
    }
  }, [isActive]);
  return (
    <div class={`${style.recipeContainer} ${hide ? style.hide : ''}`}>
      <div class={style.cont_principal} >
        <div class={style.cont_central} >
          <div class={`${style.cont_modal} ${hide ? '' : style.cont_modal_active} ${isActive ? style.is_current : ''}`} >
            <div class={style.cont_photo} >
              <div class={style.cont_img_back} >
                <MovingImage
                  current={0}
                  slide={{
                    index: 0,
                    src: image
                  }}
                />
              </div>
              <div class={style.cont_detalles} >
                <h3>{title}</h3>
              </div>
            </div>
            <div class={style.cont_text_ingredients} >
              <div class={style.cont_over_hidden} >      
                <div class={style.cont_tabs} ><i>MENU </i></div>
                <div class={style.cont_text_det_preparation} >
                  { flavours.length > 0 ? <p>Sabores</p> : ''}
                  {
                    flavours.map((flavour, index) => <li key={index}>{flavour}</li>)
                  }
                  { styles.length > 0 ? <p>Estilos</p> : ''}
                  {
                    styles.map((style, index) => <li key={index}>{style}</li>)
                  }
                  { sizes.length > 0 ? <p>Tamaños</p> : ''}
                  {
                    sizes.map((size, index) => <li key={index}>{size}</li>)
                  }
                </div>
              </div>
              {
                isActive && (flavours.length > 0 || sizes.length > 0 || styles.length > 0) ? (
                  <div class={style.cont_btn_open_dets} onClick={() => setHide(!hide)}>
                    <svg id="Capa_1" enable-background="new 0 0 551.13 551.13" height="512" viewBox="0 0 551.13 551.13" width="512" xmlns="http://www.w3.org/2000/svg">
                      <path d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z"/>
                    </svg>
                  </div>
                ) : ''
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeMenu;
