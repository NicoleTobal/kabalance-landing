import {h} from 'preact';
import style from './style';
import AnimatedButton from '../products/animatedButton';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {addProduct, getToken} from "../../redux";
import {changeProductQuantity, emptyCart, removeProduct} from '../../redux'

let Cart = (props) => {
    return (
        <div class={style.cart}>
            <div class={`${style.header} ${props.products.length === 0 ? style.disabled : ''}`}>
                <btn class={style.emptyCartBtn} onClick={() => props.emptyCart()}>
                    <FormattedMessage id="btnEmptyCart">
                        {message => <spam>{message}</spam>}
                    </FormattedMessage>
                </btn>
            </div>
            <div class={style.tableContainer}>
                {
                    props.products.length === 0 ?
                        <h2>El carrito está vacío</h2> : (
                            <table>
                                <thead>
                                <tr>
                                    <th/>
                                    <th>
                                        <FormattedMessage id="headerProduct">
                                            {message => <spam>{message}</spam>}
                                        </FormattedMessage>
                                    </th>
                                    <th>
                                        <FormattedMessage id="headerDescription">
                                            {message => <spam>{message}</spam>}
                                        </FormattedMessage>
                                    </th>
                                    <th>
                                        <FormattedMessage id="headerQuantity">
                                            {message => <spam>{message}</spam>}
                                        </FormattedMessage>
                                    </th>
                                    <th>
                                        <FormattedMessage id="headerPrice">
                                            {message => <spam>{message}</spam>}
                                        </FormattedMessage>
                                    </th>
                                    <th>
                                        <FormattedMessage id="headerTotal">
                                            {message => <spam>{message}</spam>}
                                        </FormattedMessage>
                                    </th>
                                    <th/>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    props.products.map((product, index) => (
                                        <tr key={index}>
                                            <td/>
                                            <td>{product.name}</td>
                                            <td>{`
                          ${product.selectedFlavour ? `Sabor: ${product.selectedFlavour}` : ''}
                          ${product.selectedStyle ? `Estilo: ${product.selectedStyle}` : ''}
                          ${product.selectedSize ? `Tamaño: ${product.selectedSize}` : ''}
                        `}</td>
                                            <td>
                                                <div class={style.productQuantity}>
                                                    <p>{product.quantity}</p>
                                                    <div class={style.arrows}>
                                                        <svg class={style.upArrow}
                                                             onClick={() => props.changeProductQuantity(product, 1)}
                                                             id="Capa_1" enable-background="new 0 0 551.13 551.13"
                                                             height="512" viewBox="0 0 551.13 551.13" width="512"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z"/>
                                                        </svg>
                                                        <svg class={style.downArrow}
                                                             onClick={() => props.changeProductQuantity(product, -1)}
                                                             id="Capa_1" enable-background="new 0 0 551.13 551.13"
                                                             height="512" viewBox="0 0 551.13 551.13" width="512"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{product.price}</td>
                                            <td>{product.quantity * product.price}</td>
                                            <td>
                                                <img src="/assets/images/delete.png"
                                                     onClick={() => props.removeProduct(product)}/>
                                            </td>
                                        </tr>
                                    ))
                                }
                                <tr class={style.total}>
                                    <td/>
                                    <td/>
                                    <td/>
                                    <td/>
                                    <td/>
                                    <td>${props.products.reduce((prev, prod) => prod.quantity * prod.price + prev, 0)}</td>
                                    <td/>
                                </tr>
                                </tbody>
                            </table>
                        )
                }
            </div>
            <div class={`${style.footer} ${props.products.length === 0 ? style.disabled : ''}`}>
                <a href="/buy" onClick={ () => props.getToken() }>
                    <FormattedMessage id="btnToBuy">
                        {message => <AnimatedButton text={message} onClick={() => {
                        }} extraClass="blackBtn"/>}
                    </FormattedMessage>
                </a>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        products: state.cart.products,
        language: state.language.language,
        token: state.paybridge.token
    };
}

const mapDispatchToProps = dispatch => {
    return {
        emptyCart: () => dispatch(emptyCart()),
        changeProductQuantity: (product, numProd) => dispatch(changeProductQuantity(product, numProd)),
        removeProduct: product => dispatch(removeProduct(product)),
        getToken: () => dispatch(getToken())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
