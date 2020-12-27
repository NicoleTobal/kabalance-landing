import { h } from 'preact';
import style from './style';
import MovingImage from '../movingImage';
import { connect } from 'react-redux';
import { addProduct } from '../../../stores/cartStore';

// FIX ME: add another component for products characteristics
let RecipeMenu = ({ title, image, onClickImage }) => {
  return (
    <div class={`${style.recipeContainer}`}>
      <div class={style.cont_principal} >
        <div class={style.cont_central} >
          <div class={`${style.cont_modal} ${style.is_current}`} >
            <div class={style.cont_photo} >
              <div class={style.cont_img_back} onClick={onClickImage}>
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
            {/* <div class={style.cont_text_ingredients} >
              <div class={style.cont_over_hidden} >
                <div class={style.cont_text_det_preparation} >
                  <div class={style.options}>
                    {
                      flavours.length > 0 ? (
                        <div class={style.optionsRow}>
                          <div class={style.title}>{flavorText}</div>
                          <div class="dropdown"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class={`${style.option} dropdown-toggle`}>
                              {selectedFlavour === '' ? selectText : selectedFlavour}
                            </div>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                              {
                                flavours.map((flavour, index) => (
                                  <a class="dropdown-item" onClick={() => setSelectedFlavour(flavour)} key={index}>
                                    <span class={flavour === selectedFlavour ? style.active : ''} />
                                    {flavour}
                                  </a>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      ) : ''
                    }
                    {
                      styles.length > 0 ? (
                        <div class={style.optionsRow}>
                          <div class={style.title}>{styleText}</div>
                          <div class="dropdown"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class={`${style.option} dropdown-toggle`}>
                              {selectedStyle === '' ? selectText : selectedStyle}
                            </div>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                              {
                                styles.map((styleOption, index) => (
                                  <a class="dropdown-item" onClick={() => setSelectedStyle(styleOption)} key={index}>
                                    <span class={styleOption === selectedStyle ? style.active : ''} />
                                    {styleOption}
                                  </a>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      ) : ''
                    }
                    {
                      sizes.length > 0 ? (
                        <div class={style.optionsRow}>
                          <div class={style.title}>{sizeText}</div>
                          <div class="dropdown"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class={`${style.option} dropdown-toggle`}>
                              {selectedSize === '' ? selectText : selectedSize}
                            </div>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                              {
                                sizes.map((size, index) => (
                                  <a class="dropdown-item" onClick={() => setSelectedSize(size)} key={index}>
                                    <span class={size === selectedSize ? style.active : ''} />
                                    {size}
                                  </a>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      ) : ''
                    }
                  </div>
                  <div class={`${style.orderData} ${shouldBlock ? style.disabled : ''}`}>
                    <div class={style.quantity}>
                      <span onClick={() => { if (quantity > 0 && !shouldBlock) { setQuantity(quantity - 1) }}}>-</span>
                      <p>{quantity}</p>
                      <span onClick={() => { if (quantity < 10 && !shouldBlock) { setQuantity(quantity + 1) }}}>+</span>
                    </div>
                    <p class={style.price}>${productPrice * quantity}</p>
                    <FormattedMessage id="btnAdd">
                      {message => <button onClick={addToCart}>{message}</button>}
                    </FormattedMessage>
                  </div>
                </div>
              </div>
              <div class={style.cont_btn_open_dets} onClick={() => {
                onClick(hide);
                setHide(!hide)
              }}>
                <svg id="Capa_1" enable-background="new 0 0 551.13 551.13" height="512" viewBox="0 0 551.13 551.13" width="512" xmlns="http://www.w3.org/2000/svg">
                  <path d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z" />
                </svg>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

RecipeMenu = connect(null, { addProduct })(RecipeMenu);

export default RecipeMenu;
