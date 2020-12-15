import {h} from 'preact';
import style from './style';
import {useState, useEffect} from 'preact/hooks';
import MovingImage from '../movingImage';
import {connect} from 'react-redux';
import {addProduct} from '../../../redux';
import internationalization from "../../../i18n/i18n";

// FIX ME: add another component for products characteristics
let RecipeMenu = ({language, addProduct, image, title, price: productPrice, flavours = [], styles = [], sizes = [], onClick, collapsed}) => {
    const [hide, setHide] = useState(true);
    const [selectedFlavour, setSelectedFlavour] = useState('');
    const [selectedStyle, setSelectedStyle] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(0);
    const shouldBlock = flavours.length > 0 && selectedFlavour === '' ||
        styles.length > 0 && selectedStyle === '' ||
        sizes.length > 0 && selectedSize === '';
    const selectText = (language === 'es-ES' ? 'Seleccionar' : 'Select');
    const sizeText = (language === 'es-ES' ? 'TAMAÑO' : 'SIZE');
    const flavorText = (language === 'es-ES' ? 'SABOR' : 'FLAVOR');
    const styleText = (language === 'es-ES' ? 'ESTILO' : 'STYLE');
    useEffect(() => {
        if (collapsed) {
            setHide(true);
        }
    }, [collapsed])
    useEffect(() => {
        if (!hide) {
            setQuantity(0);
        }
    }, [hide]);
    const addToCart = () => {
        if (!shouldBlock) {
            //add to cart
            const productData = {
                name: title,
                image,
                quantity,
                selectedFlavour,
                selectedSize,
                selectedStyle,
                price: productPrice,
            }

            addProduct(productData);
            setHide(true);
            onClick(true);
        }
    };
    return (
        <div
            class={`${style.recipeContainer} ${hide || collapsed ? style.hide : ''} ${collapsed ? style.collapsed : ''}`}>
            <div class={style.cont_principal}>
                <div class={style.cont_central}>
                    <div
                        class={`${style.cont_modal} ${hide || collapsed ? '' : style.cont_modal_active} ${style.is_current}`}>
                        <div class={style.cont_photo}>
                            <div class={style.cont_img_back}>

                                <MovingImage
                                    current={0}
                                    slide={{
                                        index: 0,
                                        src: image
                                    }}
                                />
                            </div>
                            <div class={style.cont_detalles}>
                                <h3>{title}</h3>
                            </div>
                        </div>
                        <div class={style.cont_text_ingredients}>
                            <div class={style.cont_over_hidden}>
                                <div class={style.cont_text_det_preparation}>
                                    <div class={style.options}>
                                        {
                                            flavours.length > 0 ? (
                                                <div class={style.optionsRow}>
                                                    <div class={style.title}>{flavorText}</div>
                                                    <div class="dropdown" type="button" id="dropdownMenuButton"
                                                         data-toggle="dropdown" aria-haspopup="true"
                                                         aria-expanded="false">
                                                        <div class={`${style.option} dropdown-toggle`}>
                                                            {selectedFlavour === '' ? selectText : selectedFlavour}
                                                        </div>
                                                        <div class="dropdown-menu dropdown-menu-right"
                                                             aria-labelledby="dropdownMenuButton">
                                                            {
                                                                flavours.map((flavour, index) => (
                                                                    <a class="dropdown-item"
                                                                       onClick={() => setSelectedFlavour(flavour)}
                                                                       key={index}>
                                                                        <span
                                                                            class={flavour === selectedFlavour ? style.active : ''}/>
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
                                                    <div class="dropdown" type="button" id="dropdownMenuButton"
                                                         data-toggle="dropdown" aria-haspopup="true"
                                                         aria-expanded="false">
                                                        <div class={`${style.option} dropdown-toggle`}>
                                                            {selectedStyle === '' ? selectText : selectedStyle}
                                                        </div>
                                                        <div class="dropdown-menu dropdown-menu-right"
                                                             aria-labelledby="dropdownMenuButton">
                                                            {
                                                                styles.map((styleOption, index) => (
                                                                    <a class="dropdown-item"
                                                                       onClick={() => setSelectedStyle(styleOption)}
                                                                       key={index}>
                                                                        <span
                                                                            class={styleOption === selectedStyle ? style.active : ''}/>
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
                                                    <div class="dropdown" type="button" id="dropdownMenuButton"
                                                         data-toggle="dropdown" aria-haspopup="true"
                                                         aria-expanded="false">
                                                        <div class={`${style.option} dropdown-toggle`}>
                                                            {selectedSize === '' ? selectText : selectedSize}
                                                        </div>
                                                        <div class="dropdown-menu dropdown-menu-right"
                                                             aria-labelledby="dropdownMenuButton">
                                                            {
                                                                sizes.map((size, index) => (
                                                                    <a class="dropdown-item"
                                                                       onClick={() => setSelectedSize(size)}
                                                                       key={index}>
                                                                        <span
                                                                            class={size === selectedSize ? style.active : ''}/>
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
                                            <span onClick={() => {
                                                if (quantity > 0 && !shouldBlock) {
                                                    setQuantity(quantity - 1)
                                                }
                                            }}>-</span>
                                            <p>{quantity}</p>
                                            <span onClick={() => {
                                                if (quantity < 10 && !shouldBlock) {
                                                    setQuantity(quantity + 1)
                                                }
                                            }}>+</span>
                                        </div>
                                        <p class={style.price}>${productPrice * quantity}</p>
                                        <button onClick={addToCart}>{internationalization("btnAdd")}</button>
                                    </div>
                                </div>
                            </div>
                            <div class={style.cont_btn_open_dets} onClick={() => {
                                onClick(hide);
                                setHide(!hide)
                            }}>
                                <svg id="Capa_1" enable-background="new 0 0 551.13 551.13" height="512"
                                     viewBox="0 0 551.13 551.13" width="512" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        products: state.cart.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: product => dispatch(addProduct(product))
    }
}

RecipeMenu = connect(mapStateToProps, mapDispatchToProps)(RecipeMenu);

export default RecipeMenu;
