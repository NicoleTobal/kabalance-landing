import {
    EMPTY_CART,
    SELECT_CITY,
    UPDATE_PRODUCTS,
    GET_PRODUCTS,
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from "./cartTypes";

/**
 * empty cart is an action creator
 * @returns {{type: string}}
 */
export const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

/**
 * Empty Cart is an action creator
 */
export const emptyCart = () => {
    return {
        type: EMPTY_CART
    }
}

/**
 * Select City action creator
 */
export const selectCity = citySelected => ({
    type: SELECT_CITY,
    city: citySelected,
});

/**
 * Add Product action creator
 */
export const addProduct = product => {
    return {
        type: ADD_PRODUCT,
        products: product
    }
}
/**
 * Remove Product action creator
 */
export const removeProduct = product => {
    return {
        type: REMOVE_PRODUCT,
        products: product
    };
};

/**
 * Change Products in Cart action creator
 */
export const changeProductQuantity = (product, numProd) => {
    return {
        type: UPDATE_PRODUCTS,
        products: product,
        quantity: numProd
    }
};








