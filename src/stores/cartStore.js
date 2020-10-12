import { createStore } from 'redux';

function cart(state = { city: '', products: [] }, action) {
  switch (action.type) {
    case 'UPDATE PRODUCTS':
      return { ...state, products: action.products };
    case 'SELECT CITY':
      return { ...state, city: action.city };
    case 'EMPTY CART':
      return { ...state, products: [] };
    case 'RESET':
      return { city: '', products: [] };
    default:
      return state
  }
}

export const addProduct = product => {
  const action = { type: 'UPDATE PRODUCTS', products: cartStore.getState().products };
  if (action.products.map(prod => prod.name).includes(product.name)) {
    return {
      ...action,
      products: action.products.map(prod => {
        if (prod.name === product.name) {
          return { ...prod, quantity: prod.quantity + product.quantity };
        }
        return prod;
      }),
    };
  }
  return { ...action, products: cartStore.getState().products.concat(product)};
};

export const removeProduct = product => {
  return {
    type: 'UPDATE PRODUCTS',
    products: cartStore.getState().products.filter(prod => prod.name !== product.name)
  };
};

export const changeProductQuantity = (product, amountOfChange) => {
  let newQuantity = 0;
  const newState = {
    type: 'UPDATE PRODUCTS',
    products: cartStore.getState().products.map(prod => {
      if (prod.name === product.name) {
        newQuantity = prod.quantity + amountOfChange;
        return { ...prod, quantity: prod.quantity + amountOfChange };
      }
      return prod;
    }),
  };
  if (newQuantity === 0) return removeProduct(product);
  return newState;
};

export const selectCity = city => ({
  type: 'SELECT CITY',
  city,
});

export const emptyCart = () => ({ type: 'EMPTY CART' });

const cartStore = createStore(cart, {city: '', products: []});

export default cartStore;
