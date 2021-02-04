import {
    GET_PRODUCTS,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    UPDATE_PRODUCTS,
    SELECT_CITY,
    RESET,
    EMPTY_CART
} from "./cartTypes";

import { removeProduct } from "./cartActions";

const initialState = {
    city: '',
    products: [],
    quantity: 0
}


function cartReducer(state = initialState, action) {
    let newQuantity = 0;
    let newProducts = {};
    switch (action.type) {
        case UPDATE_PRODUCTS:
            newProducts = state.products.map(prod => {
                if (prod.name === action.products.name) {
                    newQuantity = prod.quantity + action.quantity;
                    return { ...prod, quantity: newQuantity };
                }
                return prod;
            });
            if (newQuantity === 0) return removeProduct(action.products);
            return {...state, products: newProducts};

        case GET_PRODUCTS:
            return {...state, products: state.products};

        case ADD_PRODUCT:
            if (state.products.map(prod => prod.name).includes(action.products.name)) {
                return {
                    ...state,
                    products: state.products.map(prod => {
                        if (prod.name === action.products.name) {
                            return { ...prod, quantity: prod.quantity + action.products.quantity };
                        }
                        return prod;
                    }),
                };
            }
            return { ...state, products: state.products.concat(action.products)};

        case REMOVE_PRODUCT:
            return {
                    ...state,
                    products: state.products.filter(prod => prod.name !== action.products.name),
                };
        case SELECT_CITY:
            return {...state, city: action.city};
        case EMPTY_CART:
            return {...state, products: []};
        case RESET:
            return {city: '', products: []};
        default:
            return state
    }
}

export default cartReducer;