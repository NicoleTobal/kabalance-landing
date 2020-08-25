import { h, Component, createRef } from 'preact';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Products from '../routes/products';
import AboutUs from '../routes/aboutUs';
import Contact from '../routes/contact';

export default class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selected: null
  //   };
  // }

  // contact = createRef();

  // changeSelection = index => {
  //   this.setState({
  //     selected: index
  //   });
  // };

  // componentDidUpdate() {
  //   this.scrollToSection(this.state.selected);
  // }

  // scrollToSection = index => {
  //   let refs = [this.contact];

  //   if (refs[index].current) {
  //     refs[index].current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "nearest"
  //     });
  //   }
  // };
	
	// /** Gets fired when the route changes.
	//  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	//  *	@param {string} event.url	The newly routed URL
	//  */
	// handleRoute = e => {
	// 	this.currentUrl = e.url;
	// };

	render() {
		return (
			<div id="app">
				<Header changeSelection={index => this.changeSelection(index)} />
        <Home path="/" />
        <Products path="/products" user="me" />
        <AboutUs path="/aboutUs" />
        <Contact path="/contact" />
			</div>
		);
	}
}
