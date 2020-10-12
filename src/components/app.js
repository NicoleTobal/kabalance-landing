import { h, Component } from 'preact';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Products from '../routes/products';
import AboutUs from '../routes/aboutUs';
import Router from 'preact-router';
import Recipes from '../routes/recipes';
import Cart from '../routes/cart';
import { Provider } from 'react-redux';
import cartStore from '../stores/cartStore';
import BuyCart from '../routes/cart/buy';

export default class App extends Component {
  componentDidMount() {
    //cartStore.dispatch({ type: 'RESET' });
  }

	render() {
		return (
      <Provider store={cartStore}>
        <div id="app">
          <Header />
          <Router>
            <Home path="/" />
            <Products path="/products" user="me" />
            <AboutUs path="/aboutUs" />
            <Recipes path="/recipes" />
            <Cart path="/cart" />
            <BuyCart path="/buy" />
          </Router>
        </div>
      </Provider>
		);
	}
}
