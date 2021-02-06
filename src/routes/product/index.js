import { h } from 'preact';
import style from './style';
import { useState } from 'preact/hooks';
import { addProduct } from "../../redux";
import { connect } from 'react-redux';

let Product = ({ addProduct, image, images, title, price: productPrice, flavours = [], styles = [], sizes = [] }) => {
  const [selectedFlavour, setSelectedFlavour] = useState(flavours.length ? flavours[0] : '');
  const [selectedStyle, setSelectedStyle] = useState(styles.length > 0 ? styles[0] : '');
  const [selectedSize, setSelectedSize] = useState(sizes.length > 0 ? sizes[0] : '');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const shouldBlock = flavours.length > 0 && selectedFlavour === '' ||
    styles.length > 0 && selectedStyle === '' ||
    sizes.length > 0 && selectedSize === '';
  const addToCart = () => {
    if (!shouldBlock) {
      //add to cart
      addProduct({
        name: title,
        image,
        quantity,
        selectedFlavour,
        selectedSize,
        selectedStyle,
        price: productPrice,
      });
    }
  };
  return (
    <div class={style.product} id="aboutUs">
      <div class="row col-md-12">
        <div class={`col-md-6 ${style.pictures}`}>
          <div class={`row col-md-12 ${style.goback}`}>
            <a href="/products" > 
              <img src="/assets/images/right-arrow.svg" />
              <p>Volver</p>
            </a>
          </div>
          <div class="row col-md-12">
            <div class={`col-md-3 ${style.minified}`}>
              {images.map((i, index) => (
                <img
                  class={ selectedImageIndex === index ? style.selected : '' }
                  src={i}
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
            <div class="col-md-8">
              <img src={images[selectedImageIndex]} />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h4>
            {title.toUpperCase()}
          </h4>
          <h6>${productPrice}</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div class={style.options}> 
            {
              flavours.length > 0 ? (
                <div>
                  <p>Sabor</p>
                  <div class={style.optionsRow}>
                    {
                      flavours.map((flavour, index) => (
                        <a onClick={() => setSelectedFlavour(flavour)} key={index}>
                          <span class={flavour === selectedFlavour ? style.active : ''} >
                            {flavour}
                          </span>
                        </a>
                      ))
                    }
                  </div>
                </div>
              ) : ''
            }
            {
              styles.length > 0 ? (
                <div>
                  <p>Estilo</p>
                  <div class={style.optionsRow}>
                    {
                      styles.map((styleOption, index) => (
                        <a onClick={() => setSelectedStyle(styleOption)} key={index}>
                          <span class={styleOption === selectedStyle ? style.active : ''} >
                            {styleOption}
                          </span>
                        </a>
                      ))
                    }
                  </div>
                </div>
              ) : ''
            }
            {
              sizes.length > 0 ? (
                <div>
                  <p>Tamaño</p>
                  <div class={style.optionsRow}>
                    {
                      sizes.map((size, index) => (
                        <a onClick={() => setSelectedSize(size)} key={index}>
                          <span class={size === selectedSize ? style.active : ''} >
                            {size}
                          </span>
                        </a>
                      ))
                    }
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
            <button onClick={addToCart}>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Product = connect(null, { addProduct })(Product);

export default Product;
