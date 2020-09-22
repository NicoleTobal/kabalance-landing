import { h, Component } from 'preact';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Products from '../routes/products';
import AboutUs from '../routes/aboutUs';
import Contact from '../routes/contact';
import Router from 'preact-router';
import Recipes from '../routes/recipes';

export default class App extends Component {
	render() {
		return (
			<div id="app">
        <Header changeSelection={index => this.changeSelection(index)} />
        <Router>
          <Home path="/" />
          <Products path="/products" user="me" />
          <AboutUs path="/aboutUs" />
          <Recipes path="/recipes" />
        </Router>
			</div>
		);
	}
}
